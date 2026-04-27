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
              className="flex items-center space-x-2 mx-8 text-white"
            >
              <span className="text-xl">{partner.icon}</span>
              <span className="font-medium whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
