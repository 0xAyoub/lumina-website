import { useRef, useEffect, useState } from "react";

const capabilities = [
  { label: "Cinematic Video Ads", short: "30-second spots. RED camera quality. Narrative-driven, platform-optimized. Produced in hours, not weeks." },
  { label: "Product Hero Shots", short: "Any environment. Any lighting. Any season. Photorealistic product visuals without a studio." },
  { label: "Lifestyle Scenes", short: "Morning routines, kitchen moments, workout contexts — your product in the world. All synthetic." },
  { label: "High-Volume Variations", short: "One winning concept becomes 50 testable creatives. Different hooks, visuals, copy, CTAs. Included." },
  { label: "UGC-Style Content", short: "Hands-on-product, texture close-ups, authentic aesthetics. The UGC look — without the creator." },
  { label: "Motion Graphics", short: "Ingredient breakdowns, brand films, benefit animations. Motion design at a fraction of studio cost." },
];

// Per-breakpoint layout values
function getLayout(vw: number) {
  if (vw < 640)  return { cardWidth: 220, gap: 12, px: 24 };
  if (vw < 1024) return { cardWidth: 300, gap: 16, px: 48 };
  return             { cardWidth: 380, gap: 20, px: 80 };
}

const CapabilitiesSection = () => {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [layout, setLayout] = useState(() =>
    getLayout(typeof window !== "undefined" ? window.innerWidth : 1440)
  );

  // Update layout on resize
  useEffect(() => {
    const onResize = () => setLayout(getLayout(window.innerWidth));
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll progress — same logic for all viewports
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect      = sectionRef.current.getBoundingClientRect();
      const secH      = sectionRef.current.offsetHeight;
      const vpH       = window.innerHeight;
      const scrollable = secH - vpH;
      if (rect.top <= 0 && rect.bottom >= vpH) {
        setScrollProgress(Math.min(1, Math.max(0, -rect.top / scrollable)));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // translateX: move cards left until last card is fully visible
  const { cardWidth, gap, px } = layout;
  const n = capabilities.length;
  const totalContentWidth = n * cardWidth + (n - 1) * gap; // all cards + gaps
  const maxTranslate = Math.max(
    0,
    totalContentWidth + px - (typeof window !== "undefined" ? window.innerWidth : 1440) + px
  );
  const translateX = -scrollProgress * maxTranslate;

  return (
    <section
      ref={sectionRef}
      id="work"
      data-navbar-dark="true"
      className="bg-secondary text-secondary-foreground relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Header */}
        <div className="mb-6 md:mb-8" style={{ paddingLeft: px, paddingRight: px }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-4">
            What we produce
          </p>
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-sans-display text-[20px] sm:text-[28px] md:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.018em] text-white">
              Every frame.{" "}
              <span className="font-serif-display italic text-white/50">
                Indistinguishable from reality.
              </span>
            </h2>
            <a
              href="https://cal.com/lumina"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block flex-shrink-0 text-[11px] font-medium text-white/40 border border-white/15 px-4 py-2 rounded-[7px] transition-all duration-200 hover:text-white hover:border-white/30"
            >
              Get a free sample →
            </a>
          </div>
        </div>

        {/* Cards — same scroll mechanic, responsive widths */}
        <div
          ref={containerRef}
          className="flex will-change-transform"
          style={{
            gap: `${gap}px`,
            paddingLeft: `${px}px`,
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="w-full aspect-[4/3] bg-white/5 rounded-[7px] mb-4" />
              <p className="text-[12px] sm:text-[13px] font-medium tracking-[0.02em] text-white/70 mb-2">
                {cap.label}
              </p>
              <p className="text-[12px] sm:text-[13px] leading-[1.65] text-white/35">
                {cap.short}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
