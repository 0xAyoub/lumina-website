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
  // Desktop refs
  const sectionRef    = useRef<HTMLDivElement>(null);
  const containerRef  = useRef<HTMLDivElement>(null);
  const layoutRef     = useRef(getLayout(typeof window !== "undefined" ? window.innerWidth : 1440));
  const maxTranslate  = useRef(0);
  const scrollable    = useRef(0);

  // Mobile refs
  const mobileSectionRef   = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

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
      // Desktop
      if (sectionRef.current && containerRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        if (top <= 0 && top >= -scrollable.current) {
          const progress = Math.max(0, Math.min(1, -top / scrollable.current));
          containerRef.current.style.transform =
            `translate3d(${-progress * maxTranslate.current}px,0,0)`;
        }
      }
      // Mobile — dwell then snap: 65% of each step is hold, 35% is the slide
      if (mobileSectionRef.current && mobileContainerRef.current) {
        const top = mobileSectionRef.current.getBoundingClientRect().top;
        const vh = window.innerHeight;
        const vw = window.innerWidth;
        const DWELL = 0.65 * vh;
        const TRANS = 0.35 * vh;
        const STEP  = DWELL + TRANS; // == 1.0 * vh, so section stays N×100dvh
        const mobileScrollable = (N - 1) * STEP;
        if (top <= 0 && top >= -mobileScrollable) {
          const s       = Math.max(0, Math.min(-top, mobileScrollable));
          const cardIdx = Math.min(Math.floor(s / STEP), N - 2);
          const within  = s - cardIdx * STEP;
          const raw     = Math.max(0, Math.min(1, (within - DWELL) / TRANS));
          // ease-in-out so the slide accelerates then settles
          const t       = raw < 0.5 ? 2 * raw * raw : -1 + (4 - 2 * raw) * raw;
          mobileContainerRef.current.style.transform =
            `translate3d(${-(cardIdx + t) * vw}px,0,0)`;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { cardWidth, gap, px, sectionVh } = layout;

  return (
    <div id="work" data-navbar-dark="true" className="bg-secondary text-secondary-foreground">

      {/* ── Mobile: scroll-driven sticky (< 768px) ── */}
      <section
        ref={mobileSectionRef}
        className="md:hidden relative"
        style={{ height: `${N * 100}dvh` }}
      >
        <div
          className="sticky top-0 overflow-hidden flex flex-col"
          style={{ height: "100dvh", transform: "translateZ(0)" }}
        >
          {/* Header */}
          <div className="px-6 pt-10 pb-5 flex-shrink-0">
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

          {/* Cards strip */}
          <div
            ref={mobileContainerRef}
            className="flex will-change-transform flex-1 min-h-0"
          >
            {capabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex-shrink-0 flex flex-col px-6 pb-10"
                style={{ width: "100vw" }}
              >
                <div className="flex-1 bg-white/5 rounded-[7px] mb-4 min-h-0" />
                <p className="text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1.5">
                  {cap.label}
                </p>
                <p className="text-[12px] leading-[1.65] text-white/35">
                  {cap.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
