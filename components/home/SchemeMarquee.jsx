export default function SchemeMarquee() {
  const schemes = [
    'PMEGP',
    'CGTMSE',
    'MUDRA',
    'Startup India',
    'GEM Portal',
    'ZED Certification',
    'DPIIT',
    'Udyam',
    'Make in India',
    'Stand-Up India',
    '80-IAC',
    'MSME Samadhaan',
    'IEC',
    'PLI Scheme',
  ];

  return (
    <section className="bg-primary-navy py-4 marquee-strip">
      <div className="marquee-track scroll">
        {[...schemes, ...schemes].map((scheme, index) => (
          <div key={index} className="flex items-center px-6">
            <span className="text-white font-medium text-sm whitespace-nowrap">
              {scheme}
            </span>
            <span className="ml-6 h-4 w-px bg-white/30"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
