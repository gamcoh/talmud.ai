import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 py-10 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        Learn Torah like a game.
      </h1>
      <p className="text-white/70">
        Build a streak, earn points, and practice with flashcards—starting with
        mock data (Sefaria integration later).
      </p>

      <div className="flex items-center justify-center gap-3">
        <Link
          href="/dashboard"
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#15162c] hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        >
          Open Dashboard
        </Link>
        <Link
          href="/flashcards"
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        >
          Try Flashcards
        </Link>
      </div>
    </section>
  );
}
