'use client';

import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
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

    if (ref.current) {
      observer.observe(ref.current);
    }

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
      value: 100,
      prefix: '₹',
      suffix: ' Cr+',
      label: 'Funding Secured For MSMEs Growth',
    },
    {
      icon: '🏆',
      value: 99,
      suffix: '%',
      label: 'Success Rate, Proven Track Record',
    },
    {
      icon: '📋',
      value: 500,
      suffix: '+',
      label: 'Registrations Completed Successfully',
    },
    {
      icon: '🏛️',
      value: 50,
      suffix: '+',
      label: 'Govt Schemes Access Enabled',
    },
    {
      icon: '⚡',
      value: 24,
      suffix: '/7',
      label: 'Expert Support Always Available',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-between items-start gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 lg:px-6 relative"
            >
              {/* Verified Badge */}
              <span className="inline-block px-2 py-1 bg-success-green/10 text-success-green text-xs font-semibold rounded mb-2">
                VERIFIED
              </span>
              
              {/* Icon + Number */}
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{stat.icon}</span>
                <span className="text-4xl lg:text-5xl font-bold text-primary-navy">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                  />
                </span>
              </div>
              
              {/* Label */}
              <p className="text-text-muted text-sm max-w-[150px]">
                {stat.label}
              </p>

              {/* Divider (hidden on last item and mobile) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-border-color" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
