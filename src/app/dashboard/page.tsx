import { Suspense } from "react";
import { DashboardClient } from "~/components/dashboard/DashboardClient";
import { getDashboardData, getStudiedTexts } from "~/server/actions/dashboard";
import { auth } from "~/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user?.id) {
    redirect("/auth/signin");
  }
  
  const [dashboardData, studiedTexts] = await Promise.all([
    getDashboardData(session.user.id),
    getStudiedTexts(session.user.id, 1, 6),
  ]);

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardClient
        initialData={dashboardData}
        initialStudiedTexts={studiedTexts}
      />
    </Suspense>
  );
}

function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-20 bg-white/5 rounded-3xl" />
      <div className="grid gap-6 md:grid-cols-3">
        <div className="h-32 bg-white/5 rounded-3xl" />
        <div className="h-32 bg-white/5 rounded-3xl" />
        <div className="h-32 bg-white/5 rounded-3xl" />
      </div>
      <div className="h-64 bg-white/5 rounded-3xl" />
    </div>
  );
}
