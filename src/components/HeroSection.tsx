import { useEffect, useRef } from "react";

const HeroSection = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (orbRef.current) {
        orbRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      data-navbar-dark="true"
      className="relative h-screen flex flex-col justify-end pb-10 overflow-hidden bg-black"
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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Decorative orb */}
      <div
        ref={orbRef}
        className="absolute top-[20%] right-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-primary opacity-15 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
        <h1 className="font-sans-display text-[24px] md:text-[38px] lg:text-[46px] leading-[1.0] tracking-[-0.026em] text-white mb-3">
          <span className="block">Your next best-performing ad</span>
          <span className="block">
            doesn't need <span className="font-serif-display italic">a camera.</span>
          </span>
        </h1>

        <p className="text-[13px] md:text-[14px] leading-[1.55] text-white/55 max-w-[360px] mb-4">
          AI-generated cinematic creatives for DTC brands. Fraction of the cost.
          Fraction of the time.
        </p>

        <div className="flex gap-2">
          <a
            href="#process"
            className="text-[11px] font-medium bg-white text-black px-4 py-1.5 rounded-[6px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
          >
            How it works
          </a>
          <a
            href="https://cal.com/lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-white/50 px-4 py-1.5 rounded-[6px] border border-white/20 transition-all duration-200 hover:text-white/80 hover:border-white/35 active:scale-[0.97]"
          >
            Book a call →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
