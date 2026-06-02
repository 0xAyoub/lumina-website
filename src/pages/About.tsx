import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    label: "Speed is a feature.",
    body: "48 hours is not a promise — it's the constraint we design around. Slower creative cycles mean slower feedback loops, which means slower growth. We built the system so speed is the default.",
  },
  {
    label: "Creative that performs.",
    body: "We don't make ads that win awards. We make ads that stop the scroll, hold attention, and drive purchases. Every creative decision is made with performance in mind.",
  },
  {
    label: "No retainers of trust.",
    body: "The free ad isn't a loss leader. It's how we prove the work before asking for anything. If it's good, you'll know. If it's not, you owe us nothing.",
  },
  {
    label: "One brand, not fifty.",
    body: "We keep our client roster small by design. Every brand we work with gets a creative partner who actually knows their product — not a rotating team of generalists.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Header */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
            About
          </p>
          <h1 className="font-sans-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.025em] max-w-[700px]" style={{ color: "#111111" }}>
            Built for brands that can't afford{" "}
            <span className="font-serif-display italic">to wait.</span>
          </h1>
        </div>

        {/* Origin */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-8" style={{ color: "rgba(17,17,17,0.35)" }}>
                The origin
              </p>
              <p className="text-[16px] leading-[1.80] mb-6 font-medium" style={{ color: "rgba(17,17,17,0.75)" }}>
                Lumina started from a simple observation: the brands winning on Meta weren't spending more — they were testing faster.
              </p>
              <p className="text-[14px] leading-[1.80] mb-5" style={{ color: "rgba(17,17,17,0.55)" }}>
                The old model — brief an agency, wait four weeks, receive three ads — is broken for the pace of modern DTC. By the time the creative lands, the window is already closing.
              </p>
              <p className="text-[14px] leading-[1.80] mb-5" style={{ color: "rgba(17,17,17,0.55)" }}>
                We built Lumina to collapse that cycle. Using AI-directed production, we deliver 30 finished, platform-ready performance ads every month — in bi-weekly batches, with a creative strategy that evolves around your actual data.
              </p>
              <p className="text-[14px] leading-[1.80]" style={{ color: "rgba(17,17,17,0.55)" }}>
                Not spec work. Not templates. Real performance creative, at a volume and speed that wasn't possible before.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-8" style={{ color: "rgba(17,17,17,0.35)" }}>
                The founder
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-black text-white text-[14px] font-medium flex-shrink-0">
                  A
                </div>
                <div>
                  <p className="text-[14px] font-medium" style={{ color: "#111111" }}>Ayoub</p>
                  <p className="text-[12px]" style={{ color: "rgba(17,17,17,0.40)" }}>Founder, Lumina Labs</p>
                </div>
              </div>
              <p className="text-[14px] leading-[1.80] mb-5" style={{ color: "rgba(17,17,17,0.55)" }}>
                I spent years studying what separates DTC brands that scale from ones that plateau. The answer is almost always creative velocity — the ability to generate, test, and iterate faster than your competition.
              </p>
              <p className="text-[14px] leading-[1.80] mb-5" style={{ color: "rgba(17,17,17,0.55)" }}>
                When generative AI reached the point where AI-directed video was genuinely indistinguishable from live production, I realized the old bottleneck was gone. The question became: who would build the system to take advantage of it?
              </p>
              <p className="text-[14px] leading-[1.80]" style={{ color: "rgba(17,17,17,0.55)" }}>
                Lumina is that system.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-12" style={{ color: "rgba(17,17,17,0.35)" }}>
            How we work
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {values.map((v) => (
              <div key={v.label}>
                <h3 className="font-sans-display text-[18px] leading-[1.15] tracking-[-0.015em] mb-3" style={{ color: "#111111" }}>
                  {v.label}
                </h3>
                <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(17,17,17,0.55)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Numbers */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "48h", label: "Delivery on every ad" },
              { value: "30", label: "Ads per month on retainer" },
              { value: "€2,500", label: "Pilot — 15 ads in 14 days" },
              { value: "0", label: "Ads needed to start" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-sans-display text-[36px] md:text-[44px] leading-none tracking-[-0.03em] mb-2" style={{ color: "#111111" }}>
                  {s.value}
                </p>
                <p className="text-[11px] leading-[1.5]" style={{ color: "rgba(17,17,17,0.40)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-sans-display text-[22px] md:text-[32px] leading-[1.1] tracking-[-0.02em] mb-2" style={{ color: "#111111" }}>
                See the work first.
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                Get one finished ad for your brand — free, in 48 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/work"
                className="inline-flex text-[12px] font-medium px-7 py-3.5 transition-opacity hover:opacity-75 text-center"
                style={{ border: "1px solid rgba(17,17,17,0.15)", color: "#111111" }}
              >
                View our work
              </Link>
              <Link
                to="/free"
                className="inline-flex text-[12px] font-medium px-7 py-3.5 bg-black text-white transition-opacity hover:opacity-75"
              >
                Get my free ad →
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default About;
