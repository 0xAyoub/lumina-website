// ── Data ───────────────────────────────────────────────────────────────
const rowLabels = ["Delivery", "Cost", "Volume", "Loop"];

const lumina = {
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
    <section id="results" data-navbar-hide="true" className="bg-white">

      {/* ══ DESKTOP: sticky split ══════════════════════════════════════ */}
      <div className="hidden md:flex" style={{ alignItems: "flex-start" }}>

        {/* LEFT — competitors scrolling */}
        <div style={{ width: "50vw", backgroundColor: "#F6F6F6" }}>
          {competitors.map((comp, ci) => (
            <div
              key={comp.num}
              style={{
                minHeight: "100vh",
                padding: "72px clamp(32px, 4vw, 80px) 72px clamp(32px, 5vw, 80px)",
                borderBottom: ci < competitors.length - 1 ? "1px solid rgba(0,0,0,0.07)" : undefined,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                className="text-[72px] leading-none mb-6 font-light"
                style={{ color: "rgba(17,17,17,0.10)", letterSpacing: "-0.04em", fontFamily: "inherit" }}
              >
                {comp.num}
              </p>
              <h3
                className="text-[28px] leading-[1.15] tracking-[-0.02em] mb-8"
                style={{ color: "rgba(17,17,17,0.65)", fontWeight: 400 }}
              >
                {comp.label}
              </h3>

              <div className="flex flex-col gap-2">
                {rowLabels.map((label, ri) => (
                  <div
                    key={label}
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "13px 16px",
                    }}
                  >
                    <p
                      className="text-[10px] font-medium uppercase tracking-[0.08em] mb-1"
                      style={{ color: "rgba(17,17,17,0.35)" }}
                    >
                      {label}
                    </p>
                    <p className="text-[14px] leading-[1.5]" style={{ color: "rgba(17,17,17,0.60)", fontWeight: 400 }}>
                      {comp.rows[ri]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — sticky Lumina rows */}
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
            justifyContent: "center",
            padding: "64px clamp(32px, 4vw, 64px)",
            overflowY: "auto",
          }}
        >
          <div className="flex flex-col">
            {rowLabels.map((label, ri) => (
              <div
                key={label}
                className="flex items-start gap-4"
                style={{ paddingTop: "18px", paddingBottom: "18px", borderTop: "1px solid rgba(0,0,0,0.07)" }}
              >
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.08em] flex-shrink-0 pt-1"
                  style={{ width: "72px", color: "rgba(17,17,17,0.35)" }}
                >
                  {label}
                </span>
                <p className="text-[16px] leading-[1.6]" style={{ color: "#111111", fontWeight: 450 }}>
                  {lumina.rows[ri]}
                </p>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: "36px" }}>
            <a
              href="/free"
              className="inline-flex text-[12px] font-medium px-6 py-3 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
              style={{ backgroundColor: "#111111", color: "#ffffff" }}
            >
              Get a free ad for your brand →
            </a>
          </div>
        </div>
      </div>

      {/* ══ MOBILE: stacked cards ══════════════════════════════════════ */}
      <div className="md:hidden px-6 py-12">

        {/* Lumina rows */}
        <div
          style={{
            borderRadius: "10px",
            padding: "22px",
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0,0,0,0.09)",
            marginBottom: "8px",
          }}
        >
          {rowLabels.map((label, ri) => (
            <div
              key={label}
              className="flex items-start gap-3"
              style={{ paddingTop: "12px", paddingBottom: "12px", borderTop: ri === 0 ? "none" : "1px solid rgba(0,0,0,0.07)" }}
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.07em] flex-shrink-0 pt-0.5" style={{ width: "64px", color: "rgba(17,17,17,0.35)" }}>{label}</span>
              <p className="text-[14px] leading-[1.6]" style={{ color: "#111111", fontWeight: 450 }}>{lumina.rows[ri]}</p>
            </div>
          ))}
        </div>

        <p
          className="text-[10px] font-medium uppercase tracking-[0.12em] mt-8 mb-4"
          style={{ color: "rgba(17,17,17,0.32)" }}
        >
          What you've tried.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {competitors.map((comp) => (
            <div
              key={comp.num}
              style={{ borderRadius: "10px", padding: "22px", backgroundColor: "#F6F6F6", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <p className="text-[42px] leading-none mb-3 font-light" style={{ color: "rgba(17,17,17,0.10)", letterSpacing: "-0.04em" }}>{comp.num}</p>
              <h3
                className="text-[20px] tracking-[-0.015em] mb-5"
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
                    <p className="text-[13px] leading-[1.5]" style={{ color: "rgba(17,17,17,0.60)", fontWeight: 400 }}>{comp.rows[ri]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="/free"
          className="inline-flex text-[12px] font-medium px-5 py-3 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
          style={{ backgroundColor: "#111111", color: "#ffffff" }}
        >
          Get a free ad for your brand →
        </a>
      </div>

    </section>
  );
};

export default DifferenceSection;
