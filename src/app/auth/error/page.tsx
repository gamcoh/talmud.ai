"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "~/components/ui/Button";
import { Logo } from "~/components/ui/Logo";

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "An error occurred during authentication.";
  
  if (error === "OAuthAccountNotLinked") {
    errorMessage = "This email is already associated with another account. Please sign in using your original method.";
  } else if (error === "AccessDenied") {
    errorMessage = "Access was denied. Please try again.";
  }

  return (
    <div className="min-h-dvh bg-[var(--surface-base)] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="inline-block mb-4">
          <Logo size="md" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Authentication Error</h1>
        <div className="bg-[var(--surface-card)] rounded-3xl p-8 border border-white/10 mb-6">
          <div className="text-red-400 mb-4 text-lg">⚠️</div>
          <p className="text-white/80">{errorMessage}</p>
        </div>
        <Link href="/auth/signin">
          <Button variant="primary">
            Back to Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-dvh bg-[var(--surface-base)] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <ErrorContent />
    </Suspense>
  );
}
