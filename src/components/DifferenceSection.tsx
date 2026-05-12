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
    <section id="results" data-navbar-hide="true" className="bg-background">

      {/* ══ DESKTOP: sticky split ══════════════════════════════════════ */}
      <div className="hidden md:flex" style={{ alignItems: "flex-start" }}>

        {/* LEFT — dark bg, sticky title + scrolling competitors */}
        <div style={{ width: "50vw", backgroundColor: "#111111" }}>

          {/* Sticky title */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              backgroundColor: "#111111",
              padding: "52px clamp(32px, 4vw, 80px) 20px clamp(32px, 5vw, 80px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p
              className="text-[10px] font-medium uppercase tracking-[0.12em] mb-2"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              The difference
            </p>
            <h2
              className="font-sans-display leading-[1.1] tracking-[-0.015em]"
              style={{ fontSize: "clamp(13px, 1.3vw, 17px)", color: "#ffffff", fontWeight: 400 }}
            >
              What you've already tried.{" "}
              <span className="font-serif-display italic" style={{ color: "rgba(255,255,255,0.40)", fontWeight: 400 }}>
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
                borderBottom: ci < competitors.length - 1 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                className="text-[11px] font-medium mb-3"
                style={{ color: "rgba(255,255,255,0.30)", letterSpacing: "0.08em" }}
              >
                {comp.num}
              </p>
              <h3
                className="font-sans-display mb-1.5 tracking-[-0.015em]"
                style={{ fontSize: "clamp(15px, 1.6vw, 20px)", color: "#ffffff", fontWeight: 400 }}
              >
                {comp.label}
              </h3>
              <p
                className="text-[12px] mb-8 italic"
                style={{ color: "rgba(255,255,255,0.40)", fontWeight: 400 }}
              >
                {comp.sub}
              </p>

              {/* Bubble rows */}
              <div className="flex flex-col gap-2">
                {rowLabels.map((label, ri) => (
                  <div
                    key={label}
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      padding: "12px 14px",
                    }}
                  >
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.08em] mb-1"
                      style={{ color: "rgba(255,255,255,0.42)" }}
                    >
                      {label}
                    </p>
                    <p className="text-[13px] leading-[1.55]" style={{ color: "rgba(255,255,255,0.85)" }}>
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
              className="text-[10px] font-medium uppercase tracking-[0.12em] mb-2"
              style={{ color: "rgba(17,17,17,0.35)" }}
            >
              Lumina
            </p>
            <h2
              className="font-sans-display leading-[1.1] tracking-[-0.015em] mb-5"
              style={{ fontSize: "clamp(16px, 1.7vw, 22px)", color: "#111111", fontWeight: 400 }}
            >
              Numbers on the page.{" "}
              <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.35)", fontWeight: 400 }}>
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
                    backgroundColor: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.07)",
                  }}
                >
                  <p
                    className="font-sans-display leading-none mb-1"
                    style={{ fontSize: "clamp(18px, 1.9vw, 24px)", color: "#111111", letterSpacing: "-0.02em", fontWeight: 400 }}
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
                style={{ paddingTop: "12px", paddingBottom: "12px", borderTop: "1px solid rgba(0,0,0,0.07)" }}
              >
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.08em] flex-shrink-0 pt-0.5"
                  style={{ width: "68px", color: "rgba(17,17,17,0.35)" }}
                >
                  {label}
                </span>
                <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(17,17,17,0.80)" }}>
                  {lumina.rows[ri]}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ paddingTop: "22px" }}>
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
          className="font-sans-display text-[20px] leading-[1.1] tracking-[-0.015em] mb-8"
          style={{ color: "#111111", fontWeight: 400 }}
        >
          Numbers on the page.{" "}
          <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.32)" }}>
            No surprises.
          </span>
        </h2>

        {/* Lumina card — white */}
        <div
          style={{
            borderRadius: "7px",
            padding: "20px",
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.09)",
            marginBottom: "8px",
          }}
        >
          <p
            className="text-[10px] font-medium uppercase tracking-[0.12em] mb-3"
            style={{ color: "rgba(17,17,17,0.35)" }}
          >
            Lumina
          </p>
          <div className="grid grid-cols-2 gap-2 mb-3">
            {lumina.highlights.map((h, i) => (
              <div
                key={i}
                style={{ padding: "12px", borderRadius: "7px", backgroundColor: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <p
                  className="font-sans-display leading-none mb-1"
                  style={{ fontSize: "20px", color: "#111111", letterSpacing: "-0.02em", fontWeight: 400 }}
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
              style={{ paddingTop: "10px", paddingBottom: "10px", borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.07em] flex-shrink-0 pt-0.5" style={{ width: "64px", color: "rgba(17,17,17,0.35)" }}>{label}</span>
              <p className="text-[12px] leading-[1.6]" style={{ color: "rgba(17,17,17,0.75)" }}>{lumina.rows[ri]}</p>
            </div>
          ))}
        </div>

        <p
          className="text-[10px] font-medium uppercase tracking-[0.12em] mt-9 mb-4"
          style={{ color: "rgba(17,17,17,0.32)" }}
        >
          What you've already tried.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {competitors.map((comp) => (
            <div
              key={comp.num}
              style={{ borderRadius: "7px", padding: "18px", backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[10px] font-medium mb-2" style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em" }}>{comp.num}</p>
              <h3
                className="font-sans-display text-[13px] mb-1 tracking-[-0.01em]"
                style={{ color: "rgba(255,255,255,0.60)", fontWeight: 400 }}
              >
                {comp.label}
              </h3>
              <p className="text-[11px] italic mb-3" style={{ color: "rgba(255,255,255,0.25)", fontWeight: 400 }}>{comp.sub}</p>
              <div className="flex flex-col gap-1.5">
                {rowLabels.map((label, ri) => (
                  <div
                    key={label}
                    style={{
                      borderRadius: "7px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "10px 12px",
                    }}
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.07em] mb-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>{label}</p>
                    <p className="text-[12px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.58)" }}>{comp.rows[ri]}</p>
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
