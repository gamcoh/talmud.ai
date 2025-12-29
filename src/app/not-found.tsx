import Link from "next/link";
import { Button } from "~/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4">
      <div className="text-center space-y-2">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl font-bold text-white">Page not found</h2>
        <p className="text-white/60">
          The page you're looking for doesn't exist.
        </p>
      </div>
      <Link href="/dashboard">
        <Button variant="primary">
          Go to Dashboard
        </Button>
      </Link>
    </div>
  );
}
