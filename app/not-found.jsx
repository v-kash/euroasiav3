import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-light-bg border-b border-[#D5DDE9] flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="font-display font-extrabold text-accent-text text-8xl sm:text-9xl leading-none tracking-[-0.05em]">404</h1>
        <h2 className="font-display font-extrabold text-primary-navy text-4xl md:text-5xl tracking-[-0.035em] mt-6">Page Not Found</h2>
        <p className="text-text-muted text-lg mt-4 max-w-md mx-auto">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary-navy font-bold rounded-xl shadow-hard-sm hover:bg-accent-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-navy text-primary-navy font-bold rounded-xl hover:bg-primary-navy hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
