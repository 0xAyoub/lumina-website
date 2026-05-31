const stats = [
  { value: "48h", label: "delivery" },
  { value: "30", label: "ads / month" },
  { value: "80%", label: "cheaper than an agency" },
  { value: "€0", label: "studio or crew" },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]" style={{ borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="reveal" data-delay={String(i * 80)}>
              <p className="font-serif-display text-[36px] md:text-[52px] leading-[1]" style={{ color: "#111111" }}>
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.12em] mt-1" style={{ color: "rgba(17,17,17,0.35)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
