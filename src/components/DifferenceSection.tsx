const beforeItems = [
  "1–3 video ads / month",
  "€10K–€50K per asset",
  "4–8 week production cycle",
  "Gut-based creative decisions",
  "ROAS plateau after 60 days",
];

const afterItems = [
  "30–50 creatives / month",
  "80% lower cost per asset",
  "48h delivery, every batch",
  "Data-driven every iteration",
  "20–40% ROAS lift in 60 days",
];

const XIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const DifferenceSection = () => {
  return (
    <section
      id="results"
      data-navbar-dark="true"
      className="bg-secondary text-secondary-foreground py-[100px] md:py-[140px]"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-4 reveal">
          The difference
        </p>
        <h2 className="font-sans-display text-[24px] md:text-[38px] leading-[1.1] tracking-[-0.018em] text-white mb-16 reveal">
          The economics of advertising{" "}
          <span className="font-serif-display italic text-white/50">just changed.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div
            className="reveal p-8 rounded-[7px]"
            data-delay="0"
            style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full text-white/30"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                <XIcon />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/35">
                Before Lumina
              </p>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 text-white/20"><XIcon /></span>
                  <span className="text-[13px] leading-[1.65] text-white/40">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="reveal p-8 rounded-[7px]"
            data-delay="100"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full"
                style={{ backgroundColor: "rgba(197,210,248,0.15)", color: "#C5D2F8" }}>
                <CheckIcon />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/55">
                With Lumina
              </p>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0" style={{ color: "#C5D2F8" }}><CheckIcon /></span>
                  <span className="text-[13px] leading-[1.65] text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 reveal" data-delay="200">
          <a
            href="#contact"
            className="text-[11px] font-medium bg-white text-black px-6 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
          >
            See the numbers for your brand →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
