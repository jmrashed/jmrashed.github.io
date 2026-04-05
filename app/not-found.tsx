import Link from "next/link";
import { Home } from "lucide-react";
import BackButton from "@/components/ui/BackButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <BackButton />
        </div>
      </div>
    </div>
  );
}
