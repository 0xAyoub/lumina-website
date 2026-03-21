import { useEffect, useRef } from "react";

const marqueeItems = [
  "30–50 CREATIVES / MONTH",
  "48H TURNAROUND",
  "META · TIKTOK · GOOGLE ADS",
  "NO CAMERAS",
  "PERFORMANCE-DRIVEN",
  "DTC BRANDS",
  "PARIS, FRANCE",
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = heroRef.current?.querySelectorAll(".hero-line");
    lines?.forEach((line, i) => {
      setTimeout(() => line.classList.add("revealed"), 400 + i * 250);
    });

    const handleScroll = () => {
      if (orbRef.current) {
        orbRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeContent = marqueeItems.map((item, i) => (
    <span
      key={i}
      className="mx-8 text-[10px] font-medium uppercase tracking-[0.10em] text-white/35 whitespace-nowrap"
    >
      {item}
    </span>
  ));

  return (
    <section
      data-navbar-dark="true"
      className="relative h-screen flex flex-col justify-end pb-14 overflow-hidden bg-black"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero_video.mp4"
      />

      {/* Dark overlay — reduced opacity */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Decorative orb */}
      <div
        ref={orbRef}
        className="absolute top-[20%] right-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-primary opacity-15 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />

      <div ref={heroRef} className="relative z-10 w-full px-5 md:px-10 lg:px-14">
        <h1 className="font-sans-display text-[26px] md:text-[42px] lg:text-[50px] leading-[1.02] tracking-[-0.024em] text-white mb-4">
          <span className="hero-line block">Your next best-performing ad</span>
          <span className="hero-line block">
            doesn't need <span className="font-serif-display italic">a camera.</span>
          </span>
        </h1>

        <p
          className="text-[13px] md:text-[14px] leading-[1.5] text-white/45 max-w-[360px] mb-5 reveal"
          data-delay="700"
        >
          AI-generated cinematic creatives for DTC brands. Fraction of the cost.
          Fraction of the time.
        </p>

        <div className="flex gap-2 reveal" data-delay="900">
          <a
            href="#process"
            className="text-[11px] font-medium bg-white text-black px-5 py-2 rounded-[7px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
          >
            How it works
          </a>
          <a
            href="https://cal.com/lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-white/50 px-5 py-2 rounded-[7px] border border-white/20 transition-all duration-200 hover:text-white hover:border-white/40 active:scale-[0.97]"
          >
            Book a call →
          </a>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 py-3 overflow-hidden border-t border-white/8">
        <div className="animate-marquee flex whitespace-nowrap">
          {marqueeContent}
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
