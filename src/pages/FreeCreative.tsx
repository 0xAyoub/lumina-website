import { Link } from "react-router-dom";

const FreeCreative = () => {
  return (
    <div className="h-[100dvh] bg-white flex flex-col overflow-hidden">

      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center px-6 md:px-10 pt-5 pb-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] text-black/35 hover:text-black/70 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5m0 0 7-7m-7 7 7 7"/>
          </svg>
          Back
        </Link>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row">

        {/* Left — copy */}
        <div className="flex-shrink-0 md:w-[42%] flex flex-col justify-center px-6 md:px-10 lg:px-16 pb-6 md:pb-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-black/30 mb-4">
            Free creative
          </p>
          <h1 className="font-sans-display text-[26px] md:text-[32px] lg:text-[38px] leading-[1.06] tracking-[-0.022em] text-black mb-3 max-w-[400px]">
            Book a 15-min call.<br />
            <span className="font-serif-display italic text-black/35">
              We ship your first ad free.
            </span>
          </h1>
          <p className="text-[13px] leading-[1.7] text-black/40 max-w-[320px] mb-8">
            Pick a slot. We'll walk through your brand live and deliver one cinematic AI creative within 48 hours — no credit card, no commitment.
          </p>

          <div className="flex flex-col gap-2.5">
            {[
              "48h delivery, every time.",
              "Watermarked, yours to keep.",
              "No sales team. No form. Just results.",
            ].map((line) => (
              <div key={line} className="flex items-center gap-2.5">
                <span className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0" />
                <p className="text-[12px] text-black/45">{line}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-black/[0.06] my-6" />

        {/* Right — cal.com */}
        <div className="flex-1 min-h-0 overflow-hidden px-0 md:px-0">
          <iframe
            src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=light&layout=month_view&hideBranding=1&hide_event_type_details=1"
            className="w-full h-full"
            style={{ border: "none", display: "block" }}
            title="Book a call"
            allow="payment"
          />
        </div>

      </div>
    </div>
  );
};

export default FreeCreative;
