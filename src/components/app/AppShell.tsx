import Link from "next/link";
import { type ReactNode } from "react";
import { Logo } from "~/components/ui/Logo";

type AppShellProps = {
  children: ReactNode;
};

const navLink =
  "rounded-xl px-4 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-400";

const navLinkActive =
  "rounded-xl px-4 py-2 text-sm font-medium text-white bg-white/10";

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh bg-[var(--surface-base)] text-white">
      <header className="sticky top-0 z-10 border-b border-white/5 bg-[var(--surface-base)]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/dashboard" className="transition-transform hover:scale-105">
            <Logo size="sm" />
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

      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
