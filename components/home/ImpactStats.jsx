'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  // Starts at the REAL value, so the server-rendered HTML (what Google and
  // link previews read) shows "₹10 Cr", not "₹0 Cr". It counts up from 0
  // only once the number scrolls into view in the browser.
  const [count, setCount] = useState(value);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function ImpactStats() {
  const stats = [
    {
      icon: '💰',
      value: 10,
      prefix: '₹',
      suffix: ' Cr',
      label: 'CGTMSE Guarantee Cover Per Borrower',
    },
    {
      icon: '🏆',
      value: 35,
      suffix: '%',
      label: 'Maximum PMEGP Subsidy',
    },
    {
      icon: '📋',
      value: 20,
      prefix: '₹',
      suffix: ' L',
      label: 'MUDRA Loan Limit (Tarun Plus)',
    },
    {
      icon: '🏛️',
      value: 18,
      label: 'Services Under One Roof',
    },
    {
      icon: '⚡',
      value: 2,
      label: 'Offices: Ahmedabad & Pune',
    },
  ];

  return (
    <section className="bg-white py-8 lg:py-10 border-t border-[#D5DDE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 border-y-2 border-primary-navy">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-start py-6 px-4 lg:px-6 border-[#D5DDE9] ${
                index % 2 === 1 ? 'border-l' : ''
              } ${index > 0 ? 'lg:border-l' : ''} ${
                index > 1 ? 'border-t lg:border-t-0' : ''
              } ${index === stats.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Number */}
              <span className="font-display text-4xl lg:text-5xl font-extrabold text-primary-navy tracking-[-0.035em] leading-none mb-2">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </span>

              {/* Label */}
              <p className="text-text-muted text-sm max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
