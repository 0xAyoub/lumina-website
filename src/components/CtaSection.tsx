const CtaSection = () => {
  return (
    <section className="bg-background py-[100px] md:py-[140px]">
      <div className="w-full px-6 md:px-12 lg:px-20 max-w-[600px]">
        <h2 className="font-sans-display text-[24px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-foreground mb-6 reveal">
          50 new ads this month.
          <br />
          <span className="font-serif-display italic text-foreground/40">You're still waiting on one shoot.</span>
        </h2>

        <p className="text-[12px] leading-[1.7] text-foreground/35 mb-8 reveal" data-delay="100">
          20-minute strategy call. Free sample creative. No commitment.
        </p>

        <div className="reveal" data-delay="200">
          <a
            href="https://cal.com/lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[11px] font-medium bg-foreground text-background px-6 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
          >
            Book a call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
