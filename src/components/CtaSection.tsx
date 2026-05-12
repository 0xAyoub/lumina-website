import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <>
      {/* ── Desktop layout: 2-panel side-by-side, full height (md+) ── */}
      <section id="contact" className="hidden md:flex w-full" style={{ height: "70dvh" }}>

        {/* Left panel — 70vw, Get free creative, white background */}
        <div className="flex flex-col justify-between px-12 lg:px-20 pt-14 pb-12 bg-white" style={{ width: "70vw" }}>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-5">
              Free creative
            </p>
            <h2 className="font-sans-display text-[26px] lg:text-[42px] leading-[1.05] tracking-[-0.022em] text-black max-w-[580px]">
              Send us your product.
              <br />
              <span className="font-serif-display italic text-black/35">
                Get one ad. Free. 48 hours.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-[12px] leading-[1.7] text-black/35 mb-6 max-w-[400px]">
              Pick a product page. Tell us one thing you wish your ad was doing better. We ship a 15-to-60-second cinematic AI ad in 48 hours. Watermarked, yours to use. No call, no commitment.
            </p>
            <Link
              to="/free"
              className="inline-flex items-center gap-2 text-[12px] font-medium bg-black text-white px-7 py-3 rounded-[8px] transition-all duration-200 hover:opacity-75 active:scale-[0.98]"
            >
              Get my free ad →
            </Link>
          </div>
        </div>

        {/* Right panel — 30vw, Email the founder, blue background */}
        <div
          className="flex flex-col justify-between px-8 lg:px-12 pt-14 pb-12"
          style={{ width: "30vw", backgroundColor: "#C5D2F8" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.10em]" style={{ color: "#C5D2F8" }}>
            Or write directly
          </p>
          <div>
            <a
              href="mailto:ayoub@withluminalabs.com"
              className="group inline-flex items-start gap-2 transition-opacity duration-200 hover:opacity-60"
            >
              <span className="font-sans-display text-[16px] lg:text-[18px] tracking-[-0.015em] leading-[1.4] break-all" style={{ color: "rgba(17,17,17,0.85)" }}>
                ayoub@withluminalabs.com
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 mt-0.5" style={{ color: "rgba(17,17,17,0.35)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </a>
            <p className="text-[11px] mt-3 leading-[1.6]" style={{ color: "rgba(17,17,17,0.45)" }}>
              No sales team. No form. Just me.
            </p>
          </div>
        </div>

      </section>

      {/* ── Mobile layout ── */}
      <section id="contact" className="md:hidden">

        {/* First screen: Get free creative */}
        <div className="flex flex-col justify-between bg-white px-6 pt-12 pb-14" style={{ minHeight: "60dvh" }}>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-4">
              Free creative
            </p>
            <h2 className="font-sans-display text-[22px] leading-[1.08] tracking-[-0.022em] text-black mb-3">
              Send us your product.
              <br />
              <span className="font-serif-display italic text-black/35">
                Get one ad. Free. 48 hours.
              </span>
            </h2>
            <p className="text-[12px] leading-[1.65] text-black/35 mb-8">
              Pick a product page. Tell us one thing you wish your ad was doing better. We ship in 48 hours. No call, no commitment.
            </p>
          </div>
          <Link
            to="/free"
            className="inline-flex items-center gap-2 text-[12px] font-medium bg-black text-white px-7 py-3.5 rounded-[8px] transition-all duration-200 hover:opacity-75 active:scale-[0.98] self-start"
          >
            Get my free ad →
          </Link>
        </div>

        {/* Second screen: Email the founder */}
        <div className="flex flex-col justify-between px-6 pt-10 pb-14" style={{ minHeight: "44dvh", backgroundColor: "#C5D2F8" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-8" style={{ color: "#C5D2F8" }}>
            Or write directly
          </p>
          <div>
            <a
              href="mailto:ayoub@withluminalabs.com"
              className="group inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
            >
              <span className="font-sans-display text-[16px] tracking-[-0.015em]" style={{ color: "rgba(17,17,17,0.85)" }}>
                ayoub@withluminalabs.com
              </span>
              <span className="transition-transform duration-300 group-hover:translate-x-1" style={{ color: "rgba(17,17,17,0.35)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </a>
            <p className="text-[11px] mt-3 leading-[1.6]" style={{ color: "rgba(17,17,17,0.45)" }}>
              No sales team. No form. Just me.
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default CtaSection;
