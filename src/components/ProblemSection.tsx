const ProblemSection = () => {
  return (
    <section
      data-navbar-dark="true"
      className="bg-secondary text-secondary-foreground py-[100px] md:py-[140px]"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-12 reveal">
          The problem
        </p>

        <h2 className="font-sans-display text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.018em] text-white max-w-[800px] mb-16 reveal">
          You spend €30K/month on ads. Your team ships 5 assets a week.
          <br />
          <span className="font-serif-display italic text-white/50">
            Your competitors ship 50.
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-x-5 gap-y-5 mb-16">
          {[
            {
              title: "Slow",
              body: "4 to 8 weeks from brief to launch. By the time your ad is live, the trend is dead, your audience has moved on, and your competitors have already tested 20 variations.",
            },
            {
              title: "Expensive",
              body: "A single 30-second video costs €10K–€50K through a traditional agency. That's your entire monthly creative budget — for one asset, with no guarantee it performs.",
            },
            {
              title: "Low volume",
              body: "Winning on Meta and TikTok requires 30 to 50 fresh creatives every month. No human team sustains that output without burning out, cutting quality, or missing the brief.",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="reveal p-7 rounded-[7px]"
              data-delay={String(i * 80)}
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <h3 className="font-serif-display text-[22px] text-white mb-4">
                {card.title}
              </h3>
              <p className="text-[14px] leading-[1.75] text-white/45">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 reveal" data-delay="300">
          <a
            href="#work"
            className="text-[11px] font-medium text-white/50 tracking-[0.035em] transition-colors duration-200 hover:text-white"
          >
            See what's possible →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
