const stats = [
  { value: "48h", label: "First ad turnaround" },
  { value: "€2,500", label: "Pilot. 15 ads. 14 days." },
  { value: "€5,000/mo", label: "Retainer. 30 ads/month." },
  { value: "30", label: "Ads shipped per retainer month" },
  { value: "0", label: "Studio, crew, equipment" },
  { value: "100%", label: "Built for supplement-brand creative formats" },
];

const StatsSection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground py-[80px] md:py-[100px]">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="reveal" data-delay={String(i * 80)}>
              <p className="font-serif-display text-[36px] md:text-[52px] text-primary leading-[1]">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-[0.12em] text-white/30 mt-1">
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
