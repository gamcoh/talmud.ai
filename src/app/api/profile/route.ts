import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";
import { requireUser } from "~/server/auth-helpers";
import { signOut } from "~/lib/auth";

const updateSchema = z.object({
  name: z.string().min(1).max(100).optional(),
  image: z.string().url().optional().or(z.literal("")),
});

export async function PATCH(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = updateSchema.parse(body);

    const updated = await db.user.update({
      where: { id: user.id },
      data: {
        name: data.name,
        image: data.image || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    return NextResponse.json({ user: updated });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const user = await requireUser();

    // Delete all related data
    await db.$transaction([
      db.studiedText.deleteMany({ where: { userId: user.id } }),
      db.userFlashcardCompletion.deleteMany({ where: { userId: user.id } }),
      db.points.deleteMany({ where: { userId: user.id } }),
      db.streak.deleteMany({ where: { userId: user.id } }),
      db.level.deleteMany({ where: { userId: user.id } }),
      db.goal.deleteMany({ where: { userId: user.id } }),
      db.account.deleteMany({ where: { userId: user.id } }),
      db.session.deleteMany({ where: { userId: user.id } }),
      db.user.delete({ where: { id: user.id } }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("Error deleting account:", error);
    return NextResponse.json(
      { error: "Failed to delete account" },
      { status: 500 }
    );
  }
}
