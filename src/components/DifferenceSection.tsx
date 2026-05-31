// ── Data ───────────────────────────────────────────────────────────────
const rowLabels = ["Delivery", "Cost", "Volume", "Loop"];

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
    label: "Traditional Agency",
    rows: [
      "4–8 weeks per batch.",
      "€10K before a single test.",
      "3–5 creatives per cycle.",
      "Start over each time.",
    ],
  },
  {
    num: "02",
    label: "UGC Marketplaces",
    rows: [
      "5–14 days per batch.",
      "€200–€500 per video.",
      "One face, one style.",
      "No data. No strategy.",
    ],
  },
  {
    num: "03",
    label: "Self-Serve AI",
    rows: [
      "Fast — you do the work.",
      "€50–€200/month + your time.",
      "Volume. No differentiation.",
      "You guess what to test.",
    ],
  },
];

// ── Component ──────────────────────────────────────────────────────────
const DifferenceSection = () => {
  return (
    <section id="results" data-navbar-hide="true" className="bg-background">

      {/* ══ DESKTOP: sticky split ══════════════════════════════════════ */}
      <div className="hidden md:flex" style={{ alignItems: "flex-start" }}>

        {/* LEFT — light bg, sticky title + scrolling competitors */}
        <div style={{ width: "50vw", backgroundColor: "#F5F5F5" }}>

          {/* Sticky title */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: "#F5F5F5",
              padding: "52px clamp(32px, 4vw, 80px) 24px clamp(32px, 5vw, 80px)",
              borderBottom: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <p
              className="text-[10px] font-medium uppercase tracking-[0.12em] mb-2"
              style={{ color: "rgba(17,17,17,0.35)" }}
            >
              The difference
            </p>
            <p
              className="text-[14px] leading-[1.5]"
              style={{ color: "rgba(17,17,17,0.55)", maxWidth: "320px" }}
            >
              What you've already tried — and why it isn't enough.
            </p>
          </div>

          {/* Competitor cards */}
          {competitors.map((comp, ci) => (
            <div
              key={comp.num}
              style={{
                minHeight: "90vh",
                padding: "56px clamp(32px, 4vw, 80px) 56px clamp(32px, 5vw, 80px)",
                borderBottom: ci < competitors.length - 1 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                className="text-[10px] font-medium uppercase tracking-[0.10em] mb-4"
                style={{ color: "rgba(17,17,17,0.30)" }}
              >
                {comp.num}
              </p>
              <h3
                className="text-[18px] tracking-[-0.01em] mb-7"
                style={{ color: "rgba(17,17,17,0.70)", fontWeight: 400 }}
              >
                {comp.label}
              </h3>

              {/* Row bubbles */}
              <div className="flex flex-col gap-2">
                {rowLabels.map((label, ri) => (
                  <div
                    key={label}
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "12px 14px",
                    }}
                  >
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.08em] mb-1"
                      style={{ color: "rgba(17,17,17,0.35)" }}
                    >
                      {label}
                    </p>
                    <p className="text-[13px] leading-[1.55]" style={{ color: "rgba(17,17,17,0.65)" }}>
                      {comp.rows[ri]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky Lumina panel, white */}
        <div
          style={{
            width: "50vw",
            position: "sticky",
            top: 0,
            height: "100dvh",
            alignSelf: "flex-start",
            borderLeft: "1px solid rgba(0,0,0,0.08)",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px clamp(32px, 4vw, 64px) 40px clamp(32px, 4vw, 64px)",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div>
            <p
              className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3"
              style={{ color: "rgba(17,17,17,0.35)" }}
            >
              Lumina
            </p>
            <h2
              className="font-sans-display leading-[1.1] tracking-[-0.015em] mb-6"
              style={{ fontSize: "clamp(20px, 2vw, 28px)", color: "#111111", fontWeight: 400 }}
            >
              Anyone can hand you 30 ads.{" "}
              <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.35)", fontWeight: 400 }}>
                We tell you which 3 to scale.
              </span>
            </h2>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {lumina.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px",
                    borderRadius: "7px",
                    backgroundColor: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <p
                    className="font-sans-display leading-none mb-1.5"
                    style={{ fontSize: "clamp(20px, 2.1vw, 26px)", color: "#111111", letterSpacing: "-0.02em", fontWeight: 400 }}
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
            {rowLabels.map((label, ri) => (
              <div
                key={label}
                className="flex items-start gap-3"
                style={{ paddingTop: "14px", paddingBottom: "14px", borderTop: "1px solid rgba(0,0,0,0.07)" }}
              >
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.08em] flex-shrink-0 pt-0.5"
                  style={{ width: "68px", color: "rgba(17,17,17,0.35)" }}
                >
                  {label}
                </span>
                <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(17,17,17,0.85)" }}>
                  {lumina.rows[ri]}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ paddingTop: "28px" }}>
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
      <div className="md:hidden px-6 py-14">

        <p
          className="text-[10px] font-medium uppercase tracking-[0.12em] mb-2"
          style={{ color: "rgba(17,17,17,0.35)" }}
        >
          The difference
        </p>
        <h2
          className="font-sans-display text-[22px] leading-[1.1] tracking-[-0.015em] mb-8"
          style={{ color: "#111111", fontWeight: 400 }}
        >
          Anyone can hand you 30 ads.{" "}
          <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.32)" }}>
            We tell you which 3 to scale.
          </span>
        </h2>

        {/* Lumina card */}
        <div
          style={{
            borderRadius: "10px",
            padding: "22px",
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.09)",
            marginBottom: "6px",
          }}
        >
          <p
            className="text-[10px] font-medium uppercase tracking-[0.12em] mb-4"
            style={{ color: "rgba(17,17,17,0.35)" }}
          >
            Lumina
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {lumina.highlights.map((h, i) => (
              <div
                key={i}
                style={{ padding: "14px", borderRadius: "7px", backgroundColor: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <p
                  className="font-sans-display leading-none mb-1"
                  style={{ fontSize: "22px", color: "#111111", letterSpacing: "-0.02em", fontWeight: 400 }}
                >
                  {h.stat}
                </p>
                <p className="text-[10px] leading-[1.4]" style={{ color: "rgba(17,17,17,0.45)" }}>{h.desc}</p>
              </div>
            ))}
          </div>
          {rowLabels.map((label, ri) => (
            <div
              key={label}
              className="flex items-start gap-3"
              style={{ paddingTop: "11px", paddingBottom: "11px", borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.07em] flex-shrink-0 pt-0.5" style={{ width: "64px", color: "rgba(17,17,17,0.35)" }}>{label}</span>
              <p className="text-[12px] leading-[1.6]" style={{ color: "rgba(17,17,17,0.80)" }}>{lumina.rows[ri]}</p>
            </div>
          ))}
        </div>

        <p
          className="text-[10px] font-medium uppercase tracking-[0.12em] mt-8 mb-4"
          style={{ color: "rgba(17,17,17,0.32)" }}
        >
          What you've already tried.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {competitors.map((comp) => (
            <div
              key={comp.num}
              style={{ borderRadius: "10px", padding: "20px", backgroundColor: "#F5F5F5", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.08em] mb-3" style={{ color: "rgba(17,17,17,0.30)" }}>{comp.num}</p>
              <h3
                className="text-[15px] mb-4 tracking-[-0.01em]"
                style={{ color: "rgba(17,17,17,0.60)", fontWeight: 400 }}
              >
                {comp.label}
              </h3>
              <div className="flex flex-col gap-1.5">
                {rowLabels.map((label, ri) => (
                  <div
                    key={label}
                    style={{
                      borderRadius: "7px",
                      backgroundColor: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "10px 12px",
                    }}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.07em] mb-0.5" style={{ color: "rgba(17,17,17,0.30)" }}>{label}</p>
                    <p className="text-[12px] leading-[1.5]" style={{ color: "rgba(17,17,17,0.60)" }}>{comp.rows[ri]}</p>
                  </div>
                ))}
              </div>
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
