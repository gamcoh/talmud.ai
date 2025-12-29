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

export async function getOrCreateUser(userKey: string) {
  let user = await db.user.findUnique({
    where: { userKey },
    include: {
      streak: true,
      level: true,
    },
  });

  if (!user) {
    user = await db.user.create({
      data: {
        userKey,
        streak: { create: {} },
        level: { create: {} },
      },
      include: {
        streak: true,
        level: true,
      },
    });
  }

  return user;
}

export async function awardPoints(
  userKey: string,
  action: PointAction,
  metadata?: Record<string, unknown>
) {
  const user = await getOrCreateUser(userKey);
  const points = POINT_VALUES[action];

  // Create points record
  await db.points.create({
    data: {
      userId: user.id,
      action,
      points,
      metadata: metadata ?? undefined,
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

export async function updateStreak(userKey: string) {
  const user = await getOrCreateUser(userKey);
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
    await awardPoints(userKey, "STREAK_BONUS", { streakDays: newCurrentStreak });
  }

  return updatedStreak;
}

export async function recordStudySession(
  userKey: string,
  data: {
    textsRead?: number;
    flashcardsReviewed?: number;
    durationMinutes?: number;
  }
) {
  const user = await getOrCreateUser(userKey);
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
    await awardPoints(userKey, "FIRST_STUDY_TODAY");
    await updateStreak(userKey);
  }

  return session;
}

export async function getUserStats(userKey: string) {
  const user = await getOrCreateUser(userKey);

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

export async function getCurrentFocus(userKey: string) {
  const latestText = await db.studiedText.findFirst({
    where: { userKey },
    orderBy: { createdAt: "desc" },
  });

  return latestText;
}

export async function createGoal(
  userKey: string,
  data: {
    type: GoalType;
    target: number;
    period: GoalPeriod;
    endDate?: Date;
  }
) {
  const user = await getOrCreateUser(userKey);

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
  userKey: string,
  goalType: GoalType,
  increment: number
) {
  const user = await getOrCreateUser(userKey);

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
      await awardPoints(userKey, "GOAL_COMPLETED", {
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

export async function getWeeklyCalendar(userKey: string) {
  const user = await getOrCreateUser(userKey);
  
  // Get study sessions for the last 7 days
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

  const sessions = await db.studySession.findMany({
    where: {
      userId: user.id,
      date: {
        gte: sevenDaysAgo,
        lte: today,
      },
    },
    orderBy: { date: "asc" },
  });

  // Build array of last 7 days
  const weekData = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const session = sessions.find(s => {
      const sessionDate = new Date(s.date);
      return sessionDate.getTime() === date.getTime();
    });

    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];

    weekData.push({
      day: dayName!,
      date: date.toISOString(), // Return ISO string for JSON serialization
      studied: !!session,
      minutes: session?.duration ?? 0,
    });
  }

  return weekData;
}
