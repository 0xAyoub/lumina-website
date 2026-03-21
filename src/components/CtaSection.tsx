const CtaSection = () => {
  return (
    <>
      {/* ── Desktop layout: 3-panel side-by-side (md+) ── */}
      <section className="hidden md:flex w-full" style={{ height: "100dvh" }}>

        {/* Left column — 70vw, two stacked panels */}
        <div className="flex flex-col" style={{ width: "70vw" }}>

          {/* Top panel — Book a call, white background */}
          <div
            className="flex-1 flex flex-col justify-between px-12 lg:px-20 pt-14 pb-10 bg-white relative overflow-hidden"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
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
                <span className="text-[11px] font-medium text-black/50 tracking-[0.02em]">
                  Pick a time on the right
                </span>
                <svg
                  width="60" height="14" viewBox="0 0 60 14" fill="none"
                  className="text-black/25"
                >
                  <path
                    d="M0 7h55m0 0-5.5-5.5M55 7l-5.5 5.5"
                    stroke="currentColor" strokeWidth="1.2"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
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

        {/* Right column — 30vw, full height, Cal.com embed */}
        <div
          className="relative bg-white overflow-hidden flex-1"
          style={{ borderLeft: "1px solid rgba(0,0,0,0.07)" }}
        >
          <iframe
            src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=light&layout=month_view"
            className="w-full h-full"
            frameBorder="0"
            title="Book a 15-min Creative Sprint Intro"
            allow="payment"
          />
        </div>

      </section>

      {/* ── Mobile layout: stacked ── */}
      <section className="md:hidden bg-white">

        {/* Book a call */}
        <div className="px-6 pt-14 pb-10" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-5">
            Book a call
          </p>
          <h2 className="font-sans-display text-[22px] leading-[1.08] tracking-[-0.022em] text-black mb-4">
            50 new ads this month.
            <br />
            <span className="font-serif-display italic text-black/35">
              You're still waiting on one shoot.
            </span>
          </h2>
          <p className="text-[12px] leading-[1.7] text-black/35 mb-6 max-w-[340px]">
            15-minute intro. We review your creative, identify the gap, show you what AI production can do.
          </p>
          <p className="text-[11px] font-medium text-black/40 mb-1">Pick a time below ↓</p>
        </div>

        {/* Cal.com embed */}
        <div className="w-full bg-white" style={{ height: "600px" }}>
          <iframe
            src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=light&layout=month_view"
            className="w-full h-full"
            frameBorder="0"
            title="Book a 15-min Creative Sprint Intro"
            allow="payment"
          />
        </div>

        {/* Email the founder */}
        <div className="px-6 pt-10 pb-14 bg-[#111]">
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/25 mb-6">
            Or write directly
          </p>
          <a
            href="mailto:ayoub@withluminalabs.com"
            className="group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-60"
          >
            <span className="font-sans-display text-[18px] tracking-[-0.018em] text-white">
              ayoub@withluminalabs.com
            </span>
            <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </span>
          </a>
          <p className="text-[11px] text-white/25 mt-3 leading-[1.6]">
            No sales team, no form. Write directly.
          </p>
        </div>

      </section>
    </>
  );
};

export default CtaSection;
