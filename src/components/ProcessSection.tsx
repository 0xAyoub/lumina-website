import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "The brief",
    body: "You talk. We listen. Brand assets, ad accounts, growth targets — everything we need to understand your business in one 30-minute call. No deck. No fluff. Just clarity.",
    cta: "Schedule your brief",
  },
  {
    num: "02",
    title: "The pilot",
    body: "We produce your first batch of creatives. 48 hours. No camera. No studio. You see exactly what we can do for your brand — before any long-term commitment. One flat fee. One deliverable. One decision to make.",
    cta: "Start the pilot",
  },
  {
    num: "03",
    title: "The retainer",
    body: "You liked what you saw. Now we scale it. Monthly subscription. Fresh creatives, every week. We deploy. We test. We kill what doesn't work. We double down on what does. Your ad account becomes a machine.",
    cta: "Start the retainer",
  },
  {
    num: "04",
    title: "The loop",
    body: "This is where it compounds. Performance data from every creative feeds the next batch. New angles. New hooks. New formats — designed to find your next winner. We iterate. You grow. The loop never stops.",
    cta: "Start the loop",
  },
];

const ProcessSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="bg-background md:py-[140px] md:h-auto flex flex-col" style={{ height: "100dvh" }}>
      <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col h-full md:h-auto pt-[80px] pb-4 md:pt-0 md:pb-0 min-h-0">

        {/* Header */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4 md:mb-6 reveal"
          style={{ color: "rgba(17,17,17,0.35)" }}
        >
          Process
        </p>
        <div className="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-end mb-6 md:mb-16">
          <h2
            className="font-sans-display text-[26px] md:text-[38px] leading-[1.1] tracking-[-0.018em] reveal"
            style={{ color: "#111111" }}
          >
            From brief to performance.
            <br />
            <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.4)" }}>
              In four steps.
            </span>
          </h2>
          <p
            className="text-[14px] leading-[1.75] max-w-[400px] reveal"
            style={{ color: "rgba(17,17,17,0.45)" }}
            data-delay="80"
          >
            Every step is designed to be frictionless. The first call is 30 minutes. The first creatives arrive in 48 hours. Everything after that is automatic.
          </p>
        </div>

        {/* Desktop: book-page cards */}
        <div className="hidden md:flex gap-3" style={{ height: "500px" }}>
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
                    className="font-serif-display text-[16px]"
                    style={{
                      color: "rgba(17,17,17,0.25)",
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
                    href="https://cal.com/lumina"
                    target="_blank"
                    rel="noopener noreferrer"
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

        {/* Mobile: fill all remaining screen height */}
        <div className="md:hidden flex flex-col flex-1 min-h-0 gap-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col justify-between p-6 rounded-[7px] flex-1 min-h-0"
              style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
            >
              <div>
                <p className="font-serif-display text-[36px] leading-none mb-3" style={{ color: "#C5D2F8" }}>
                  {step.num}
                </p>
                <h3
                  className="font-sans-display text-[16px] font-medium tracking-[-0.01em] mb-2"
                  style={{ color: "#111111" }}
                >
                  {step.title}
                </h3>
                <p className="text-[12px] leading-[1.7]" style={{ color: "rgba(17,17,17,0.5)" }}>
                  {step.body}
                </p>
              </div>
              <a
                href="https://cal.com/lumina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.02em] mt-3"
                style={{ color: "rgba(17,17,17,0.3)" }}
              >
                {step.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex mt-10 items-center gap-4 reveal" data-delay="200">
          <a
            href="https://cal.com/lumina"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium px-6 py-2.5 rounded-[7px] transition-all duration-200 hover:opacity-75 active:scale-[0.97]"
            style={{ backgroundColor: "#111111", color: "#ffffff" }}
          >
            Start with a free brief →
          </a>
          <span
            className="text-[11px] tracking-[0.035em]"
            style={{ color: "rgba(17,17,17,0.3)" }}
          >
            30 minutes · no commitment
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
