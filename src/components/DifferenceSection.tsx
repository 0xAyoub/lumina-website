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

// ── Lumina highlights ──────────────────────────────────────────────────
const highlights = [
  { label: "Delivery",  Icon: ClockIcon,     stat: "48h",       desc: "Free ad. Every time." },
  { label: "Pilot",     Icon: CostIcon,      stat: "€2,500",    desc: "15 ads in 14 days. Flat fee. No contract." },
  { label: "Retainer",  Icon: OutputIcon,    stat: "€5,000/mo", desc: "30 ads a month. Month-to-month. Kill anytime." },
  { label: "Output",    Icon: IterationIcon, stat: "30",        desc: "What top supplement brands actually need to scale." },
  { label: "Iteration", Icon: IncentiveIcon, stat: "bi-weekly", desc: "Kill losers. Re-cut winners. Compound." },
];

// ── Competitors ────────────────────────────────────────────────────────
const competitors = [
  {
    id: "traditional",
    label: "Traditional Performance Agency",
    sub: "Strong work. Slow delivery. Capped volume.",
    tagline: "Strong work. Slow delivery. Capped volume.",
    rows: [
      { Icon: ClockIcon,     label: "Delivery",  text: "4–8 weeks per batch." },
      { Icon: CostIcon,      label: "Pilot",     text: "€10K minimum. Before a single test." },
      { Icon: OutputIcon,    label: "Retainer",  text: "€15K–€50K/mo. Volume stays low." },
      { Icon: IterationIcon, label: "Output",    text: "3–5 creatives per cycle. Not enough." },
      { Icon: IncentiveIcon, label: "Iteration", text: "Start over each time. No loop." },
    ],
  },
  {
    id: "ugc",
    label: "UGC Marketplaces (Billo, Insense)",
    sub: "Authentic feel. Inconsistent. Doesn't compound.",
    tagline: "Authentic feel. Inconsistent. Doesn't compound.",
    rows: [
      { Icon: ClockIcon,     label: "Delivery",  text: "5–14 days per batch." },
      { Icon: CostIcon,      label: "Pilot",     text: "€200–€500 per video. Adds up fast." },
      { Icon: OutputIcon,    label: "Retainer",  text: "Inconsistent. One face, one style." },
      { Icon: IterationIcon, label: "Output",    text: "Low volume. Hard to scale." },
      { Icon: IncentiveIcon, label: "Iteration", text: "No data. No funnel awareness." },
    ],
  },
  {
    id: "ai",
    label: "Self-Serve AI Tools (Arcads, Pencil, Creatify)",
    sub: "Fast. Cheap. Looks like the other 4,000 brands using them.",
    tagline: "Fast. Cheap. Looks like the other 4,000 brands using them.",
    rows: [
      { Icon: ClockIcon,     label: "Delivery",  text: "Fast — but you do all the work." },
      { Icon: CostIcon,      label: "Pilot",     text: "€50–€200/month. Cheap until you count your time." },
      { Icon: OutputIcon,    label: "Retainer",  text: "Generic templates. No brand intelligence." },
      { Icon: IterationIcon, label: "Output",    text: "Volume yes. Differentiation no." },
      { Icon: IncentiveIcon, label: "Iteration", text: "You guess what to test. No strategy." },
    ],
  },
];

// ── Reveal animation ───────────────────────────────────────────────────
const RevealText = ({ text, delay, active }: { text: string; delay: number; active: boolean }) => (
  <span
    style={{
      display: "inline-block",
      clipPath: active ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
      transition: active ? `clip-path 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}ms` : "none",
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
      { threshold: 0.08 }
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
          Most agencies hide their numbers.{" "}
          <span className="font-serif-display italic text-white/60">Ours are on the page.</span>
        </h2>

        {/* ── Lumina highlight cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-14 md:mb-16">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`flex flex-col justify-between p-5 rounded-[7px]${i === 4 ? " col-span-2 md:col-span-1" : ""}`}
              style={{
                background: "rgba(197,210,248,0.06)",
                border: "1px solid rgba(197,210,248,0.12)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: "rgba(197,210,248,0.70)" }}><h.Icon /></span>
                <span className="text-[10px] font-medium uppercase tracking-[0.10em]" style={{ color: "rgba(255,255,255,0.50)" }}>
                  {h.label}
                </span>
              </div>
              <div>
                <p
                  className="font-sans-display text-[28px] md:text-[34px] leading-[1.0] tracking-[-0.02em] mb-2"
                  style={{ color: "#C5D2F8" }}
                >
                  <RevealText text={h.stat} delay={i * 80} active={active} />
                </p>
                <p className="text-[11px] leading-[1.55]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <RevealText text={h.desc} delay={i * 80 + 120} active={active} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Separator ── */}
        <div className="flex items-center gap-4 mb-10 md:mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 flex-shrink-0">
            vs. the alternatives
          </p>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* ── Competitor cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {competitors.map((comp, ci) => (
            <div
              key={comp.id}
              className="rounded-[7px] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-1" style={{ color: "rgba(255,255,255,0.60)" }}>
                  <RevealText text={comp.label} delay={400 + ci * 80} active={active} />
                </p>
                <p className="text-[11px] italic leading-[1.55]" style={{ color: "rgba(255,255,255,0.38)" }}>
                  <RevealText text={comp.tagline} delay={400 + ci * 80 + 60} active={active} />
                </p>
              </div>

              {/* Rows */}
              <div className="px-5 py-3">
                {comp.rows.map((row, ri) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3 py-2.5"
                    style={ri < comp.rows.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
                  >
                    <div className="flex items-center gap-1.5 w-[72px] flex-shrink-0 pt-0.5">
                      <span style={{ color: "rgba(255,255,255,0.45)" }}><row.Icon /></span>
                      <span className="text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: "rgba(255,255,255,0.48)" }}>
                        {row.label}
                      </span>
                    </div>
                    <p className="text-[12px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.58)" }}>
                      <RevealText text={row.text} delay={400 + ci * 80 + ri * 45 + 120} active={active} />
                    </p>
                  </div>
                ))}
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
            Get a free ad for your brand →
          </a>
        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;
