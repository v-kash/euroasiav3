export default function TrustBar() {
  const partners = [
    { name: 'Startup India', icon: '🚀' },
    { name: 'GST Network', icon: '📊' },
    { name: 'MSME Ministry', icon: '🏭' },
    { name: 'GEM Portal', icon: '💎' },
    { name: 'ZED Certification', icon: '✅' },
    { name: 'DPIIT', icon: '🏛️' },
    { name: 'Make in India', icon: '🇮🇳' },
    { name: 'Udyam', icon: '📋' },
    { name: 'ROC', icon: '📝' },
    { name: 'DGFT', icon: '🌐' },
  ];

  return (
    <section className="bg-primary-navy py-4 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 mx-7 text-white"
            >
              <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45 bg-accent" />
              <span className="font-ledger text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
