import { Suspense } from "react";
import { DashboardClient } from "~/components/dashboard/DashboardClient";
import { getDashboardData, getStudiedTexts } from "~/server/actions/dashboard";
import { getUserKey } from "~/lib/user-session";

export default async function DashboardPage() {
  const userKey = await getUserKey();
  
  const [dashboardData, studiedTexts] = await Promise.all([
    getDashboardData(userKey),
    getStudiedTexts(userKey, 1, 6),
  ]);

  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardClient
        userKey={userKey}
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
