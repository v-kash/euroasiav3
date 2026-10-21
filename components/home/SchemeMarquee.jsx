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
    <section className="bg-white border-y border-[#D5DDE9] py-4 marquee-strip marquee-light">
      <div className="marquee-track scroll">
        {[...schemes, ...schemes].map((scheme, index) => (
          <div key={index} className="flex items-center px-6">
            <span className="font-ledger text-primary-navy text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] whitespace-nowrap">
              {scheme}
            </span>
            <span aria-hidden="true" className="ml-6 w-1.5 h-1.5 rotate-45 bg-accent"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
