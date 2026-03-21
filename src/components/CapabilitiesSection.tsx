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
      if (top <= 0 && top >= -scrollable.current) {
        const progress = Math.max(0, Math.min(1, -top / scrollable.current));
        containerRef.current.style.transform =
          `translate3d(${-progress * maxTranslate.current}px,0,0)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { cardWidth, gap, px, sectionVh } = layout;

  return (
    <div id="work" data-navbar-dark="true" className="bg-secondary text-secondary-foreground">

      {/* ── Mobile: 100dvh, tall cards, native horizontal scroll (< 768px) ── */}
      <div className="md:hidden flex flex-col" style={{ height: "100dvh" }}>
        {/* Header */}
        <div className="flex-shrink-0 px-6 pt-10 pb-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-3">
            What we produce
          </p>
          <h2 className="font-sans-display text-[20px] leading-[1.1] tracking-[-0.018em] text-white">
            Every frame.{" "}
            <span className="font-serif-display italic text-white/50">
              Indistinguishable from reality.
            </span>
          </h2>
        </div>

        {/* Horizontal scroll — fills remaining height */}
        <div
          className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          <style>{`.cap-mobile::-webkit-scrollbar{display:none}`}</style>
          <div className="cap-mobile flex h-full px-6 pb-6 gap-3">
            {capabilities.map((cap) => (
              <div key={cap.label} className="flex-shrink-0 w-[78vw] flex flex-col">
                <div className="flex-1 min-h-0 rounded-[10px] mb-3 overflow-hidden bg-white/5">
                  {cap.label === "Cinematic Video Ads" && (
                    <video
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover"
                      src="/video1.mp4"
                    />
                  )}
                </div>
                <p className="text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1">
                  {cap.label}
                </p>
                <p className="text-[12px] leading-[1.65] text-white/35">
                  {cap.short}
                </p>
              </div>
            ))}
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
                href="#contact"
                className="flex-shrink-0 text-[11px] font-medium text-white/40 border border-white/15 px-4 py-2 rounded-[7px] transition-all duration-200 hover:text-white hover:border-white/30"
              >
                Get a free sample →
              </a>
            </div>
          </div>

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
                <div className="w-full aspect-[4/3] bg-white/5 rounded-[7px] mb-4 overflow-hidden">
                  {cap.label === "Cinematic Video Ads" && (
                    <video
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover"
                      src="/video1.mp4"
                    />
                  )}
                </div>
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
