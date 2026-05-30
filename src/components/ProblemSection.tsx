const cards = [
  {
    title: "Your winners fatigue in days.",
    body: "You're shipping 4 ads a month. The brands beating you ship 30.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: "Agencies are slow and expensive.",
    body: "€10k a video and four weeks per batch. By the time the ad ships, the window is gone.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Self-serve looks like everyone else.",
    body: "UGC is one-note. Self-serve tools hand you the same templates as your competitors — then leave you to guess what to test.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

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

        <h2 className="font-sans-display text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.018em] text-white/70 max-w-[800px] mb-6 reveal">
          You don't have a Meta problem.
          <br />
          <span className="font-serif-display italic text-white/100">
            You have a creative supply problem.
          </span>
        </h2>

        <p className="text-[14px] leading-[1.75] text-white/40 max-w-[560px] mb-14 reveal" data-delay="60">
          Targeting is automated. Budgets optimize themselves. Creative is the only lever left — and the one thing you can't make fast enough.
        </p>

        <div className="grid md:grid-cols-3 gap-x-5 gap-y-5 mb-16">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal p-7 rounded-[7px]"
              data-delay={String(i * 80)}
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-[6px] mb-5 text-white/40"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                {card.icon}
              </span>
              <h3 className="font-serif-display text-[22px] text-white mb-4">
                {card.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-white/45">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6 reveal" data-delay="300">
          <a
            href="#work"
            className="text-[11px] font-medium text-white/50 tracking-[0.035em] transition-colors duration-200 hover:text-white"
          >
            See what we do →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
