import Link from "next/link";
import { type ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

const navLink =
  "rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40";

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#15162c]/30 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/dashboard" className="font-semibold tracking-tight">
            talmud.ai
          </Link>
          <nav className="flex items-center gap-1">
            <Link className={navLink} href="/dashboard">
              Dashboard
            </Link>
            <Link className={navLink} href="/flashcards">
              Flashcards
            </Link>
            <Link className={navLink} href="/leaderboard">
              Leaderboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-10">{children}</main>
    </div>
  );
}
