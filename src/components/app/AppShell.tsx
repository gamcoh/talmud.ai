"use client";

import Link from "next/link";
import { type ReactNode, useState } from "react";
import { Logo } from "~/components/ui/Logo";
import { UserMenu } from "~/components/ui/UserMenu";
import { signOut, useSession } from "next-auth/react";

type AppShellProps = {
  children: ReactNode;
};

const navLink =
  "rounded-xl px-4 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-400";

const mobileNavLink =
  "block rounded-xl px-4 py-3 text-base font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200";

export function AppShell({ children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const userInitial = session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase() || "U";

  return (
    <div className="min-h-dvh bg-[var(--surface-base)] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--surface-base)]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/dashboard" className="transition-transform hover:scale-105">
            <Logo size="sm" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
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

          {/* Desktop User Menu */}
          <div className="hidden md:block">
            <UserMenu />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ overflow: mobileMenuOpen ? 'visible' : 'hidden' }}
        >
          <nav className="px-4 py-4 space-y-1 border-t border-white/5">
            <Link
              className={mobileNavLink}
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              className={mobileNavLink}
              href="/flashcards"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flashcards
            </Link>
            <Link
              className={mobileNavLink}
              href="/leaderboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leaderboard
            </Link>
            
            {/* Mobile User Section */}
            {session?.user && (
              <div className="pt-3 mt-3 border-t border-white/5 space-y-2">
                {/* User Info Card */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-full bg-gradient-to-br from-ocean-400 to-purple-500 font-semibold text-white text-sm flex-shrink-0 overflow-hidden">
                    {session.user.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name ?? "User"}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <span>{userInitial}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white text-sm truncate">
                      {session.user.name || "User"}
                    </p>
                    <p className="text-xs text-white/60 truncate">
                      {session.user.email}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-medium">Profile</span>
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
