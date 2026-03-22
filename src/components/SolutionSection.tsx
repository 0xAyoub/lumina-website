const features = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="2" x2="22" y2="22" /><path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" /><path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" /><path d="M14.5 4v3" />
      </svg>
    ),
    label: "No cameras. No studios. No crews.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "First batch delivered in 48 hours.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
      </svg>
    ),
    label: "Infinite iterations at zero extra cost.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: "Every creative scored before it goes live.",
  },
];

const capTiles = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    label: "Cinematic Video",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
    label: "Product Hero Shots",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
    label: "Lifestyle Scenes",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" /><path d="m15 9 6-6" />
      </svg>
    ),
    label: "50+ Variations",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="12" x="8.5" y="2" rx="1" /><path d="M15.5 8H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.5" /><path d="M8.5 8H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4.5" /><path d="M15.5 18H19a2 2 0 0 1 2 2v2" /><path d="M8.5 18H5a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    label: "UGC-Style Content",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
    label: "Motion Graphics",
  },
];

const LongArrow = () => (
  <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
    <line x1="0" y1="5" x2="33" y2="5" stroke="currentColor" strokeWidth="0.9" />
    <path d="M29 2 L34 5 L29 8" stroke="currentColor" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SolutionSection = () => {
  return (
    <section className="bg-background py-[100px] md:py-[140px]">
      <div className="w-full px-6 md:px-12 lg:px-20">

        {/* Two-column grid */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 md:gap-20 mb-20">

          {/* Left column */}
          <div>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.10em] mb-6 reveal"
              style={{ color: "rgba(17,17,17,0.35)" }}
            >
              The engine
            </p>
            <h2
              className="font-sans-display text-[28px] md:text-[42px] leading-[1.1] tracking-[-0.018em] mb-5 reveal"
              style={{ color: "#111111" }}
            >
              We make AI creatives
              <br />

              <span className="font-serif-display italic mb-0">for you at scale.  <span className="text-[12px] not-italic font-sans-display leading-[1.1] tracking-[-0.018em] mb-5">(That doesn't look like AI)</span></span> <br />
            
            </h2>
            <p
              className="text-[14px] leading-[1.8] mb-10 max-w-[480px] reveal"
              style={{ color: "rgba(17,17,17,0.5)" }}
              data-delay="80"
            >
              Cinematic-grade video ads, product hero shots, lifestyle imagery — produced entirely by AI, directed by human strategists. Hundreds of assets in hours. Every iteration costs nothing extra.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 reveal"
                  data-delay={String(150 + i * 60)}
                >
                  <span className="flex-shrink-0" style={{ color: "#C5D2F8" }}>{f.icon}</span>
                  <span className="text-[13px] leading-[1.6]" style={{ color: "rgba(17,17,17,0.6)" }}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="reveal" data-delay="450">
              <a
                href="/free"
                className="inline-block text-[11px] font-medium px-6 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
                style={{ backgroundColor: "#111111", color: "#ffffff" }}
              >
                Book a strategy call →
              </a>
            </div>
          </div>

          {/* Right column — capability tiles */}
          <div className="reveal" data-delay="100">
            <div className="grid grid-cols-2 gap-3">
              {capTiles.map((tile) => (
                <a
                  key={tile.label}
                  href="/free"
                  className="group relative flex flex-col justify-end p-5 rounded-[7px] overflow-hidden transition-all duration-300"
                  style={{ backgroundColor: "rgba(0,0,0,0.04)", minHeight: "110px" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.07)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)")
                  }
                >
                  {/* Icon top-left */}
                  <span
                    className="absolute top-5 left-5"
                    style={{ color: "#C5D2F8" }}
                  >
                    {tile.icon}
                  </span>

                  {/* Label bottom-left */}
                  <span
                    className="text-[12px] font-medium leading-[1.4] pr-10"
                    style={{ color: "rgba(17,17,17,0.6)" }}
                  >
                    {tile.label}
                  </span>

                  {/* Long arrow bottom-right */}
                  <span
                    className="absolute bottom-[18px] right-5 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: "rgba(17,17,17,0.2)" }}
                  >
                    <LongArrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
