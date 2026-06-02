import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const works = [
  {
    label: "Oura Ring — Spec",
    desc: "A woman mid-run. A glance at the ring. The moment the data changes how she trains.",
    video: "/oura-ad.mp4",
    aspect: "9:16" as const,
  },
  {
    label: "Jewelry — Campaign",
    desc: "The visual language of a €400K campaign. Delivered in 48 hours.",
    video: "/jewelry-ad.mp4",
    aspect: "16:9" as const,
  },
  {
    label: "Nara Baby — Spec",
    desc: "No voiceover. No founder. The ingredient label closes the sale.",
    video: "/nara-ad.mp4",
    aspect: "9:16" as const,
  },
];

const stats = [
  { value: "48h", label: "First creative delivered" },
  { value: "30", label: "Ads per month on retainer" },
  { value: "Weekly", label: "Fresh creative in-market" },
  { value: "€0", label: "To see the first result" },
];

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <HeroSection />

        {/* ── Stats ── */}
        <section className="bg-white py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="flex flex-wrap justify-between gap-8 md:gap-4">
              {stats.map((s, i) => (
                <div key={s.label} className="reveal" data-delay={String(i * 60)}>
                  <p className="font-sans-display text-[32px] md:text-[44px] leading-none tracking-[-0.03em]" style={{ color: "#111111" }}>
                    {s.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.10em] mt-1.5" style={{ color: "rgba(17,17,17,0.38)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected Work ── */}
        <section id="work" className="bg-white py-16 md:py-24">
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="flex items-end justify-between mb-10 md:mb-14">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3" style={{ color: "rgba(17,17,17,0.35)" }}>
                  Selected work
                </p>
                <h2 className="font-sans-display text-[26px] md:text-[38px] leading-[1.08] tracking-[-0.022em]" style={{ color: "#111111" }}>
                  The edit{" "}
                  <span className="font-serif-display italic">is the work.</span>
                </h2>
              </div>
              <Link
                to="/work"
                className="hidden md:inline-flex text-[11px] font-medium transition-opacity hover:opacity-60 flex-shrink-0"
                style={{ color: "rgba(17,17,17,0.50)" }}
              >
                View all work →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {works.map((w, i) => (
                <div key={w.label} className="reveal group" data-delay={String(i * 80)}>
                  <div
                    className="relative overflow-hidden mb-3"
                    style={{
                      aspectRatio: w.aspect === "16:9" ? "16/9" : "9/16",
                      backgroundColor: "rgba(0,0,0,0.06)",
                    }}
                  >
                    <video
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover"
                      src={w.video}
                      onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
                    />
                  </div>
                  <p className="text-[13px] font-medium mb-0.5" style={{ color: "#111111" }}>{w.label}</p>
                  <p className="text-[12px]" style={{ color: "rgba(17,17,17,0.45)" }}>{w.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <Link
                to="/work"
                className="text-[11px] font-medium"
                style={{ color: "rgba(17,17,17,0.50)" }}
              >
                View all work →
              </Link>
            </div>
          </div>
        </section>

        {/* ── What we do ── */}
        <section className="bg-white py-16 md:py-24" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div className="reveal">
                <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
                  The service
                </p>
                <h2 className="font-sans-display text-[26px] md:text-[36px] leading-[1.08] tracking-[-0.02em] mb-6" style={{ color: "#111111" }}>
                  A creative studio.{" "}
                  <span className="font-serif-display italic">Not a tool.</span>
                </h2>
                <p className="text-[14px] leading-[1.75] mb-8" style={{ color: "rgba(17,17,17,0.50)" }}>
                  We produce 30 performance ads a month — hooks, comparisons, problem-agitation, product close-ups, impossible-to-film shots. Every format your buyer scrolls, every ratio. Edited for conversion, delivered in days.
                </p>
                <Link
                  to="/process"
                  className="text-[11px] font-medium transition-opacity hover:opacity-60"
                  style={{ color: "rgba(17,17,17,0.55)" }}
                >
                  See how we work →
                </Link>
              </div>

              <div className="reveal" data-delay="80">
                <div className="flex flex-col gap-px" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                  {[
                    { step: "01", text: "Send your product page. Get one finished ad free in 48h." },
                    { step: "02", text: "Pilot: a batch of ads, one-off, no commitment." },
                    { step: "03", text: "Retainer: from €1,500/mo. 30 ads. Cancel anytime." },
                    { step: "04", text: "The loop: every fatigued ad briefs the next one." },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-5 py-5"
                      style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      <span className="text-[11px] font-medium flex-shrink-0 pt-0.5" style={{ color: "rgba(17,17,17,0.30)", width: "24px" }}>
                        {item.step}
                      </span>
                      <p className="text-[14px] leading-[1.6]" style={{ color: "#111111" }}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/pricing"
                  className="inline-flex text-[11px] font-medium mt-6 transition-opacity hover:opacity-60"
                  style={{ color: "rgba(17,17,17,0.55)" }}
                >
                  View pricing →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaSection />

      </main>
      <Footer />
    </>
  );
};

export default Index;
