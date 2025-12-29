import { NextRequest, NextResponse } from "next/server";
import { createGoal, getOrCreateUser } from "~/server/gamification/service";
import { db } from "~/server/db";
import { GoalType, GoalPeriod } from "~/generated/prisma";

export async function GET(request: NextRequest) {
  const userKey = request.headers.get("x-user-key");

  if (!userKey) {
    return NextResponse.json({ error: "User key required" }, { status: 400 });
  }

  try {
    const user = await getOrCreateUser(userKey);
    const goals = await db.goal.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ goals });
  } catch (error) {
    console.error("Error fetching goals:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const userKey = request.headers.get("x-user-key");

  if (!userKey) {
    return NextResponse.json({ error: "User key required" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { type, target, period, endDate } = body as {
      type: GoalType;
      target: number;
      period: GoalPeriod;
      endDate?: string;
    };

    const goal = await createGoal(userKey, {
      type,
      target,
      period,
      endDate: endDate ? new Date(endDate) : undefined,
    });

    return NextResponse.json({ goal });
  } catch (error) {
    console.error("Error creating goal:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
