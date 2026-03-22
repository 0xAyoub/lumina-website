import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <>
      {/* ── Desktop layout: 2-panel stacked, full height (md+) ── */}
      <section id="contact" className="hidden md:flex w-full flex-col" style={{ height: "100dvh" }}>

        {/* Top panel — Get free creative, white background */}
        <div className="flex-1 flex flex-col justify-between px-12 lg:px-20 pt-14 pb-10 bg-white">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-5">
              Free creative
            </p>
            <h2 className="font-sans-display text-[26px] lg:text-[38px] leading-[1.05] tracking-[-0.022em] text-black max-w-[560px]">
              Get one mind-blowing ad.
              <br />
              <span className="font-serif-display italic text-black/35">
                For $0. No commitment.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-[12px] leading-[1.7] text-black/35 mb-6 max-w-[380px]">
              Tell us about your brand and what you want. We'll produce one cinematic AI creative — free, delivered in 48 hours.
            </p>
            <Link
              to="/free"
              className="inline-flex items-center gap-2 text-[12px] font-medium bg-black text-white px-7 py-3 rounded-[8px] transition-all duration-200 hover:opacity-75 active:scale-[0.98]"
            >
              Get my free creative →
            </Link>
          </div>
        </div>

        {/* Bottom panel — Email the founder, dark background */}
        <div
          className="flex-1 flex flex-col justify-between px-12 lg:px-20 pt-10 pb-12 bg-[#111]"
          style={{ borderTopRightRadius: "12px" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/25">
            Or write directly
          </p>
          <div>
            <a
              href="mailto:ayoub@withluminalabs.com"
              className="group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-60"
            >
              <span className="font-sans-display text-[20px] lg:text-[28px] tracking-[-0.018em] text-white">
                ayoub@withluminalabs.com
              </span>
              <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </a>
            <p className="text-[11px] text-white/25 mt-3 leading-[1.6] max-w-[360px]">
              Have a project in mind? A question about pricing? Write directly — no sales team, no form.
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
              Get one mind-blowing ad.
              <br />
              <span className="font-serif-display italic text-black/35">
                For $0. No commitment.
              </span>
            </h2>
            <p className="text-[12px] leading-[1.65] text-black/35 mb-8">
              One cinematic AI creative — free, delivered in 48 hours.
            </p>
          </div>
          <Link
            to="/free"
            className="inline-flex items-center gap-2 text-[12px] font-medium bg-black text-white px-7 py-3.5 rounded-[8px] transition-all duration-200 hover:opacity-75 active:scale-[0.98] self-start"
          >
            Get my free creative →
          </Link>
        </div>

        {/* Second screen: Email the founder */}
        <div className="flex flex-col justify-between px-6 pt-10 pb-14 bg-[#111]" style={{ minHeight: "44dvh" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/25 mb-8">
            Or write directly
          </p>
          <div>
            <a
              href="mailto:ayoub@withluminalabs.com"
              className="group inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-60"
            >
              <span className="font-sans-display text-[16px] tracking-[-0.015em] text-white">
                ayoub@withluminalabs.com
              </span>
              <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </span>
            </a>
            <p className="text-[11px] text-white/25 mt-3 leading-[1.6]">
              No sales team, no form. Write directly.
            </p>
          </div>
        </div>

      </section>
    </>
  );
};

export default CtaSection;
