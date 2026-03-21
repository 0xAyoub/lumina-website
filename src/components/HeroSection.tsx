import { useEffect, useRef, useState } from "react";

// The two text segments — line2Plain is regular, line2Italic is styled
const LINE1       = "Your next best-performing ad";
const LINE2_PLAIN = "doesn't need ";
const LINE2_ITALIC = "a camera.";
const FULL_LINE2  = LINE2_PLAIN + LINE2_ITALIC;

// Variable delay per character — simulates real typing rhythm
function charDelay(char: string, index: number): number {
  const base = 28 + Math.random() * 55;            // 28–83 ms baseline
  if (char === " ") return base + Math.random() * 35; // breath after space
  if (char === "." || char === "—") return base + Math.random() * 80; // pause at punctuation
  if (Math.random() < 0.06) return base + 120 + Math.random() * 100; // rare hesitation
  if (index % 4 === 0) return base * 0.65;          // occasional burst
  return base;
}

const HeroSection = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  const [t1, setT1] = useState("");          // typed chars of line 1
  const [t2, setT2] = useState("");          // typed chars of line 2
  const [cursor, setCursor] = useState(true); // blinking cursor visible
  const [ready, setReady] = useState(false);  // subtitle + buttons fade in

  // Typewriter effect
  useEffect(() => {
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = (i: number, j: number) => {
      if (cancelled) return;

      if (i < LINE1.length) {
        const next = i + 1;
        setT1(LINE1.slice(0, next));
        timeout = setTimeout(() => type(next, j), charDelay(LINE1[i], i));
      } else if (j < FULL_LINE2.length) {
        const next = j + 1;
        setT2(FULL_LINE2.slice(0, next));
        timeout = setTimeout(() => type(i, next), charDelay(FULL_LINE2[j], j));
      } else {
        // Done — hide cursor, reveal subtitle + buttons
        setTimeout(() => { if (!cancelled) setCursor(false); }, 600);
        setTimeout(() => { if (!cancelled) setReady(true); },  200);
      }
    };

    timeout = setTimeout(() => type(0, 0), 180);
    return () => { cancelled = true; clearTimeout(timeout); };
  }, []);

  // Cursor blink
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    if (!cursor) return;
    const id = setInterval(() => setBlink((v) => !v), 530);
    return () => clearInterval(id);
  }, [cursor]);

  // Orb parallax
  useEffect(() => {
    const onScroll = () => {
      if (orbRef.current)
        orbRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Split t2 into plain + italic portions
  const t2Plain  = t2.slice(0, Math.min(t2.length, LINE2_PLAIN.length));
  const t2Italic = t2.length > LINE2_PLAIN.length ? t2.slice(LINE2_PLAIN.length) : "";

  return (
    <section
      data-navbar-dark="true"
      className="relative h-screen flex flex-col justify-end pb-10 overflow-hidden bg-black"
    >
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero_video.mp4"
      />
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      <div
        ref={orbRef}
        className="absolute top-[20%] right-[5%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-primary opacity-15 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
        <h1 className="font-sans-display text-[24px] md:text-[38px] lg:text-[46px] leading-[1.0] tracking-[-0.026em] text-white mb-3">
          {/* Line 1 */}
          <span className="block min-h-[1.1em]">
            {t1}
            {cursor && t2 === "" && (
              <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
            )}
          </span>

          {/* Line 2 */}
          <span className="block min-h-[1.1em]">
            {t2Plain}
            {t2Italic && (
              <span className="font-serif-display italic">{t2Italic}</span>
            )}
            {cursor && t2 !== "" && (
              <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
            )}
          </span>
        </h1>

        {/* Subtitle + buttons — fade in after typing */}
        <div
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
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
              href="#contact"
              className="text-[11px] font-medium text-white/50 px-4 py-1.5 rounded-[6px] border border-white/20 transition-all duration-200 hover:text-white/80 hover:border-white/35 active:scale-[0.97]"
            >
              Book a call →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
