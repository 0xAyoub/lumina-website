import { useEffect, useRef, useState } from "react";

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
const OutputIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IterationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/>
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
  </svg>
);
const IncentiveIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────
const rows = [
  { id: "delivery",  label: "Delivery",  Icon: ClockIcon },
  { id: "cost",      label: "Cost",      Icon: CostIcon },
  { id: "output",    label: "Output",    Icon: OutputIcon },
  { id: "iteration", label: "Iteration", Icon: IterationIcon },
  { id: "incentive", label: "Incentive", Icon: IncentiveIcon },
];

type RowId = "delivery" | "cost" | "output" | "iteration" | "incentive";

const columns: {
  id: string;
  label: string;
  sub: string;
  highlight: boolean;
  tagline: string;
  rows: Record<RowId, string>;
}[] = [
  {
    id: "traditional",
    label: "Traditional Agency",
    sub: "The old guard",
    highlight: false,
    tagline: "Great work. Once. At a price that doesn't scale.",
    rows: {
      delivery:  "4–8 weeks per campaign.",
      cost:      "€10K–€50K per asset. Revisions billed extra.",
      output:    "1–3 creatives per cycle.",
      iteration: "Start over each time. No feedback loop.",
      incentive: "Paid per project. No stake in your ROAS.",
    },
  },
  {
    id: "ai",
    label: "Self-serve AI",
    sub: "The DIY trap",
    highlight: false,
    tagline: "Fast and cheap. Also forgettable and ineffective.",
    rows: {
      delivery:  "Instant — but you do all the work.",
      cost:      "€50–€200/month. Cheap until you count your time.",
      output:    "Generic. Looks like AI. No brand intelligence.",
      iteration: "You guess what to test. No data. No strategy.",
      incentive: "Sells you the tool. Doesn't care if your ads convert.",
    },
  },
  {
    id: "ugc",
    label: "UGC Creators",
    sub: "The commodity",
    highlight: false,
    tagline: "Authentic feel. No scale. No strategy. No compounding.",
    rows: {
      delivery:  "5–14 days per batch. Scheduling nightmares.",
      cost:      "€200–€500 per video. Adds up fast at volume.",
      output:    "Inconsistent. One face, one style per creator.",
      iteration: "No performance data. No funnel awareness.",
      incentive: "Paid per video. No awareness of your funnel.",
    },
  },
  {
    id: "lumina",
    label: "Lumina",
    sub: "The engine",
    highlight: true,
    tagline: "Agency quality. Software speed. Performance obsessed.",
    rows: {
      delivery:  "48 hours. Every batch. Every time.",
      cost:      "Flat monthly retainer. 80% less than an agency.",
      output:    "30–50 creatives/month. Enough to test everything.",
      iteration: "Continuous. Kill losers. Scale winners. Repeat.",
      incentive: "We win when your ROAS grows. That's the only metric.",
    },
  },
];

// ── Animated cell text ─────────────────────────────────────────────────
const RevealText = ({ text, delay, active }: { text: string; delay: number; active: boolean }) => (
  <span
    style={{
      display: "inline-block",
      clipPath: active ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
      transition: active
        ? `clip-path 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}ms`
        : "none",
    }}
  >
    {text}
  </span>
);

// ── Component ──────────────────────────────────────────────────────────
const DifferenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      data-navbar-dark="true"
      className="bg-secondary text-secondary-foreground py-20 md:py-28 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">

        {/* Header */}
        <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/55 mb-4">
          The difference
        </p>
        <h2 className="font-sans-display text-[22px] md:text-[34px] leading-[1.08] tracking-[-0.018em] text-white mb-14 md:mb-16">
          Not all creative partners{" "}
          <span className="font-serif-display italic text-white/60">are created equal.</span>
        </h2>

        {/* ── Desktop table (md+) ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[160px_1fr_1fr_1fr_1fr] gap-0">

            {/* Column headers */}
            <div /> {/* empty label column */}
            {columns.map((col, ci) => (
              <div
                key={col.id}
                className="px-5 pb-5"
                style={col.highlight ? {
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "10px 10px 0 0",
                  borderTop: "1px solid rgba(255,255,255,0.10)",
                  borderLeft: "1px solid rgba(255,255,255,0.10)",
                  borderRight: "1px solid rgba(255,255,255,0.10)",
                } : {}}
              >
                <div className="pt-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-1" style={{ color: col.highlight ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.90)" }}>
                    <RevealText text={col.label} delay={ci * 80} active={active} />
                  </p>
                  <p className="text-[11px]" style={{ color: col.highlight ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.60)" }}>
                    <RevealText text={col.sub} delay={ci * 80 + 60} active={active} />
                  </p>
                </div>
              </div>
            ))}

            {/* Rows */}
            {rows.map((row, ri) => (
              <>
                {/* Row label */}
                <div
                  key={`label-${row.id}`}
                  className="flex items-center gap-2 py-4 pr-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-white/65"><row.Icon /></span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/75">
                    {row.label}
                  </span>
                </div>

                {/* Cells */}
                {columns.map((col, ci) => (
                  <div
                    key={`${row.id}-${col.id}`}
                    className="px-5 py-4 text-[12px] leading-[1.65]"
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      color: col.highlight ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.82)",
                      ...(col.highlight ? {
                        background: "rgba(255,255,255,0.04)",
                        borderLeft: "1px solid rgba(255,255,255,0.10)",
                        borderRight: "1px solid rgba(255,255,255,0.10)",
                      } : {}),
                    }}
                  >
                    <RevealText
                      text={col.rows[row.id as RowId]}
                      delay={ri * 90 + ci * 70 + 200}
                      active={active}
                    />
                  </div>
                ))}
              </>
            ))}

            {/* Tagline row */}
            <div
              key="tagline-label"
              className="py-5 pr-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            />
            {columns.map((col, ci) => (
              <div
                key={`tagline-${col.id}`}
                className="px-5 py-5 text-[11px] leading-[1.6]"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  color: col.highlight ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.60)",
                  fontStyle: "italic",
                  ...(col.highlight ? {
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "0 0 10px 10px",
                    borderBottom: "1px solid rgba(255,255,255,0.10)",
                    borderLeft: "1px solid rgba(255,255,255,0.10)",
                    borderRight: "1px solid rgba(255,255,255,0.10)",
                  } : {}),
                }}
              >
                <RevealText text={col.tagline} delay={rows.length * 90 + ci * 70 + 200} active={active} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: stacked cards ── */}
        <div className="md:hidden flex flex-col gap-4">
          {columns.map((col, ci) => (
            <div
              key={col.id}
              className="rounded-[10px] overflow-hidden"
              style={col.highlight ? {
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
              } : {
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-0.5"
                  style={{ color: col.highlight ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)" }}>
                  <RevealText text={col.label} delay={ci * 60} active={active} />
                </p>
                <p className="text-[11px]" style={{ color: col.highlight ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)" }}>
                  <RevealText text={col.sub} delay={ci * 60 + 50} active={active} />
                </p>
              </div>

              {/* Rows */}
              {rows.map((row, ri) => (
                <div
                  key={row.id}
                  className="px-5 py-3.5 flex gap-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div className="flex items-start gap-2 w-[80px] flex-shrink-0 pt-0.5">
                    <span style={{ color: col.highlight ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.60)" }}>
                      <row.Icon />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.06em]"
                      style={{ color: col.highlight ? "rgba(255,255,255,0.50)" : "rgba(255,255,255,0.60)" }}>
                      {row.label}
                    </span>
                  </div>
                  <p className="text-[12px] leading-[1.6]"
                    style={{ color: col.highlight ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.82)" }}>
                    <RevealText text={col.rows[row.id as RowId]} delay={ci * 60 + ri * 50 + 100} active={active} />
                  </p>
                </div>
              ))}

              {/* Tagline */}
              <div className="px-5 py-4">
                <p className="text-[11px] leading-[1.6] italic"
                  style={{ color: col.highlight ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.42)" }}>
                  <RevealText text={col.tagline} delay={ci * 60 + rows.length * 50 + 100} active={active} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/free"
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
