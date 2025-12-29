import Link from "next/link";
import { Logo } from "~/components/ui/Logo";
import { Button } from "~/components/ui/Button";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[var(--surface-base)] flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="animate-pop-in">
          <Logo size="lg" />
        </div>
        
        <h1 className="mt-8 text-4xl sm:text-5xl font-bold tracking-tight text-center text-white animate-slide-up" style={{ animationDelay: "100ms" }}>
          Learn Torah like a game
        </h1>
        
        <p className="mt-4 text-lg text-white/60 text-center max-w-xl animate-slide-up" style={{ animationDelay: "200ms" }}>
          Build a streak, earn points, and master texts with spaced repetition flashcards.
          Make daily learning a habit that sticks.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <Link href="/dashboard">
            <Button variant="primary" size="lg">
              Get Started →
            </Button>
          </Link>
          <Link href="/flashcards">
            <Button variant="secondary" size="lg">
              Try Flashcards
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-4xl w-full stagger-children">
          <div className="rounded-3xl bg-[var(--surface-elevated)] border border-white/5 p-6 hover:translate-y-[-4px] transition-all duration-300">
            <div className="text-3xl mb-3">🔥</div>
            <h3 className="font-bold text-white mb-2">Daily Streaks</h3>
            <p className="text-sm text-white/60">
              Build momentum with daily study goals. Watch your streak grow!
            </p>
          </div>
          
          <div className="rounded-3xl bg-[var(--surface-elevated)] border border-white/5 p-6 hover:translate-y-[-4px] transition-all duration-300">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold text-white mb-2">Earn Points</h3>
            <p className="text-sm text-white/60">
              Get rewarded for every card you review. Level up as you learn.
            </p>
          </div>
          
          <div className="rounded-3xl bg-[var(--surface-elevated)] border border-white/5 p-6 hover:translate-y-[-4px] transition-all duration-300">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-bold text-white mb-2">Spaced Repetition</h3>
            <p className="text-sm text-white/60">
              Smart scheduling ensures you review at the optimal time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-white/40 border-t border-white/5">
        <p>Built with ❤️ for Torah learners everywhere</p>
      </footer>
    </div>
  );
}
