import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-light-bg flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-navy/20">404</h1>
        <h2 className="text-3xl font-bold text-primary-navy mt-4">Page Not Found</h2>
        <p className="text-text-muted mt-4 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-navy text-white font-semibold rounded-lg hover:bg-secondary-navy transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-navy text-primary-navy font-semibold rounded-lg hover:bg-primary-navy hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
