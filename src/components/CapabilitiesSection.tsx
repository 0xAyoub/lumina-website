import { useRef, useEffect, useState } from "react";

const capabilities = [
  { label: "Cinematic Video Ads", short: "30-second spots. RED camera quality. Narrative-driven, platform-optimized. Produced in hours, not weeks." },
  { label: "Product Hero Shots", short: "Any environment. Any lighting. Any season. Photorealistic product visuals without a studio." },
  { label: "Lifestyle Scenes", short: "Morning routines, kitchen moments, workout contexts — your product in the world. All synthetic." },
  { label: "High-Volume Variations", short: "One winning concept becomes 50 testable creatives. Different hooks, visuals, copy, CTAs. Included." },
  { label: "UGC-Style Content", short: "Hands-on-product, texture close-ups, authentic aesthetics. The UGC look — without the creator." },
  { label: "Motion Graphics", short: "Ingredient breakdowns, brand films, benefit animations. Motion design at a fraction of studio cost." },
];

function getLayout(vw: number) {
  if (vw < 640)  return { cardWidth: 270, gap: 12, px: 24, sectionVh: 320 };
  if (vw < 1024) return { cardWidth: 360, gap: 16, px: 48, sectionVh: 260 };
  return             { cardWidth: 440, gap: 20, px: 80, sectionVh: 200 };
}

const CapabilitiesSection = () => {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutRef    = useRef(getLayout(typeof window !== "undefined" ? window.innerWidth : 1440));
  const rafRef       = useRef(0);

  // layout state only drives section height + card sizes (no scroll-driven re-renders)
  const [layout, setLayout] = useState(layoutRef.current);

  useEffect(() => {
    const onResize = () => {
      const next = getLayout(window.innerWidth);
      layoutRef.current = next;
      setLayout(next);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll → direct DOM mutation, no React state, no re-render
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current || !containerRef.current) return;

        const rect       = sectionRef.current.getBoundingClientRect();
        const secH       = sectionRef.current.offsetHeight;
        const vpH        = window.innerHeight;
        const scrollable = secH - vpH;

        if (rect.top > 0 || rect.bottom < vpH) return;

        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
        const { cardWidth, gap, px } = layoutRef.current;
        const n = capabilities.length;
        const totalW = n * cardWidth + (n - 1) * gap;
        const maxTranslate = Math.max(0, totalW + px - window.innerWidth + px);

        containerRef.current.style.transform = `translateX(${-progress * maxTranslate}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const { cardWidth, gap, px, sectionVh } = layout;

  return (
    <section
      ref={sectionRef}
      id="work"
      data-navbar-dark="true"
      className="bg-secondary text-secondary-foreground relative"
      style={{ height: `${sectionVh}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden pt-8 pb-8 md:pt-0 md:pb-0 md:justify-center">

        {/* Header */}
        <div className="mb-5 md:mb-8 flex-shrink-0" style={{ paddingLeft: px, paddingRight: px }}>
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

        {/* Cards — transform driven by direct DOM writes */}
        <div
          ref={containerRef}
          className="flex will-change-transform flex-1 min-h-0 md:flex-none"
          style={{ gap: `${gap}px`, paddingLeft: `${px}px` }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex-shrink-0 flex flex-col md:block h-full md:h-auto"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="w-full flex-1 md:flex-none md:aspect-[4/3] bg-white/5 rounded-[7px] mb-3 min-h-0" />
              <div className="flex-shrink-0 pb-2 md:pb-0">
                <p className="text-[12px] sm:text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1.5">
                  {cap.label}
                </p>
                <p className="text-[12px] sm:text-[13px] leading-[1.65] text-white/35">
                  {cap.short}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;
