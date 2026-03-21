import { useRef, useEffect, useState } from "react";

const capabilities = [
  { label: "Cinematic Video Ads", short: "30-second spots. RED camera quality. Narrative-driven, platform-optimized. Produced in hours, not weeks.", video: "/video1.mp4", desc: "Minimalist — Squalane Serum" },
  { label: "Product Hero Shots", short: "Any environment. Any lighting. Any season. Photorealistic product visuals without a studio.", video: null, desc: null },
  { label: "Lifestyle Scenes", short: "Morning routines, kitchen moments, workout contexts — your product in the world. All synthetic.", video: null, desc: null },
  { label: "High-Volume Variations", short: "One winning concept becomes 50 testable creatives. Different hooks, visuals, copy, CTAs. Included.", video: null, desc: null },
  { label: "UGC-Style Content", short: "Hands-on-product, texture close-ups, authentic aesthetics. The UGC look — without the creator.", video: null, desc: null },
  { label: "Motion Graphics", short: "Ingredient breakdowns, brand films, benefit animations. Motion design at a fraction of studio cost.", video: null, desc: null },
];

function getLayout(vw: number) {
  if (vw < 1024) return { cardWidth: 260, gap: 14, px: 40, sectionVh: 300 };
  return             { cardWidth: 320, gap: 18, px: 60, sectionVh: 240 };
}

const N = capabilities.length;

const CapabilitiesSection = () => {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutRef    = useRef(getLayout(typeof window !== "undefined" ? window.innerWidth : 1440));
  const maxTranslate = useRef(0);
  const scrollable   = useRef(0);

  const [layout, setLayout] = useState(layoutRef.current);
  const [modal, setModal]   = useState<number | null>(null);
  const [muted, setMuted]   = useState(true);
  const videoRef            = useRef<HTMLVideoElement>(null);

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

  // Lock body scroll when modal open; reset mute on close
  useEffect(() => {
    document.body.style.overflow = modal !== null ? "hidden" : "";
    if (modal === null) setMuted(true);
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  const { cardWidth, gap, px, sectionVh } = layout;

  return (
    <>
      <div id="work" data-navbar-dark="true" className="bg-secondary text-secondary-foreground">

        {/* ── Mobile: 100dvh, tall cards, native horizontal scroll (< 768px) ── */}
        <div className="md:hidden flex flex-col" style={{ height: "100dvh" }}>
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

          <div
            className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden"
            style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            <style>{`.cap-mobile::-webkit-scrollbar{display:none}`}</style>
            <div className="cap-mobile flex h-full px-6 pb-6 gap-3">
              {capabilities.map((cap, i) => (
                <div
                  key={cap.label}
                  className="flex-shrink-0 w-[72vw] flex flex-col cursor-pointer"
                  onClick={() => setModal(i)}
                >
                  <div className="flex-1 min-h-0 rounded-[10px] mb-3 overflow-hidden bg-white/5 relative">
                    {cap.video && (
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={cap.video} onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }} />
                    )}
                    {/* Expand icon */}
                    <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1">{cap.label}</p>
                  <p className="text-[12px] leading-[1.65] text-white/35">{cap.short}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Desktop: sticky scroll-driven, full-height cards (768px+) ── */}
        <section
          ref={sectionRef}
          className="hidden md:block relative"
          style={{ height: `${sectionVh}vh` }}
        >
          <div
            className="sticky top-0 flex flex-col overflow-hidden"
            style={{ height: "100dvh", transform: "translateZ(0)", paddingTop: "48px", paddingBottom: "32px" }}
          >
            {/* Header */}
            <div className="flex-shrink-0 mb-6" style={{ paddingLeft: px, paddingRight: px }}>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-3">
                What we produce
              </p>
              <div className="flex items-end justify-between gap-6">
                <h2 className="font-sans-display text-[28px] md:text-[32px] lg:text-[34px] leading-[1.1] tracking-[-0.018em] text-white">
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

            {/* Cards strip — fills remaining height */}
            <div
              ref={containerRef}
              className="flex-1 min-h-0 flex will-change-transform"
              style={{ gap: `${gap}px`, paddingLeft: `${px}px` }}
            >
              {capabilities.map((cap, i) => (
                <div
                  key={cap.label}
                  className="flex-shrink-0 h-full flex flex-col cursor-pointer group"
                  style={{ width: `${cardWidth}px` }}
                  onClick={() => setModal(i)}
                >
                  {/* Image / video — fills card height */}
                  <div className="flex-1 min-h-0 rounded-[10px] overflow-hidden bg-white/5 relative mb-3">
                    {cap.video && (
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={cap.video} onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }} />
                    )}
                    {/* Expand icon overlay */}
                    <div
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>

                  <p className="flex-shrink-0 text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1">
                    {cap.label}
                  </p>
                  <p className="flex-shrink-0 text-[12px] leading-[1.6] text-white/35">
                    {cap.short}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Modal ── */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative flex flex-col items-start"
            onClick={e => e.stopPropagation()}
          >
            {/* 9:16 video container */}
            <div
              className="relative rounded-[14px] overflow-hidden bg-black flex-shrink-0"
              style={{ height: "calc(100dvh - 140px)", aspectRatio: "9/16" }}
            >
              {capabilities[modal].video ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted={muted}
                  loop playsInline
                  className="w-full h-full object-cover"
                  src={capabilities[modal].video!}
                  onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
                />
              ) : (
                <div className="w-full h-full bg-white/5" />
              )}

              {/* Close button */}
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-150 hover:opacity-70"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Sound toggle */}
              {capabilities[modal].video && (
                <button
                  onClick={() => setMuted(v => !v)}
                  className="absolute bottom-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-150 hover:opacity-70"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
                >
                  {muted ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
                    </svg>
                  ) : (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                    </svg>
                  )}
                </button>
              )}
            </div>

            {/* Description + CTA below video, left-aligned */}
            <div className="flex items-end justify-between w-full mt-3 gap-6">
              <div>
                <p className="text-white/90 text-[11px] font-medium tracking-[0.01em] mb-0.5">
                  {capabilities[modal].label}
                </p>
                <p className="text-white/35 text-[11px] leading-[1.5]">
                  {capabilities[modal].desc ?? capabilities[modal].short}
                </p>
              </div>
              <a
                href="#contact"
                onClick={() => setModal(null)}
                className="flex-shrink-0 text-[11px] font-medium text-white/70 border border-white/20 px-4 py-2 rounded-[7px] transition-all duration-200 hover:text-white hover:border-white/40"
              >
                Book a call →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CapabilitiesSection;
