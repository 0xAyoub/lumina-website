import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const workPreview = [
  {
    num: "01",
    label: "Oura Ring",
    category: "Wearable · 9:16",
    desc: "Hook, pacing, and color grade edited to feel filmed. No crew, no set, no delay.",
    video: "/oura-ad.mp4",
  },
  {
    num: "02",
    label: "Jewelry Campaign",
    category: "Luxury · 16:9",
    desc: "The visual language of a €400K campaign. Delivered in 48 hours.",
    video: "/jewelry-ad.mp4",
  },
  {
    num: "03",
    label: "Nara Baby",
    category: "Baby / Nutrition · 9:16",
    desc: "No voiceover. No founder. The ingredient label closes the sale.",
    video: "/nara-ad.mp4",
  },
];

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Hero */}
        <section
          className="flex flex-col justify-end px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pb-24"
          style={{ minHeight: "100dvh", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10 reveal" style={{ color: "rgba(17,17,17,0.35)" }}>
            Creative Production Studio
          </p>
          <h1
            className="font-serif-display leading-[0.95] tracking-[-0.03em] mb-12 reveal"
            style={{
              fontSize: "clamp(48px, 9vw, 120px)",
              color: "#111111",
              fontWeight: 300,
              maxWidth: "1100px",
            }}
          >
            We make ads that<br />stop the scroll.
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 reveal" data-delay="100">
            <p className="text-[14px] leading-[1.7] max-w-[380px]" style={{ color: "rgba(17,17,17,0.45)" }}>
              AI generation at scale. Post-production that converts. A weekly batch, fresh every Friday.
            </p>
            <Link
              to="/work"
              className="text-[12px] font-medium transition-opacity hover:opacity-60 flex-shrink-0"
              style={{ color: "rgba(17,17,17,0.45)" }}
            >
              View our work →
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section className="w-full" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div
            className="px-6 md:px-12 lg:px-20 py-10 md:py-14 flex items-center justify-between"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] reveal" style={{ color: "rgba(17,17,17,0.35)" }}>
              Selected Work
            </p>
            <Link
              to="/work"
              className="text-[12px] transition-opacity hover:opacity-60 reveal"
              style={{ color: "rgba(17,17,17,0.40)" }}
            >
              All productions →
            </Link>
          </div>
          {workPreview.map((p, i) => (
            <Link
              key={p.label}
              to="/work"
              className="group block px-6 md:px-12 lg:px-20 py-10 md:py-14 reveal"
              data-delay={String(i * 60)}
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
                <span
                  className="font-sans-display text-[13px] tabular-nums flex-shrink-0"
                  style={{ color: "rgba(17,17,17,0.25)", minWidth: "28px" }}
                >
                  {p.num}
                </span>
                <div
                  className="flex-shrink-0 relative overflow-hidden hidden md:block"
                  style={{
                    width: "160px",
                    aspectRatio: "16/9",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  }}
                >
                  <video
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover"
                    src={p.video}
                    onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-sans-display text-[20px] md:text-[28px] leading-[1.1] tracking-[-0.015em] mb-2 group-hover:opacity-50 transition-opacity duration-200"
                    style={{ color: "#111111" }}
                  >
                    {p.label}
                  </p>
                  <p className="text-[13px] leading-[1.7]" style={{ color: "rgba(17,17,17,0.45)" }}>
                    {p.desc}
                  </p>
                </div>
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.08em] flex-shrink-0 hidden md:block"
                  style={{ color: "rgba(17,17,17,0.25)" }}
                >
                  {p.category}
                </span>
                <span
                  className="text-[13px] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1 transform flex-shrink-0 hidden md:block"
                  style={{ color: "rgba(17,17,17,0.40)" }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* Studio Statement */}
        <section
          className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-32"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
        >
          <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-24 items-start">
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] reveal" style={{ color: "rgba(17,17,17,0.35)" }}>
              The studio
            </p>
            <div>
              <p
                className="font-serif-display leading-[1.3] tracking-[-0.018em] mb-8 max-w-[720px] reveal"
                style={{
                  fontSize: "clamp(20px, 3vw, 36px)",
                  color: "#111111",
                  fontWeight: 300,
                }}
              >
                Generation is now accessible to anyone. The differentiator is what happens in post: the judgment, the taste, the curation that turns raw footage into something that converts.
              </p>
              <p
                className="text-[14px] leading-[1.85] max-w-[560px] mb-10 reveal"
                data-delay="60"
                style={{ color: "rgba(17,17,17,0.50)" }}
              >
                Lumina sits between the AI models and your brand. We brief the creative, direct the generation, and edit every frame to perform. The result: a fresh batch of ads every Friday, built to win attention and drive purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 reveal" data-delay="120">
                <Link
                  to="/about"
                  className="text-[12px] transition-opacity hover:opacity-60"
                  style={{ color: "rgba(17,17,17,0.45)" }}
                >
                  About the studio →
                </Link>
                <Link
                  to="/process"
                  className="text-[12px] transition-opacity hover:opacity-60"
                  style={{ color: "rgba(17,17,17,0.45)" }}
                >
                  How we work →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-24 items-start">
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] reveal" style={{ color: "rgba(17,17,17,0.35)" }}>
              New work
            </p>
            <div>
              <h2
                className="font-serif-display leading-[1.15] tracking-[-0.025em] mb-8 reveal"
                style={{
                  fontSize: "clamp(26px, 4vw, 48px)",
                  color: "#111111",
                  fontWeight: 300,
                }}
              >
                Start with a free ad.{" "}
                <span className="italic" style={{ color: "rgba(17,17,17,0.35)" }}>
                  See before you commit.
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 items-start reveal" data-delay="60">
                <Link
                  to="/free"
                  className="inline-flex text-[12px] font-medium px-7 py-3.5 bg-black text-white transition-opacity hover:opacity-75"
                >
                  Get my free ad →
                </Link>
                <a
                  href="mailto:ayoub@withluminalabs.com"
                  className="inline-flex items-center text-[12px] self-center transition-opacity hover:opacity-60"
                  style={{ color: "rgba(17,17,17,0.40)" }}
                >
                  ayoub@withluminalabs.com →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default Index;
