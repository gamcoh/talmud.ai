export default function DashboardLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-8 w-48 bg-white/5 rounded" />
          <div className="h-4 w-64 bg-white/5 rounded" />
        </div>
        <div className="h-12 w-40 bg-white/5 rounded-xl" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="h-32 bg-white/5 rounded-3xl" />
        <div className="h-32 bg-white/5 rounded-3xl" />
        <div className="h-32 bg-white/5 rounded-3xl" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="h-48 bg-white/5 rounded-3xl" />
          <div className="h-64 bg-white/5 rounded-3xl" />
        </div>
        <div className="space-y-6">
          <div className="h-48 bg-white/5 rounded-3xl" />
          <div className="h-48 bg-white/5 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
