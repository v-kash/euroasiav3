import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

/*
  Inner-page hero, styled to match the home page hero (light background,
  breadcrumb pill, big display headline). Rendered without a fade-in so the
  H1 is visible on first paint.
*/
export default function PageHero({ title, breadcrumbs = [], description }) {
  return (
    <section className="relative bg-light-bg border-b border-[#D5DDE9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-4xl">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3.5 py-2 mb-7 border-[1.5px] border-primary-navy rounded-full text-primary-navy font-ledger text-xs font-semibold uppercase tracking-[0.12em]"
            >
              <span aria-hidden="true" className="w-2 h-2 rounded-[2px] bg-accent" />
              <Link href="/" className="hover:text-accent-text transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  <FiChevronRight aria-hidden="true" className="w-3.5 h-3.5 text-accent-text" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-accent-text transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-accent-text">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 className="font-display font-extrabold text-primary-navy text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.04em]">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
