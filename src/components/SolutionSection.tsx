const features = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "First ad free in 48 hours.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
      </svg>
    ),
    label: "Pilot of 15 ads in 2 weeks.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    label: "Retainer of 30 ads a month, bi-weekly batches.",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="2" y1="2" x2="22" y2="22" /><path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" /><path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" /><path d="M14.5 4v3" />
      </svg>
    ),
    label: "Every dying ad gets re-cut, re-hooked, re-shipped — using the footage you already paid for.",
  },
];

const capTiles = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    label: "Founder UGC Hooks",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
    label: "Problem-Agitation",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
    label: "Before/After Splits",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" /><path d="m15 9 6-6" />
      </svg>
    ),
    label: "Ingredient Education",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="12" x="8.5" y="2" rx="1" /><path d="M15.5 8H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4.5" /><path d="M8.5 8H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4.5" /><path d="M15.5 18H19a2 2 0 0 1 2 2v2" /><path d="M8.5 18H5a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    label: "Comparison Ads",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </svg>
    ),
    label: "Pattern-Interrupt Hooks",
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
    <section className="bg-background py-[100px] md:py-[100px]">
      <div className="w-full px-6 md:px-12 lg:px-20">

        {/* Two-column grid */}
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16 md:gap-20">

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
              We ship 30 supplement ads a month.
              <br />
              <span className="font-serif-display italic">You test more. You win more.</span>
            
            </h2>
            <p
              className="text-[14px] leading-[1.8] mb-10 max-w-[480px] reveal"
              style={{ color: "rgba(17,17,17,0.5)" }}
              data-delay="80"
            >
              Founder UGC-style hooks. Problem-agitation videos. Before/after splits. Ingredient breakdowns. Competitor comparisons. Built for Meta and TikTok feed, in every format your buyer scrolls — 9:16, 1:1, 4:5. Produced with AI video, directed by a human who edited for years before that was a job title.
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
                Get my free ad →
              </a>
            </div>
          </div>

          {/* Right column — capability tiles marquee */}
          <div className="reveal" data-delay="100">

            {/* Keyframes */}
            <style>{`
              @keyframes marquee-up   { from { transform: translateY(0);    } to { transform: translateY(-50%); } }
              @keyframes marquee-down { from { transform: translateY(-50%); } to { transform: translateY(0);    } }
              @keyframes marquee-left { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
            `}</style>

            {/* ── Desktop: 2-column vertical marquee ── */}
            <div
              className="hidden md:flex gap-3 overflow-hidden relative"
              style={{ height: "420px" }}
            >
              {/* Fade top */}
              <div className="absolute inset-x-0 top-0 h-14 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, #ffffff, transparent)" }} />
              {/* Fade bottom */}
              <div className="absolute inset-x-0 bottom-0 h-14 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, #ffffff, transparent)" }} />

              {/* Column A — scrolls up */}
              <div className="flex-1 flex flex-col gap-3" style={{ animation: "marquee-up 9s linear infinite" }}>
                {[...capTiles.slice(0, 3), ...capTiles.slice(0, 3)].map((tile, i) => (
                  <a
                    key={i}
                    href="/free"
                    className="group relative flex flex-col justify-end p-5 rounded-[7px] overflow-hidden flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: "rgba(0,0,0,0.04)", minHeight: "118px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.07)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)")}
                  >
                    <span className="absolute top-5 left-5" style={{ color: "#C5D2F8" }}>{tile.icon}</span>
                    <span className="text-[12px] font-medium leading-[1.4] pr-10" style={{ color: "rgba(17,17,17,0.6)" }}>{tile.label}</span>
                    <span className="absolute bottom-[18px] right-5 transition-all duration-300 group-hover:translate-x-1" style={{ color: "rgba(17,17,17,0.2)" }}><LongArrow /></span>
                  </a>
                ))}
              </div>

              {/* Column B — scrolls down */}
              <div className="flex-1 flex flex-col gap-3" style={{ animation: "marquee-down 11s linear infinite" }}>
                {[...capTiles.slice(3, 6), ...capTiles.slice(3, 6)].map((tile, i) => (
                  <a
                    key={i}
                    href="/free"
                    className="group relative flex flex-col justify-end p-5 rounded-[7px] overflow-hidden flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: "rgba(0,0,0,0.04)", minHeight: "118px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.07)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.04)")}
                  >
                    <span className="absolute top-5 left-5" style={{ color: "#C5D2F8" }}>{tile.icon}</span>
                    <span className="text-[12px] font-medium leading-[1.4] pr-10" style={{ color: "rgba(17,17,17,0.6)" }}>{tile.label}</span>
                    <span className="absolute bottom-[18px] right-5 transition-all duration-300 group-hover:translate-x-1" style={{ color: "rgba(17,17,17,0.2)" }}><LongArrow /></span>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Mobile: horizontal marquee ── */}
            <div className="md:hidden overflow-hidden relative">
              {/* Fade left */}
              <div className="absolute inset-y-0 left-0 w-10 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
              {/* Fade right */}
              <div className="absolute inset-y-0 right-0 w-10 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

              <div className="flex gap-3" style={{ animation: "marquee-left 14s linear infinite", width: "max-content" }}>
                {[...capTiles, ...capTiles].map((tile, i) => (
                  <a
                    key={i}
                    href="/free"
                    className="group relative flex flex-col justify-end p-4 rounded-[7px] overflow-hidden flex-shrink-0 transition-all duration-300"
                    style={{ backgroundColor: "rgba(0,0,0,0.04)", width: "140px", height: "110px" }}
                  >
                    <span className="absolute top-4 left-4" style={{ color: "#C5D2F8" }}>{tile.icon}</span>
                    <span className="text-[11px] font-medium leading-[1.4]" style={{ color: "rgba(17,17,17,0.6)" }}>{tile.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
