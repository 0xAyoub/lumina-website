// ── Icons ──────────────────────────────────────────────────────────────
const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CostIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);
const VolumeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const LoopIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────
const rows = [
  { label: "Delivery", Icon: ClockIcon },
  { label: "Cost",     Icon: CostIcon },
  { label: "Volume",   Icon: VolumeIcon },
  { label: "Loop",     Icon: LoopIcon },
];

const lumina = {
  highlights: [
    { stat: "48h",    desc: "First ad, every time." },
    { stat: "€2,500", desc: "15 ads in 14 days." },
    { stat: "€5k/mo", desc: "30 ads, cancel anytime." },
    { stat: "30",     desc: "Ads per retainer month." },
  ],
  rows: [
    "48h, every time.",
    "€2,500 pilot · €5,000/mo retainer.",
    "30 ads a month. Bi-weekly.",
    "Every dying ad becomes the next brief.",
  ],
};

const competitors = [
  {
    num: "01",
    label: "Traditional Performance Agency",
    sub: "Strong work. Slow delivery. Capped volume.",
    rows: [
      "4–8 weeks per batch.",
      "€10K minimum, before a single test.",
      "3–5 creatives per cycle.",
      "Start over each time. No loop.",
    ],
  },
  {
    num: "02",
    label: "UGC Marketplaces",
    sub: "Authentic feel. Inconsistent. Doesn't compound.",
    rows: [
      "5–14 days per batch.",
      "€200–€500 per video. Adds up fast.",
      "Inconsistent. One face, one style.",
      "No data. No funnel awareness.",
    ],
  },
  {
    num: "03",
    label: "Self-Serve AI Tools",
    sub: "Fast. Cheap. Looks like every other brand.",
    rows: [
      "Fast — but you do all the work.",
      "€50–€200/month + your time.",
      "Volume yes. Differentiation no.",
      "You guess what to test. No strategy.",
    ],
  },
];

// ── Component ──────────────────────────────────────────────────────────
const DifferenceSection = () => {
  const BG = "hsl(0,0%,6.7%)"; // matches --secondary

  return (
    <section
      id="results"
      data-navbar-dark="true"
      className="bg-secondary text-secondary-foreground"
    >

      {/* ══ DESKTOP: sticky split ══════════════════════════════════════ */}
      <div className="hidden md:flex" style={{ alignItems: "flex-start" }}>

        {/* LEFT — scrolling column */}
        <div style={{ width: "50vw" }}>

          {/* Sticky title — covers content scrolling underneath */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: BG,
              padding: "80px clamp(32px, 4vw, 80px) 36px clamp(32px, 5vw, 80px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              The difference
            </p>
            <h2
              className="font-sans-display leading-[1.08] tracking-[-0.018em]"
              style={{ fontSize: "clamp(22px, 2.8vw, 38px)", color: "rgba(255,255,255,0.90)" }}
            >
              What you've already tried.
              <br />
              <span
                className="font-serif-display italic"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                And why it's not enough.
              </span>
            </h2>
          </div>

          {/* Competitor cards */}
          {competitors.map((comp, ci) => (
            <div
              key={comp.num}
              style={{
                minHeight: "80vh",
                padding: "60px clamp(32px, 4vw, 80px) 60px clamp(32px, 5vw, 80px)",
                borderBottom: ci < competitors.length - 1 ? "1px solid rgba(255,255,255,0.05)" : undefined,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                className="text-[11px] mb-4"
                style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}
              >
                {comp.num}
              </p>
              <h3
                className="font-sans-display font-medium mb-2 tracking-[-0.015em]"
                style={{ fontSize: "clamp(15px, 1.8vw, 21px)", color: "rgba(255,255,255,0.60)" }}
              >
                {comp.label}
              </h3>
              <p
                className="text-[12px] mb-10 italic"
                style={{ color: "rgba(255,255,255,0.28)" }}
              >
                {comp.sub}
              </p>

              <div>
                {rows.map((row, ri) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3"
                    style={{
                      paddingTop: "14px",
                      paddingBottom: "14px",
                      borderTop: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      className="flex items-center gap-1.5 flex-shrink-0 pt-0.5"
                      style={{ width: "76px" }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.22)" }}><row.Icon /></span>
                      <span
                        className="text-[10px] font-medium uppercase tracking-[0.06em]"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        {row.label}
                      </span>
                    </div>
                    <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.50)" }}>
                      {comp.rows[ri]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky Lumina panel */}
        <div
          style={{
            width: "50vw",
            position: "sticky",
            top: 0,
            height: "100dvh",
            alignSelf: "flex-start",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
            backgroundColor: "rgba(197,210,248,0.025)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "80px clamp(32px, 4vw, 64px) 48px clamp(32px, 4vw, 64px)",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3"
              style={{ color: "rgba(197,210,248,0.60)" }}
            >
              Lumina
            </p>
            <h2
              className="font-sans-display leading-[1.08] tracking-[-0.018em] mb-8"
              style={{ fontSize: "clamp(18px, 2.2vw, 30px)", color: "#ffffff" }}
            >
              Most agencies hide their numbers.{" "}
              <span
                className="font-serif-display italic"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                Ours are on the page.
              </span>
            </h2>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {lumina.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px",
                    borderRadius: "7px",
                    backgroundColor: "rgba(197,210,248,0.06)",
                    border: "1px solid rgba(197,210,248,0.10)",
                  }}
                >
                  <p
                    className="font-sans-display leading-none mb-1"
                    style={{ fontSize: "clamp(20px, 2.2vw, 28px)", color: "#C5D2F8", letterSpacing: "-0.02em" }}
                  >
                    {h.stat}
                  </p>
                  <p className="text-[11px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Rows */}
          <div className="flex flex-col justify-center flex-1">
            {rows.map((row, ri) => (
              <div
                key={row.label}
                className="flex items-start gap-3"
                style={{
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderTop: "1px solid rgba(197,210,248,0.07)",
                }}
              >
                <div
                  className="flex items-center gap-1.5 flex-shrink-0 pt-0.5"
                  style={{ width: "76px" }}
                >
                  <span style={{ color: "#C5D2F8" }}><row.Icon /></span>
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.06em]"
                    style={{ color: "rgba(197,210,248,0.55)" }}
                  >
                    {row.label}
                  </span>
                </div>
                <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.88)" }}>
                  {lumina.rows[ri]}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ paddingTop: "32px" }}>
            <a
              href="/free"
              className="inline-flex text-[11px] font-medium px-5 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
              style={{ backgroundColor: "#ffffff", color: "#111111" }}
            >
              Get a free ad for your brand →
            </a>
          </div>
        </div>
      </div>

      {/* ══ MOBILE: stacked cards ══════════════════════════════════════ */}
      <div className="md:hidden px-6 py-16">

        {/* Header */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          The difference
        </p>
        <h2
          className="font-sans-display text-[24px] leading-[1.08] tracking-[-0.018em] mb-8"
          style={{ color: "#ffffff" }}
        >
          Most agencies hide their numbers.{" "}
          <span className="font-serif-display italic" style={{ color: "rgba(255,255,255,0.38)" }}>
            Ours are on the page.
          </span>
        </h2>

        {/* Lumina card */}
        <div
          style={{
            borderRadius: "7px",
            padding: "20px",
            backgroundColor: "rgba(197,210,248,0.05)",
            border: "1px solid rgba(197,210,248,0.15)",
            marginBottom: "8px",
          }}
        >
          <p
            className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4"
            style={{ color: "rgba(197,210,248,0.70)" }}
          >
            Lumina
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {lumina.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: "12px",
                  borderRadius: "7px",
                  backgroundColor: "rgba(197,210,248,0.06)",
                  border: "1px solid rgba(197,210,248,0.10)",
                }}
              >
                <p
                  className="font-sans-display leading-none mb-1"
                  style={{ fontSize: "22px", color: "#C5D2F8", letterSpacing: "-0.02em" }}
                >
                  {h.stat}
                </p>
                <p className="text-[10px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
          {rows.map((row, ri) => (
            <div
              key={row.label}
              className="flex items-start gap-3"
              style={{
                paddingTop: "12px",
                paddingBottom: "12px",
                borderTop: "1px solid rgba(197,210,248,0.06)",
              }}
            >
              <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" style={{ width: "70px" }}>
                <span style={{ color: "#C5D2F8" }}><row.Icon /></span>
                <span
                  className="text-[9px] font-medium uppercase tracking-[0.06em]"
                  style={{ color: "rgba(197,210,248,0.55)" }}
                >
                  {row.label}
                </span>
              </div>
              <p className="text-[12px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.82)" }}>
                {lumina.rows[ri]}
              </p>
            </div>
          ))}
        </div>

        {/* Competitors label */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.10em] mt-10 mb-4"
          style={{ color: "rgba(255,255,255,0.28)" }}
        >
          What you've already tried.
        </p>

        {/* Competitor cards */}
        <div className="flex flex-col gap-3 mb-8">
          {competitors.map((comp) => (
            <div
              key={comp.num}
              style={{
                borderRadius: "7px",
                padding: "20px",
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[10px] mb-2" style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>
                {comp.num}
              </p>
              <h3
                className="font-sans-display text-[14px] font-medium mb-1 tracking-[-0.01em]"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                {comp.label}
              </h3>
              <p className="text-[11px] italic mb-4" style={{ color: "rgba(255,255,255,0.26)" }}>
                {comp.sub}
              </p>
              {rows.map((row, ri) => (
                <div
                  key={row.label}
                  className="flex items-start gap-3"
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" style={{ width: "70px" }}>
                    <span style={{ color: "rgba(255,255,255,0.22)" }}><row.Icon /></span>
                    <span
                      className="text-[9px] font-medium uppercase tracking-[0.06em]"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {row.label}
                    </span>
                  </div>
                  <p className="text-[11px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {comp.rows[ri]}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/free"
          className="inline-flex text-[11px] font-medium px-5 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
          style={{ backgroundColor: "#ffffff", color: "#111111" }}
        >
          Get a free ad for your brand →
        </a>
      </div>

    </section>
  );
};

export default DifferenceSection;
