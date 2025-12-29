import { cookies } from "next/headers";

const USER_KEY_COOKIE = "user-key";
const DEFAULT_USER_KEY = "demo-user";

export async function getUserKey(): Promise<string> {
  const cookieStore = await cookies();
  return cookieStore.get(USER_KEY_COOKIE)?.value ?? DEFAULT_USER_KEY;
}

export async function setUserKey(userKey: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(USER_KEY_COOKIE, userKey, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });
}
