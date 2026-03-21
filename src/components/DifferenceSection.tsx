const beforeItems = [
  "1 video ad / month",
  "€15K for 5 assets",
  "4-week production cycle",
  "Gut-based creative decisions",
  "ROAS plateau",
];

const afterItems = [
  "50+ creatives / month",
  "80% cost reduction",
  "48h delivery",
  "Data-driven every step",
  "20–40% ROAS lift in 60 days",
];

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
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/35 mb-8">
              Before Lumina
            </p>
            <ul className="space-y-5">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                  <span className="text-[14px] leading-[1.7] text-white/45">{item}</span>
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
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/55 mb-8">
              With Lumina
            </p>
            <ul className="space-y-5">
              {afterItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-[14px] leading-[1.7] text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 reveal" data-delay="200">
          <a
            href="https://cal.com/lumina"
            target="_blank"
            rel="noopener noreferrer"
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
