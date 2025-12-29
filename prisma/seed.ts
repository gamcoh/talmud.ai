import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Create a demo user
  const userKey = "demo-user";
  
  // Delete existing demo data
  await prisma.user.deleteMany({ where: { userKey } });

  console.log("Creating demo user...");
  const user = await prisma.user.create({
    data: {
      userKey,
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    },
  });

  console.log("Creating streak data...");
  await prisma.streak.create({
    data: {
      userId: user.id,
      currentStreak: 6,
      longestStreak: 14,
      lastStudyDate: new Date(),
    },
  });

  console.log("Creating level data...");
  await prisma.level.create({
    data: {
      userId: user.id,
      currentLevel: 5,
      totalPoints: 1240,
    },
  });

  console.log("Creating point history...");
  const pointsData = [
    { action: "FIRST_STUDY_TODAY", points: 15, daysAgo: 0 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 0 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 0 },
    { action: "COMPLETE_FLASHCARD", points: 5, daysAgo: 0 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 1 },
    { action: "FIRST_STUDY_TODAY", points: 15, daysAgo: 1 },
    { action: "COMPLETE_FLASHCARD", points: 5, daysAgo: 1 },
    { action: "STREAK_BONUS", points: 25, daysAgo: 1 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 2 },
    { action: "FIRST_STUDY_TODAY", points: 15, daysAgo: 2 },
    { action: "GOAL_COMPLETED", points: 50, daysAgo: 3 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 3 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 4 },
    { action: "LEVEL_UP", points: 100, daysAgo: 5 },
    { action: "STUDY_TEXT", points: 10, daysAgo: 6 },
  ];

  for (const point of pointsData) {
    await prisma.points.create({
      data: {
        userId: user.id,
        action: point.action as any,
        points: point.points,
        earnedAt: new Date(Date.now() - point.daysAgo * 24 * 60 * 60 * 1000),
      },
    });
  }

  console.log("Creating study sessions...");
  const studySessionsData = [
    { date: 0, duration: 18, textsRead: 3, flashcardsReviewed: 5 },
    { date: 1, duration: 35, textsRead: 5, flashcardsReviewed: 8 },
    { date: 2, duration: 28, textsRead: 4, flashcardsReviewed: 6 },
    { date: 3, duration: 42, textsRead: 6, flashcardsReviewed: 10 },
    { date: 4, duration: 22, textsRead: 3, flashcardsReviewed: 4 },
    { date: 5, duration: 31, textsRead: 4, flashcardsReviewed: 7 },
    { date: 6, duration: 25, textsRead: 3, flashcardsReviewed: 5 },
    { date: 8, duration: 20, textsRead: 2, flashcardsReviewed: 3 },
    { date: 9, duration: 15, textsRead: 2, flashcardsReviewed: 2 },
    { date: 14, duration: 30, textsRead: 4, flashcardsReviewed: 6 },
    { date: 15, duration: 25, textsRead: 3, flashcardsReviewed: 5 },
    { date: 21, duration: 40, textsRead: 5, flashcardsReviewed: 9 },
  ];

  for (const session of studySessionsData) {
    const date = new Date();
    date.setDate(date.getDate() - session.date);
    date.setHours(0, 0, 0, 0);

    await prisma.studySession.create({
      data: {
        userId: user.id,
        date,
        duration: session.duration,
        textsRead: session.textsRead,
        flashcardsReviewed: session.flashcardsReviewed,
      },
    });
  }

  console.log("Creating goals...");
  await prisma.goal.createMany({
    data: [
      {
        userId: user.id,
        type: "STUDY_MINUTES",
        target: 30,
        progress: 18,
        period: "DAILY",
        startDate: new Date(),
      },
      {
        userId: user.id,
        type: "TEXTS_STUDIED",
        target: 5,
        progress: 3,
        period: "DAILY",
        startDate: new Date(),
      },
      {
        userId: user.id,
        type: "FLASHCARDS_REVIEWED",
        target: 20,
        progress: 12,
        period: "WEEKLY",
        startDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      },
    ],
  });

  console.log("Creating studied texts...");
  const studiedTexts = [
    {
      ref: "Genesis.1.1",
      heRef: "בראשית א:א",
      title: "Genesis 1:1",
      snippet: "In the beginning God created the heaven and the earth.",
      url: "https://www.sefaria.org/Genesis.1.1",
      daysAgo: 0,
    },
    {
      ref: "Berakhot.2a",
      heRef: "ברכות ב׳ א",
      title: "Berakhot 2a",
      snippet: "From what time may the Shema be recited in the evening?",
      url: "https://www.sefaria.org/Berakhot.2a",
      daysAgo: 0,
    },
    {
      ref: "Pirkei_Avot.1.1",
      heRef: "משנה אבות א׳ א׳",
      title: "Pirkei Avot 1:1",
      snippet: "Moses received the Torah from Sinai and transmitted it to Joshua.",
      url: "https://www.sefaria.org/Pirkei_Avot.1.1",
      daysAgo: 1,
    },
    {
      ref: "Shabbat.21b",
      heRef: "שבת כא׳ ב",
      title: "Shabbat 21b",
      snippet: "What is Hanukkah?",
      url: "https://www.sefaria.org/Shabbat.21b",
      daysAgo: 2,
    },
    {
      ref: "Psalms.23",
      heRef: "תהלים כג",
      title: "Psalms 23",
      snippet: "The Lord is my shepherd; I shall not want.",
      url: "https://www.sefaria.org/Psalms.23",
      daysAgo: 3,
    },
  ];

  for (const text of studiedTexts) {
    await prisma.studiedText.create({
      data: {
        userKey,
        userId: user.id,
        ref: text.ref,
        heRef: text.heRef,
        title: text.title,
        snippet: text.snippet,
        url: text.url,
        createdAt: new Date(Date.now() - text.daysAgo * 24 * 60 * 60 * 1000),
      },
    });
  }

  console.log("Creating flashcards...");
  const flashcards = [
    {
      type: "Daf",
      label: "Berakhot 2",
      prompt: "From what time may the Shema be recited in the evening?",
      answer: "From the time when the priests enter to eat their terumah",
    },
    {
      type: "Parasha",
      label: "Bereshit",
      prompt: "What are the first words of the Torah?",
      answer: "In the beginning (Bereishit bara)",
    },
    {
      type: "Perek",
      label: "Pirkei Avot 1",
      prompt: "Who received the Torah from Sinai?",
      answer: "Moses",
    },
  ];

  for (const card of flashcards) {
    await prisma.flashcard.create({
      data: {
        portionType: card.type as any,
        portionLabel: card.label,
        prompt: card.prompt,
        answer: card.answer,
      },
    });
  }

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
