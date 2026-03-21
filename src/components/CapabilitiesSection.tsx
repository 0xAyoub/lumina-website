import { useRef, useEffect, useState } from "react";

const capabilities = [
  { label: "Cinematic Video Ads", short: "30-second spots. RED camera quality. Narrative-driven, platform-optimized. Produced in hours, not weeks." },
  { label: "Product Hero Shots", short: "Any environment. Any lighting. Any season. Photorealistic product visuals without a studio." },
  { label: "Lifestyle Scenes", short: "Morning routines, kitchen moments, workout contexts — your product in the world. All synthetic." },
  { label: "High-Volume Variations", short: "One winning concept becomes 50 testable creatives. Different hooks, visuals, copy, CTAs. Included." },
  { label: "UGC-Style Content", short: "Hands-on-product, texture close-ups, authentic aesthetics. The UGC look — without the creator." },
  { label: "Motion Graphics", short: "Ingredient breakdowns, brand films, benefit animations. Motion design at a fraction of studio cost." },
];

// Tablet + desktop only (md = 768px+)
function getLayout(vw: number) {
  if (vw < 1024) return { cardWidth: 360, gap: 16, px: 48, sectionVh: 260 };
  return             { cardWidth: 440, gap: 20, px: 80, sectionVh: 200 };
}

const N = capabilities.length;

const CapabilitiesSection = () => {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutRef    = useRef(getLayout(typeof window !== "undefined" ? window.innerWidth : 1440));
  const maxTranslate = useRef(0);
  const scrollable   = useRef(0);

  const [layout, setLayout] = useState(layoutRef.current);

  const updateMetrics = () => {
    if (!sectionRef.current) return;
    const { cardWidth, gap, px } = layoutRef.current;
    const totalW = N * cardWidth + (N - 1) * gap;
    maxTranslate.current = Math.max(0, totalW + px - window.innerWidth + px);
    scrollable.current   = sectionRef.current.offsetHeight - window.innerHeight;
  };

  useEffect(() => {
    updateMetrics();
    const onResize = () => {
      const next = getLayout(window.innerWidth);
      layoutRef.current = next;
      setLayout(next);
      requestAnimationFrame(updateMetrics);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      if (top > 0 || top < -scrollable.current) return;
      const progress = Math.max(0, Math.min(1, -top / scrollable.current));
      containerRef.current.style.transform =
        `translate3d(${-progress * maxTranslate.current}px,0,0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { cardWidth, gap, px, sectionVh } = layout;

  return (
    <div id="work" data-navbar-dark="true" className="bg-secondary text-secondary-foreground">

      {/* ── Mobile: native swipe (< 768px) ── */}
      <div className="md:hidden py-12">
        {/* Header */}
        <div className="px-6 mb-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-4">
            What we produce
          </p>
          <h2 className="font-sans-display text-[20px] leading-[1.1] tracking-[-0.018em] text-white">
            Every frame.{" "}
            <span className="font-serif-display italic text-white/50">
              Indistinguishable from reality.
            </span>
          </h2>
        </div>

        {/* Native horizontal swipe — zero JS, perfectly smooth */}
        <div
          className="overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`.cap-scroll::-webkit-scrollbar { display: none; }`}</style>
          <div
            className="cap-scroll flex px-6 gap-3"
            style={{ width: "max-content" }}
          >
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex-shrink-0 flex flex-col"
                style={{ width: "75vw", scrollSnapAlign: "start" }}
              >
                <div className="w-full bg-white/5 rounded-[7px] mb-3" style={{ aspectRatio: "4/3" }} />
                <p className="text-[12px] font-medium tracking-[0.02em] text-white/70 mb-1.5">
                  {cap.label}
                </p>
                <p className="text-[12px] leading-[1.65] text-white/35">
                  {cap.short}
                </p>
              </div>
            ))}
            {/* trailing space so last card snaps flush */}
            <div className="flex-shrink-0 w-6" />
          </div>
        </div>
      </div>

      {/* ── Tablet + Desktop: sticky scroll-driven (768px+) ── */}
      <section
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: `${sectionVh}vh` }}
      >
        <div
          className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          {/* Header */}
          <div className="mb-8 flex-shrink-0" style={{ paddingLeft: px, paddingRight: px }}>
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-4">
              What we produce
            </p>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-sans-display text-[28px] md:text-[34px] lg:text-[36px] leading-[1.1] tracking-[-0.018em] text-white">
                Every frame.{" "}
                <span className="font-serif-display italic text-white/50">
                  Indistinguishable from reality.
                </span>
              </h2>
              <a
                href="https://cal.com/lumina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-[11px] font-medium text-white/40 border border-white/15 px-4 py-2 rounded-[7px] transition-all duration-200 hover:text-white hover:border-white/30"
              >
                Get a free sample →
              </a>
            </div>
          </div>

          {/* Cards */}
          <div
            ref={containerRef}
            className="flex will-change-transform flex-none"
            style={{ gap: `${gap}px`, paddingLeft: `${px}px` }}
          >
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <div className="w-full aspect-[4/3] bg-white/5 rounded-[7px] mb-4" />
                <p className="text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1.5">
                  {cap.label}
                </p>
                <p className="text-[13px] leading-[1.65] text-white/35">
                  {cap.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default CapabilitiesSection;
