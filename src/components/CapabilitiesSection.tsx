import { useRef, useEffect, useState } from "react";

const capabilities = [
  {
    label: "Oura Ring Campaign",
    short: "Performance meets elegance. Shot by AI.",
    desc: "A woman. A run. A ring that knows more than she does. This spot captures the quiet intensity of the Oura Ring — motion, data, and body intelligence — without a crew, without a set, without a single wasted hour.",
    video: "/oura-ad.mp4",
    placeholder: null,
    aspect: "9:16" as const,
  },
  {
    label: "Jewelry Campaign",
    short: "Cartier-grade cinematics. Produced by AI.",
    desc: "This is the kind of ad a luxury jewelry brand spends $400K and 6 weeks to shoot. We produce the same result in 48 hours — no studio, no crew, no travel. Same visual language. Infinite scale.",
    video: "/jewelry-ad.mp4",
    placeholder: null,
    aspect: "16:9" as const,
  },
  {
    label: "Skincare Campaign",
    short: "Clean beauty. Shot by AI.",
    desc: "Minimalist Inc asked for a campaign that feels honest, textural, skin-close. No model. No studio. AI-directed light, real product, cinematic result — at a fraction of a traditional shoot.",
    video: "/skincare-ad.mp4",
    placeholder: null,
    aspect: "9:16" as const,
  },
  {
    label: "Impossible Videos",
    short: "Visuals no real set could ever capture.",
    desc: "Liquid metal. Gravity-defying product reveals. Microscopic textures expanding into cinematic landscapes. Every frame here is physically impossible to film — and we deliver them on demand.",
    video: "/bose-ad.mp4",
    placeholder: null,
    aspect: "16:9" as const,
  },
  { label: "Product Hero Shots", short: "Any environment. Any lighting. Any season. Photorealistic product visuals without a studio.", desc: null, video: null, placeholder: "Soon.", aspect: "9:16" as const },
  { label: "Lifestyle Scenes", short: "Morning routines, kitchen moments, workout contexts — your product in the world. All synthetic.", desc: null, video: null, placeholder: "Very soon.", aspect: "9:16" as const },
  { label: "High-Volume Variations", short: "One winning concept becomes 50 testable creatives. Different hooks, visuals, copy, CTAs. Included.", desc: null, video: null, placeholder: "Maybe tomorrow.", aspect: "9:16" as const },
  { label: "UGC-Style Content", short: "Hands-on-product, texture close-ups, authentic aesthetics. The UGC look — without the creator.", desc: null, video: null, placeholder: "Be indulgent,\nwe're early-stage.", aspect: "9:16" as const },
  { label: "Motion Graphics", short: "Ingredient breakdowns, brand films, benefit animations. Motion design at a fraction of studio cost.", desc: null, video: null, placeholder: "We're on it.\nProbably.", aspect: "9:16" as const },
];

function getLayout(vw: number) {
  if (vw < 1024) return { cardWidth: 240, gap: 12, px: 24, sectionVh: 300 };
  return             { cardWidth: 320, gap: 18, px: 60, sectionVh: 240 };
}

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
    if (!sectionRef.current || !containerRef.current) return;
    const { px } = layoutRef.current;
    maxTranslate.current = Math.max(0, containerRef.current.scrollWidth - window.innerWidth + px);
    scrollable.current   = sectionRef.current.offsetHeight - window.innerHeight;
  };

  useEffect(() => {
    // Delay first measure so 16:9 cards have rendered their derived widths
    const id = setTimeout(updateMetrics, 80);
    const onResize = () => {
      const next = getLayout(window.innerWidth);
      layoutRef.current = next;
      setLayout(next);
      requestAnimationFrame(updateMetrics);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => { clearTimeout(id); window.removeEventListener("resize", onResize); };
  }, []);

  useEffect(() => {
    const SCROLL_OFFSET = 80; // px into section before cards start moving
    const onScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      if (top <= 0 && top >= -scrollable.current) {
        const scrolled = -top;
        const progress = Math.max(0, Math.min(1,
          (scrolled - SCROLL_OFFSET) / Math.max(1, scrollable.current - SCROLL_OFFSET)
        ));
        containerRef.current.style.transform =
          `translate3d(${-progress * maxTranslate.current}px,0,0)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal !== null ? "hidden" : "";
    if (modal === null) setMuted(true);
    return () => { document.body.style.overflow = ""; };
  }, [modal]);

  const { cardWidth, gap, px, sectionVh } = layout;

  // ── Modal sizing ────────────────────────────────────────────────────
  // 9:16 → constrain height, width derives from ratio (capped for wide screens)
  // 16:9 → constrain to viewport with safe margins on both axes
  // p-4 modal padding (32px) + description bar (52px) + gap (12px) + buffer = 160px
  const R = "160px";
  const modalVideoStyle = (aspect: "9:16" | "16:9"): React.CSSProperties =>
    aspect === "16:9"
      ? {
          width: `min(92vw, calc((100dvh - ${R}) * 16 / 9))`,
          height: `min(calc(100dvh - ${R}), calc(92vw * 9 / 16))`,
          aspectRatio: "16/9",
        }
      : {
          height: `min(calc(100dvh - ${R}), calc(88vw * 16 / 9))`,
          width: `min(88vw, calc((100dvh - ${R}) * 9 / 16))`,
          aspectRatio: "9/16",
        };

  return (
    <>
      <div id="work" data-navbar-dark="true" className="bg-secondary text-secondary-foreground">

        {/* ── Mobile / tablet: 100dvh, horizontal scroll (< 768px) ── */}
        <div className="md:hidden flex flex-col" style={{ height: "100dvh" }}>
          <div className="flex-shrink-0 px-5 pt-10 pb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-2">
              What we produce
            </p>
            <h2 className="font-sans-display text-[19px] leading-[1.1] tracking-[-0.018em] text-white">
              Every frame.{" "}
              <span className="font-serif-display italic text-white/50">
                Indistinguishable from reality.
              </span>
            </h2>
          </div>

          <div
            className="no-scrollbar flex-1 min-h-0 overflow-x-auto overflow-y-hidden"
            style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            <div className="flex h-full px-5 pb-5 gap-3" style={{ width: "max-content" }}>
              {capabilities.map((cap, i) => (
                <div
                  key={cap.label}
                  className="flex-shrink-0 h-full flex flex-col cursor-pointer"
                  style={cap.aspect === "16:9" ? { aspectRatio: "16/9" } : { width: "68vw" }}
                  onClick={() => setModal(i)}
                >
                  <div className="flex-1 min-h-0 rounded-[10px] mb-2 overflow-hidden bg-white/5 relative">
                    {cap.video && (
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={cap.video}
                        onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }} />
                    )}
                    {!cap.video && cap.placeholder && (
                      <div className="absolute inset-0 flex items-center justify-center px-4">
                        <p className="text-[12px] text-white/20 text-center leading-[1.6] whitespace-pre-line">{cap.placeholder}</p>
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-[12px] font-medium tracking-[0.02em] text-white/70 mb-0.5">{cap.label}</p>
                  <p className="flex-shrink-0 text-[11px] leading-[1.55] text-white/35 line-clamp-2">{cap.short}</p>
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
                  href="/free"
                  className="flex-shrink-0 text-[11px] font-medium text-white/40 border border-white/15 px-4 py-2 rounded-[7px] transition-all duration-200 hover:text-white hover:border-white/30"
                >
                  Get a free sample →
                </a>
              </div>
            </div>

            <div
              ref={containerRef}
              className="flex-1 min-h-0 flex will-change-transform"
              style={{ gap: `${gap}px`, paddingLeft: `${px}px` }}
            >
              {capabilities.map((cap, i) => (
                <div
                  key={cap.label}
                  className="flex-shrink-0 h-full flex flex-col cursor-pointer group"
                  style={cap.aspect === "16:9" ? { aspectRatio: "16/9" } : { width: `${cardWidth}px` }}
                  onClick={() => setModal(i)}
                >
                  <div className="flex-1 min-h-0 rounded-[10px] overflow-hidden bg-white/5 relative mb-3">
                    {cap.video && (
                      <video autoPlay muted loop playsInline className="w-full h-full object-cover" src={cap.video}
                        onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }} />
                    )}
                    {!cap.video && cap.placeholder && (
                      <div className="absolute inset-0 flex items-center justify-center px-5">
                        <p className="text-[12px] text-white/20 text-center leading-[1.65] whitespace-pre-line">{cap.placeholder}</p>
                      </div>
                    )}
                    <div
                      className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                      </svg>
                    </div>
                  </div>
                  <p className="flex-shrink-0 text-[13px] font-medium tracking-[0.02em] text-white/70 mb-1">{cap.label}</p>
                  <p className="flex-shrink-0 text-[12px] leading-[1.6] text-white/35">{cap.short}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── Modal ── */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative flex flex-col items-start w-full"
            style={{ maxWidth: "fit-content" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Video */}
            <div
              className="relative rounded-[12px] overflow-hidden bg-black flex-shrink-0"
              style={modalVideoStyle(capabilities[modal].aspect)}
            >
              {capabilities[modal].video ? (
                <video
                  ref={videoRef}
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                  src={capabilities[modal].video!}
                  onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
                />
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center px-8">
                  {capabilities[modal].placeholder && (
                    <p className="text-[13px] text-white/25 text-center leading-[1.65] whitespace-pre-line">{capabilities[modal].placeholder}</p>
                  )}
                </div>
              )}

              {/* Close — top left */}
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                style={{ backgroundColor: "rgba(0,0,0,0.50)", backdropFilter: "blur(6px)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>

              {/* Sound — bottom right */}
              {capabilities[modal].video && (
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = !videoRef.current.muted;
                      setMuted(videoRef.current.muted);
                    }
                  }}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                  style={{ backgroundColor: "rgba(0,0,0,0.50)", backdropFilter: "blur(6px)" }}
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

            {/* Text left — CTA right */}
            <div className="flex items-center justify-between w-full mt-3 gap-6">
              <div className="min-w-0">
                <p className="text-white/85 text-[11px] font-medium tracking-[0.01em] mb-0.5 truncate">
                  {capabilities[modal].label}
                </p>
                <p className="text-white/35 text-[11px] leading-[1.5] line-clamp-1">
                  {capabilities[modal].short}
                </p>
              </div>
              <a
                href="/free"
                onClick={() => setModal(null)}
                className="flex-shrink-0 text-[11px] font-medium text-white/70 border border-white/20 px-4 py-2 rounded-[7px] transition-all duration-200 hover:text-white hover:border-white/40 whitespace-nowrap"
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
