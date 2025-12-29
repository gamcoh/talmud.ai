import { DashboardClient } from "~/components/dashboard/DashboardClient";
import { DashboardProvider } from "~/contexts/DashboardContext";

export default function DashboardPage() {
  return (
    <DashboardProvider>
      <DashboardClient />
    </DashboardProvider>
  );
}
