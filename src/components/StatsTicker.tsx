const stats = [
  { value: "48h", label: "Average batch delivery" },
  { value: "50+", label: "Creatives per month" },
  { value: "80%", label: "Cost reduction vs. traditional" },
  { value: "85%", label: "Ad performance driven by creative" },
  { value: "3×", label: "Average ROAS improvement" },
  { value: "€0", label: "Studio, crew or equipment" },
  { value: "48h", label: "First draft turnaround" },
  { value: "100%", label: "AI-generated, human-directed" },
];

const Dot = () => (
  <span className="w-[3px] h-[3px] rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
);

const TickerItem = ({ stat }: { stat: typeof stats[0] }) => (
  <span className="inline-flex items-center gap-5 flex-shrink-0">
    <span className="inline-flex items-baseline gap-2.5">
      <span className="font-serif-display text-[22px] leading-none text-white/90">{stat.value}</span>
      <span className="text-[11px] uppercase tracking-[0.09em] text-white/28" style={{ color: "rgba(255,255,255,0.28)" }}>{stat.label}</span>
    </span>
    <Dot />
  </span>
);

const StatsTicker = () => {
  const items = [...stats, ...stats, ...stats, ...stats];

  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.06)",
        background: "linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(26,26,26,1) 100%)",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "statsTicker 40s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((stat, i) => (
          <span key={i} className="mx-6">
            <TickerItem stat={stat} />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes statsTicker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default StatsTicker;
