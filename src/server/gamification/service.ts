import { db } from "../db";
import { PointAction, GoalType, GoalPeriod } from "../../../generated/prisma";

// Point values for different actions
const POINT_VALUES: Record<PointAction, number> = {
  STUDY_TEXT: 10,
  COMPLETE_FLASHCARD: 5,
  STREAK_BONUS: 25,
  GOAL_COMPLETED: 50,
  LEVEL_UP: 100,
  FIRST_STUDY_TODAY: 15,
};

// Level thresholds (points needed to reach each level)
const LEVEL_THRESHOLDS = [
  0,      // Level 1
  100,    // Level 2
  300,    // Level 3
  600,    // Level 4
  1000,   // Level 5
  1500,   // Level 6
  2100,   // Level 7
  2800,   // Level 8
  3600,   // Level 9
  4500,   // Level 10
  // Add more as needed
];

export async function getUser(userId: string) {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      streak: true,
      level: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // Initialize streak and level if they don't exist
  if (!user.streak) {
    await db.streak.create({
      data: { userId: user.id },
    });
  }

  if (!user.level) {
    await db.level.create({
      data: { userId: user.id },
    });
  }

  return user;
}

export async function awardPoints(
  userId: string,
  action: PointAction,
  metadata?: Record<string, unknown>
) {
  const user = await getUser(userId);
  const points = POINT_VALUES[action];

  // Create points record
  await db.points.create({
    data: {
      userId: user.id,
      action,
      points,
      metadata: metadata ? (metadata as any) : undefined,
    },
  });

  // Update total points and check for level up
  const newTotalPoints = (user.level?.totalPoints ?? 0) + points;
  const currentLevel = user.level?.currentLevel ?? 1;
  const newLevel = calculateLevel(newTotalPoints);

  await db.level.upsert({
    where: { userId: user.id },
    update: {
      totalPoints: newTotalPoints,
      currentLevel: newLevel,
    },
    create: {
      userId: user.id,
      totalPoints: newTotalPoints,
      currentLevel: newLevel,
    },
  });

  // Award level up bonus if applicable
  if (newLevel > currentLevel) {
    await db.points.create({
      data: {
        userId: user.id,
        action: "LEVEL_UP",
        points: POINT_VALUES.LEVEL_UP,
        metadata: { newLevel },
      },
    });
  }

  return { points, newTotalPoints, newLevel, leveledUp: newLevel > currentLevel };
}

function calculateLevel(totalPoints: number): number {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (totalPoints >= LEVEL_THRESHOLDS[i]!) {
      return i + 1;
    }
  }
  return 1;
}

export async function updateStreak(userId: string) {
  const user = await getUser(userId);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const streak = user.streak;
  if (!streak) return null;

  const lastStudy = streak.lastStudyDate
    ? new Date(streak.lastStudyDate)
    : null;
  lastStudy?.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  let newCurrentStreak = streak.currentStreak;
  let shouldAwardBonus = false;

  if (!lastStudy || lastStudy.getTime() < yesterday.getTime()) {
    // Streak broken or first study
    newCurrentStreak = 1;
    shouldAwardBonus = true;
  } else if (lastStudy.getTime() === yesterday.getTime()) {
    // Continuing streak
    newCurrentStreak = streak.currentStreak + 1;
    shouldAwardBonus = true;
  }
  // If lastStudy is today, no change needed

  const newLongestStreak = Math.max(streak.longestStreak, newCurrentStreak);

  const updatedStreak = await db.streak.update({
    where: { userId: user.id },
    data: {
      currentStreak: newCurrentStreak,
      longestStreak: newLongestStreak,
      lastStudyDate: today,
    },
  });

  // Award streak bonus for milestone streaks (every 7 days)
  if (shouldAwardBonus && newCurrentStreak % 7 === 0) {
    await awardPoints(userId, "STREAK_BONUS", { streakDays: newCurrentStreak });
  }

  return updatedStreak;
}

export async function recordStudySession(
  userId: string,
  data: {
    textsRead?: number;
    flashcardsReviewed?: number;
    durationMinutes?: number;
  }
) {
  const user = await getUser(userId);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const session = await db.studySession.upsert({
    where: {
      userId_date: {
        userId: user.id,
        date: today,
      },
    },
    update: {
      textsRead: { increment: data.textsRead ?? 0 },
      flashcardsReviewed: { increment: data.flashcardsReviewed ?? 0 },
      duration: { increment: data.durationMinutes ?? 0 },
    },
    create: {
      userId: user.id,
      date: today,
      textsRead: data.textsRead ?? 0,
      flashcardsReviewed: data.flashcardsReviewed ?? 0,
      duration: data.durationMinutes ?? 0,
    },
  });

  // Check if this is first study today
  const wasFirstStudy =
    session.textsRead === (data.textsRead ?? 0) &&
    session.flashcardsReviewed === (data.flashcardsReviewed ?? 0);

  if (wasFirstStudy) {
    await awardPoints(userId, "FIRST_STUDY_TODAY");
    await updateStreak(userId);
  }

  return session;
}

export async function getUserStats(userId: string) {
  const user = await getUser(userId);

  const [streak, level, recentPoints, studySessions, goals] = await Promise.all([
    db.streak.findUnique({ where: { userId: user.id } }),
    db.level.findUnique({ where: { userId: user.id } }),
    db.points.findMany({
      where: { userId: user.id },
      orderBy: { earnedAt: "desc" },
      take: 10,
    }),
    db.studySession.findMany({
      where: { userId: user.id },
      orderBy: { date: "desc" },
      take: 30,
    }),
    db.goal.findMany({
      where: { userId: user.id, completedAt: null },
    }),
  ]);

  return {
    streak,
    level,
    recentPoints,
    studySessions,
    activeGoals: goals,
    daysStudied: studySessions.length,
  };
}

export async function getCurrentFocus(userId: string) {
  const latestText = await db.studiedText.findFirst({where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return latestText;
}

export async function createGoal(
  userId: string,
  data: {
    type: GoalType;
    target: number;
    period: GoalPeriod;
    endDate?: Date;
  }
) {
  const user = await getUser(userId);

  return db.goal.create({
    data: {
      userId: user.id,
      type: data.type,
      target: data.target,
      period: data.period,
      endDate: data.endDate,
    },
  });
}

export async function updateGoalProgress(
  userId: string,
  goalType: GoalType,
  increment: number
) {
  const user = await getUser(userId);

  const activeGoals = await db.goal.findMany({
    where: {
      userId: user.id,
      type: goalType,
      completedAt: null,
    },
  });

  for (const goal of activeGoals) {
    const newProgress = goal.progress + increment;
    const isCompleted = newProgress >= goal.target;

    await db.goal.update({
      where: { id: goal.id },
      data: {
        progress: newProgress,
        completedAt: isCompleted ? new Date() : null,
      },
    });

    if (isCompleted) {
      await awardPoints(userId, "GOAL_COMPLETED", {
        goalId: goal.id,
        goalType: goal.type,
      });
    }
  }
}

// Daily Wisdom - fetches from Sefaria at runtime
export async function getDailyWisdom() {
  // Get a consistent "random" Pirkei Avot quote for the day
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Pirkei Avot has 5 chapters with varying mishnahs
  // This gives us ~68 unique quotes cycling through the year
  const chapters = [16, 16, 18, 22, 23]; // Number of mishnahs per chapter
  const totalMishnahs = chapters.reduce((a, b) => a + b, 0);
  const index = dayOfYear % totalMishnahs;

  let chapter = 1;
  let mishnah = index + 1;
  for (let i = 0; i < chapters.length; i++) {
    if (mishnah <= chapters[i]!) {
      chapter = i + 1;
      break;
    }
    mishnah -= chapters[i]!;
  }

  const ref = `Pirkei Avot.${chapter}.${mishnah}`;

  try {
    const response = await fetch(
      `https://www.sefaria.org/api/texts/${ref}?context=0`,
      {
        headers: {
          'Accept': 'application/json',
        },
      }
    );
    
    if (!response.ok) {
      throw new Error(`Sefaria API returned ${response.status}`);
    }
    
    const data = await response.json();

    // Sefaria API returns text as array if multiple verses, or string if single verse
    const englishText = Array.isArray(data.text) ? data.text.join(' ') : data.text;
    const hebrewText = Array.isArray(data.he) ? data.he.join(' ') : data.he;

    return {
      ref: data.ref || ref,
      heRef: data.heRef || ref,
      text: englishText || '',
      heText: hebrewText || '',
      url: `https://www.sefaria.org/${ref.replace(/ /g, '_')}`,
    };
  } catch (error) {
    console.error("Failed to fetch daily wisdom:", error);
    return null;
  }
}

export async function getWeeklyCalendar(userId: string) {
  const user = await getUser(userId);
  
  // Get the start of the current week (Sunday)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const currentDayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDayOfWeek); // Go back to Sunday
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday

  const [sessions, studiedTexts] = await Promise.all([
    db.studySession.findMany({
      where: {
        userId: user.id,
        date: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
      },
      orderBy: { date: "asc" },
    }),
    db.studiedText.findMany({
      where: {
        userId: user.id,
        createdAt: {
          gte: startOfWeek,
          lte: new Date(endOfWeek.getTime() + 24 * 60 * 60 * 1000 - 1), // End of Saturday
        },
      },
      select: {
        createdAt: true,
      },
    }),
  ]);

  // Build array of 7 days for the current week (Sun-Sat)
  const weekData = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    
    const session = sessions.find(s => {
      const sessionDate = new Date(s.date);
      return sessionDate.getTime() === date.getTime();
    });
    
    // Check if any texts were studied on this day
    const hasStudiedTexts = studiedTexts.some(st => {
      const studiedDate = new Date(st.createdAt);
      studiedDate.setHours(0, 0, 0, 0);
      return studiedDate.getTime() === date.getTime();
    });

    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];

    weekData.push({
      day: dayName!,
      date: date.toISOString(), // Return ISO string for JSON serialization
      studied: !!session || hasStudiedTexts,
      minutes: session?.duration ?? 0,
    });
  }

  return weekData;
}
