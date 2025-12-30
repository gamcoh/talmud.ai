import { NextRequest, NextResponse } from "next/server";
import { createGoal } from "~/server/gamification/service";
import { requireUser } from "~/server/auth-helpers";
import { db } from "~/server/db";
import { GoalType, GoalPeriod } from "~/generated/prisma";

export async function GET(request: NextRequest) {
  try {
    const user = await requireUser();
    const goals = await db.goal.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ goals });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("Error fetching goals:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const { type, target, period, endDate } = body as {
      type: GoalType;
      target: number;
      period: GoalPeriod;
      endDate?: string;
    };

    const goal = await createGoal(user.id, {
      type,
      target,
      period,
      endDate: endDate ? new Date(endDate) : undefined,
    });

    return NextResponse.json({ goal });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("Error creating goal:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
