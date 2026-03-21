const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-[100px] md:py-[140px]">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-[600px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/30 mb-4 reveal">
            About
          </p>
          <h2 className="font-sans-display text-[24px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-foreground mb-8 reveal">
            Not an agency with AI tools.
            <br />
            <span className="font-serif-display italic text-foreground/40">An AI system with human oversight.</span>
          </h2>

          <p className="text-[13px] leading-[1.8] text-foreground/40 mb-4 reveal" data-delay="100">
            Founded in Paris, 2026. We built an autonomous creative engine — strategy to deployment to iteration. Our humans handle judgment. The AI handles everything else.
          </p>

          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-foreground/20 mt-8 reveal" data-delay="200">
            Paris · European DTC brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
