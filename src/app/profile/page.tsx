import { auth } from "~/lib/auth";
import { redirect } from "next/navigation";
import { ProfileClient } from "./ProfileClient";

export const metadata = {
  title: "Profile",
  description: "Manage your profile and account settings",
};

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return <ProfileClient />;
}
