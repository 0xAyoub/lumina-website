import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pieces = [
  {
    label: "Oura Ring — Spec",
    category: "Wearable · 9:16",
    desc: "Hook, pacing, and color grade edited to feel filmed. No crew, no set, no delay.",
    video: "/oura-ad.mp4",
    format: "9:16",
  },
  {
    label: "Jewelry — Campaign",
    category: "Luxury · 16:9",
    desc: "The visual language of a €400K campaign. Delivered in 48 hours.",
    video: "/jewelry-ad.mp4",
    format: "16:9",
  },
  {
    label: "Nara Baby — Spec",
    category: "Baby / Nutrition · 9:16",
    desc: "No voiceover. No founder. The ingredient label closes the sale.",
    video: "/nara-ad.mp4",
    format: "9:16",
  },
  {
    label: "Skincare — Campaign",
    category: "Beauty · 9:16",
    desc: "Honest, textural, skin-close. Nothing that could run for another brand.",
    video: "/skincare-ad.mp4",
    format: "9:16",
  },
  {
    label: "Impossible Shots",
    category: "Demo · 16:9",
    desc: "Shots no production budget can film. The format choice is the differentiation.",
    video: "/bose-ad.mp4",
    format: "16:9",
  },
];

const Work = () => {
  const [modal, setModal] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Header */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
            Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-sans-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em]" style={{ color: "#111111" }}>
              What we deliver.{" "}
              <span className="font-serif-display italic">Click to watch.</span>
            </h1>
            <p className="text-[13px] leading-[1.7] md:text-right md:max-w-[260px]" style={{ color: "rgba(17,17,17,0.45)" }}>
              Spec work and client campaigns. Edited for conversion, not awards.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {pieces.map((p, i) => (
              <div key={p.label} className={p.format === "16:9" && i === 1 ? "md:col-span-2" : ""}>
                <button
                  className="w-full text-left group"
                  onClick={() => { setModal(i); setMuted(true); }}
                >
                  <div
                    className="relative overflow-hidden mb-4 w-full"
                    style={{
                      aspectRatio: p.format === "16:9" ? "16/9" : "9/16",
                      maxHeight: p.format === "9:16" ? "520px" : "none",
                      backgroundColor: "rgba(0,0,0,0.05)",
                    }}
                  >
                    <video
                      autoPlay muted loop playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      src={p.video}
                      onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
                      <span className="text-white text-[11px] font-medium tracking-[0.06em] uppercase">Watch</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[14px] font-medium mb-1" style={{ color: "#111111" }}>{p.label}</p>
                      <p className="text-[12px] leading-[1.6]" style={{ color: "rgba(17,17,17,0.45)", maxWidth: "400px" }}>{p.desc}</p>
                    </div>
                    <span className="flex-shrink-0 text-[10px] uppercase tracking-[0.08em] pt-0.5 text-right" style={{ color: "rgba(17,17,17,0.30)" }}>
                      {p.category}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-sans-display text-[22px] md:text-[32px] leading-[1.1] tracking-[-0.02em] mb-2" style={{ color: "#111111" }}>
                Want one for your brand?
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                First ad free. Delivered in 48 hours. No call, no commitment.
              </p>
            </div>
            <Link
              to="/free"
              className="inline-flex text-[12px] font-medium px-7 py-3.5 bg-black text-white transition-opacity hover:opacity-75 flex-shrink-0"
            >
              Get my free ad →
            </Link>
          </div>
        </div>

      </main>

      {/* Modal */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full"
            style={{ maxWidth: pieces[modal].format === "16:9" ? "900px" : "400px" }}
            onClick={e => e.stopPropagation()}
          >
            <div
              className="relative overflow-hidden bg-black"
              style={{ aspectRatio: pieces[modal].format === "16:9" ? "16/9" : "9/16" }}
            >
              <video
                autoPlay muted={muted} loop playsInline
                className="w-full h-full object-cover"
                src={pieces[modal].video}
                onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
              />
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center hover:opacity-70"
                style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)" }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12"/>
                </svg>
              </button>
              <button
                onClick={() => setMuted(v => !v)}
                className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center hover:opacity-70"
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
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-white text-[12px] font-medium">{pieces[modal].label}</p>
              <Link
                to="/free"
                onClick={() => setModal(null)}
                className="text-[11px] font-medium px-4 py-2 text-white hover:opacity-70 transition-opacity"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Get one like this →
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Work;
