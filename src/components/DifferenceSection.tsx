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
  return (
    <section id="results" className="bg-background">

      {/* ══ DESKTOP: sticky split ══════════════════════════════════════ */}
      <div className="hidden md:flex" style={{ alignItems: "flex-start" }}>

        {/* LEFT — sticky title + scrolling competitors */}
        <div style={{ width: "50vw" }}>

          {/* Sticky title */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: "#ffffff",
              padding: "72px clamp(32px, 4vw, 80px) 28px clamp(32px, 5vw, 80px)",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <p
              className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3"
              style={{ color: "rgba(17,17,17,0.35)" }}
            >
              The difference
            </p>
            <h2
              className="font-sans-display leading-[1.08] tracking-[-0.018em]"
              style={{ fontSize: "clamp(18px, 2.2vw, 28px)", color: "rgba(17,17,17,0.88)" }}
            >
              What you've already tried.
              <br />
              <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.30)" }}>
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
                padding: "52px clamp(32px, 4vw, 80px) 52px clamp(32px, 5vw, 80px)",
                borderBottom: ci < competitors.length - 1 ? "1px solid rgba(0,0,0,0.05)" : undefined,
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p className="text-[11px] mb-3" style={{ color: "rgba(17,17,17,0.20)", letterSpacing: "0.08em" }}>
                {comp.num}
              </p>
              <h3
                className="font-sans-display font-medium mb-1.5 tracking-[-0.015em]"
                style={{ fontSize: "clamp(14px, 1.6vw, 19px)", color: "rgba(17,17,17,0.68)" }}
              >
                {comp.label}
              </h3>
              <p className="text-[12px] mb-8 italic" style={{ color: "rgba(17,17,17,0.30)" }}>
                {comp.sub}
              </p>

              <div>
                {rows.map((row, ri) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3"
                    style={{ paddingTop: "13px", paddingBottom: "13px", borderTop: "1px solid rgba(0,0,0,0.05)" }}
                  >
                    <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" style={{ width: "76px" }}>
                      <span style={{ color: "rgba(17,17,17,0.25)" }}><row.Icon /></span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: "rgba(17,17,17,0.28)" }}>
                        {row.label}
                      </span>
                    </div>
                    <p className="text-[12px] leading-[1.65]" style={{ color: "rgba(17,17,17,0.52)" }}>
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
            borderLeft: "1px solid rgba(197,210,248,0.30)",
            backgroundColor: "rgba(197,210,248,0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px clamp(32px, 4vw, 64px) 44px clamp(32px, 4vw, 64px)",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.10em] mb-2.5"
              style={{ color: "rgba(197,210,248,0.80)", letterSpacing: "0.12em" }}
            >
              Lumina
            </p>
            <h2
              className="font-sans-display leading-[1.08] tracking-[-0.018em] mb-5"
              style={{ fontSize: "clamp(17px, 1.9vw, 24px)", color: "#111111" }}
            >
              Numbers on the page.{" "}
              <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.35)" }}>
                No surprises.
              </span>
            </h2>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              {lumina.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: "14px",
                    borderRadius: "7px",
                    backgroundColor: "rgba(197,210,248,0.12)",
                    border: "1px solid rgba(197,210,248,0.22)",
                  }}
                >
                  <p
                    className="font-sans-display leading-none mb-1"
                    style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "#4A5FA8", letterSpacing: "-0.02em" }}
                  >
                    {h.stat}
                  </p>
                  <p className="text-[11px] leading-[1.4]" style={{ color: "rgba(17,17,17,0.45)" }}>
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
                style={{ paddingTop: "12px", paddingBottom: "12px", borderTop: "1px solid rgba(197,210,248,0.20)" }}
              >
                <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" style={{ width: "76px" }}>
                  <span style={{ color: "#C5D2F8" }}><row.Icon /></span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: "rgba(74,95,168,0.65)" }}>
                    {row.label}
                  </span>
                </div>
                <p className="text-[12px] leading-[1.65]" style={{ color: "rgba(17,17,17,0.78)" }}>
                  {lumina.rows[ri]}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ paddingTop: "24px" }}>
            <a
              href="/free"
              className="inline-flex text-[11px] font-medium px-5 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
              style={{ backgroundColor: "#111111", color: "#ffffff" }}
            >
              Get a free ad for your brand →
            </a>
          </div>
        </div>
      </div>

      {/* ══ MOBILE: stacked cards ══════════════════════════════════════ */}
      <div className="md:hidden px-6 py-16">

        <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3" style={{ color: "rgba(17,17,17,0.35)" }}>
          The difference
        </p>
        <h2
          className="font-sans-display text-[22px] leading-[1.08] tracking-[-0.018em] mb-8"
          style={{ color: "#111111" }}
        >
          Numbers on the page.{" "}
          <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.30)" }}>
            No surprises.
          </span>
        </h2>

        {/* Lumina card */}
        <div
          style={{
            borderRadius: "7px",
            padding: "20px",
            backgroundColor: "rgba(197,210,248,0.07)",
            border: "1px solid rgba(197,210,248,0.22)",
            marginBottom: "8px",
          }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3" style={{ color: "rgba(197,210,248,0.80)" }}>
            Lumina
          </p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {lumina.highlights.map((h, i) => (
              <div
                key={i}
                style={{ padding: "12px", borderRadius: "7px", backgroundColor: "rgba(197,210,248,0.10)", border: "1px solid rgba(197,210,248,0.20)" }}
              >
                <p className="font-sans-display leading-none mb-1" style={{ fontSize: "20px", color: "#4A5FA8", letterSpacing: "-0.02em" }}>
                  {h.stat}
                </p>
                <p className="text-[10px] leading-[1.4]" style={{ color: "rgba(17,17,17,0.45)" }}>{h.desc}</p>
              </div>
            ))}
          </div>
          {rows.map((row, ri) => (
            <div
              key={row.label}
              className="flex items-start gap-3"
              style={{ paddingTop: "11px", paddingBottom: "11px", borderTop: "1px solid rgba(197,210,248,0.14)" }}
            >
              <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" style={{ width: "70px" }}>
                <span style={{ color: "#C5D2F8" }}><row.Icon /></span>
                <span className="text-[9px] font-medium uppercase tracking-[0.06em]" style={{ color: "rgba(74,95,168,0.65)" }}>{row.label}</span>
              </div>
              <p className="text-[12px] leading-[1.6]" style={{ color: "rgba(17,17,17,0.72)" }}>{lumina.rows[ri]}</p>
            </div>
          ))}
        </div>

        <p className="text-[11px] font-medium uppercase tracking-[0.10em] mt-9 mb-4" style={{ color: "rgba(17,17,17,0.30)" }}>
          What you've already tried.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {competitors.map((comp) => (
            <div
              key={comp.num}
              style={{ borderRadius: "7px", padding: "18px", backgroundColor: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <p className="text-[10px] mb-2" style={{ color: "rgba(17,17,17,0.22)", letterSpacing: "0.08em" }}>{comp.num}</p>
              <h3 className="font-sans-display text-[13px] font-medium mb-1 tracking-[-0.01em]" style={{ color: "rgba(17,17,17,0.62)" }}>
                {comp.label}
              </h3>
              <p className="text-[11px] italic mb-3" style={{ color: "rgba(17,17,17,0.28)" }}>{comp.sub}</p>
              {rows.map((row, ri) => (
                <div
                  key={row.label}
                  className="flex items-start gap-3"
                  style={{ paddingTop: "9px", paddingBottom: "9px", borderTop: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5" style={{ width: "70px" }}>
                    <span style={{ color: "rgba(17,17,17,0.22)" }}><row.Icon /></span>
                    <span className="text-[9px] font-medium uppercase tracking-[0.06em]" style={{ color: "rgba(17,17,17,0.26)" }}>{row.label}</span>
                  </div>
                  <p className="text-[11px] leading-[1.6]" style={{ color: "rgba(17,17,17,0.48)" }}>{comp.rows[ri]}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        <a
          href="/free"
          className="inline-flex text-[11px] font-medium px-5 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
          style={{ backgroundColor: "#111111", color: "#ffffff" }}
        >
          Get a free ad for your brand →
        </a>
      </div>

    </section>
  );
};

export default DifferenceSection;
