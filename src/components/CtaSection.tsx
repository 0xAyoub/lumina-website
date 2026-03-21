const CtaSection = () => {
  return (
    <>
      {/* ── Desktop layout: 3-panel side-by-side (md+) ── */}
      <section className="hidden md:flex w-full" style={{ height: "100dvh" }}>

        {/* Left column — 70vw, two stacked panels */}
        <div className="flex flex-col" style={{ width: "70vw" }}>

          {/* Top panel — Book a call, white background */}
          <div
            className="flex-1 flex flex-col justify-between px-12 lg:px-20 pt-14 pb-10 bg-white"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-5">
                Book a call
              </p>
              <h2 className="font-sans-display text-[26px] lg:text-[34px] leading-[1.08] tracking-[-0.022em] text-black max-w-[460px]">
                50 new ads this month.
                <br />
                <span className="font-serif-display italic text-black/35">
                  You're still waiting on one shoot.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[12px] leading-[1.7] text-black/35 mb-6 max-w-[340px]">
                15-minute intro call. We look at your current creative, identify
                the gap, and show you what AI production can do for your brand.
                Free, no commitment.
              </p>

              {/* Arrow cue pointing toward the cal panel */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium text-black/40 tracking-[0.02em]">
                  Pick a time on the right
                </span>
                <svg width="52" height="12" viewBox="0 0 52 12" fill="none" className="text-black/20">
                  <path d="M0 6h47m0 0-4.5-4.5M47 6l-4.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom panel — Email the founder, dark background */}
          <div className="flex-1 flex flex-col justify-between px-12 lg:px-20 pt-10 pb-12 bg-[#111]">
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
        </div>

        {/* Right column — 30vw, full height, Cal.com embed with inset margins */}
        <div
          className="flex-1 bg-white p-5 lg:p-7"
        >
          <div className="w-full h-full rounded-[14px] overflow-hidden bg-white border border-black/[0.06] shadow-[0_2px_24px_rgba(0,0,0,0.05)]">
            <iframe
              src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=light&layout=month_view"
              className="w-full h-full"
              frameBorder="0"
              title="Book a 15-min Creative Sprint Intro"
              allow="payment"
            />
          </div>
        </div>

      </section>

      {/* ── Mobile layout ── */}
      <section className="md:hidden">

        {/* First screen: Book a call + cal.com embed */}
        <div className="flex flex-col bg-white" style={{ height: "100dvh" }}>
          {/* Header copy */}
          <div className="flex-shrink-0 px-6 pt-12 pb-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-4">
              Book a call
            </p>
            <h2 className="font-sans-display text-[21px] leading-[1.08] tracking-[-0.022em] text-black mb-3">
              50 new ads this month.
              <br />
              <span className="font-serif-display italic text-black/35">
                You're still waiting on one shoot.
              </span>
            </h2>
            <p className="text-[12px] leading-[1.65] text-black/35 mb-3">
              15-min intro. Free, no commitment.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-black/35">Pick a slot below</span>
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="text-black/20">
                <path d="M0 5h14m0 0-3.5-3.5M14 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Cal.com iframe fills remaining height */}
          <div className="flex-1 min-h-0 p-4">
            <div className="w-full h-full rounded-[12px] overflow-hidden bg-white border border-black/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <iframe
                src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=light&layout=month_view"
                className="w-full h-full"
                frameBorder="0"
                title="Book a 15-min Creative Sprint Intro"
                allow="payment"
              />
            </div>
          </div>
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
