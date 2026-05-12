import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "The free ad",
    body: "Send your product page and one ad you wish was working. We ship a cinematic AI ad in 48 hours. Watermarked, yours to use. No call, no commitment.",
    cta: "Get my free ad",
  },
  {
    num: "02",
    title: "The pilot",
    body: "€2,500 flat. 15 ads in 14 days. 4 creative directions, approved before we ship. No retainer, no contract.",
    cta: "Start the pilot",
  },
  {
    num: "03",
    title: "The retainer",
    body: "€5,000 a month. 30 ads, bi-weekly. Your winning ad gets 12 new variants the day it fatigues. Month-to-month. Cancel anytime.",
    cta: "Start the retainer",
  },
  {
    num: "04",
    title: "The loop",
    body: "Every dying ad becomes the next brief. Footage reused, formats remixed. The same product becomes 200 ads a year. Your CPA stops climbing.",
    cta: "See the loop",
  },
];

const ProcessSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="bg-background flex flex-col"
      style={{ minHeight: "100dvh" }}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col flex-1 pt-[72px] pb-8 md:pt-[72px] md:pb-10">

        {/* Header */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.10em] mb-3 md:mb-6 flex-shrink-0"
          style={{ color: "rgba(17,17,17,0.35)" }}
        >
          Process
        </p>
        <div className="grid md:grid-cols-[1fr_1fr] gap-4 md:gap-16 items-end mb-5 md:mb-16 flex-shrink-0">
          <h2
            className="font-sans-display text-[22px] md:text-[38px] leading-[1.1] tracking-[-0.018em]"
            style={{ color: "#111111" }}
          >
            From "send me a free ad" to a winning creative engine.
            <br />
            <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.4)" }}>
              Four steps. No deck.
            </span>
          </h2>
          <p
            className="hidden md:block text-[14px] leading-[1.75] max-w-[400px]"
            style={{ color: "rgba(17,17,17,0.45)" }}
          >
            The first ad is free. The pilot ships in 14 days. Everything after that compounds.
          </p>
        </div>

        {/* Desktop: book-page cards */}
        <div className="hidden md:flex gap-3 flex-1" style={{ minHeight: "420px" }}>
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActive(i)}
                className="relative overflow-hidden rounded-[7px] cursor-pointer"
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexShrink: 0,
                  flexBasis: 0,
                  minWidth: 0,
                  backgroundColor: isActive ? "#111111" : "rgba(0,0,0,0.04)",
                  transition:
                    "flex-grow 0.65s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease",
                }}
              >
                {/* Collapsed: vertical step number */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <p
                    className="font-sans-display text-[19px]"
                    style={{
                      color: "rgba(17,17,17,0.90)",
                      writingMode: "vertical-rl",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {step.num}
                  </p>
                </div>

                {/* Expanded: full content */}
                <div
                  className="absolute inset-0 p-8 flex flex-col justify-between"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(14px)",
                    transition: isActive
                      ? "opacity 0.45s ease 0.22s, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.22s"
                      : "opacity 0.15s ease, transform 0.15s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div>
                    <p
                      className="font-serif-display text-[64px] leading-none mb-7"
                      style={{ color: "rgba(197,210,248,0.45)" }}
                    >
                      {step.num}
                    </p>
                    <h3
                      className="font-sans-display text-[20px] font-medium tracking-[-0.015em] mb-5"
                      style={{ color: "#ffffff" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[13px] leading-[1.85]"
                      style={{ color: "rgba(255,255,255,0.5)", maxWidth: "380px" }}
                    >
                      {step.body}
                    </p>
                  </div>

                  <a
                    href="/free"
                    className="text-[11px] tracking-[0.02em] transition-colors duration-200 w-fit"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.75)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
                    }
                  >
                    {step.cta} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/tablet: same book animation, vertical direction */}
        <div className="md:hidden flex flex-col gap-2" style={{ minHeight: "520px" }}>
          {steps.map((step, i) => {
            const isActive = active === i;
            return (
              <div
                key={step.num}
                onClick={() => setActive(i)}
                className="relative overflow-hidden rounded-[7px] cursor-pointer"
                style={{
                  flexGrow: isActive ? 5 : 1,
                  flexShrink: 0,
                  flexBasis: 0,
                  minHeight: 0,
                  backgroundColor: isActive ? "#111111" : "rgba(0,0,0,0.04)",
                  transition:
                    "flex-grow 0.65s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s ease",
                }}
              >
                {/* Collapsed: step number centered */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <p
                    className="font-sans-display text-[15px]"
                    style={{ color: "rgba(17,17,17,0.90)", letterSpacing: "0.06em" }}
                  >
                    {step.num}
                  </p>
                </div>

                {/* Expanded: full content */}
                <div
                  className="absolute inset-0 p-5 flex flex-col justify-between"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: isActive
                      ? "opacity 0.45s ease 0.22s"
                      : "opacity 0.15s ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div>
                    <p
                      className="font-serif-display text-[40px] leading-none mb-3"
                      style={{ color: "rgba(197,210,248,0.45)" }}
                    >
                      {step.num}
                    </p>
                    <h3
                      className="font-sans-display text-[15px] font-medium tracking-[-0.015em] mb-2"
                      style={{ color: "#ffffff" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[12px] leading-[1.75]"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {step.body}
                    </p>
                  </div>
                  <a
                    href="/free"
                    className="text-[11px] tracking-[0.02em] w-fit"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    {step.cta} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA — desktop only */}
        <div className="hidden md:flex flex-shrink-0 mt-6 items-center gap-4">
          <a
            href="/free"
            className="text-[11px] font-medium px-6 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
            style={{ backgroundColor: "#111111", color: "#ffffff" }}
          >
            Get my free ad →
          </a>
          <span
            className="text-[11px] tracking-[0.035em]"
            style={{ color: "rgba(17,17,17,0.3)" }}
          >
            48 hours · no commitment · yours to keep
          </span>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
