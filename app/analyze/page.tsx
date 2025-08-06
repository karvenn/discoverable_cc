'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AnalyzePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the homepage enquiry form
    router.push('/#enquiry');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Redirecting to enquiry form...
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we redirect you to request your free site audit.
        </p>
      </div>
    </div>
  );
}