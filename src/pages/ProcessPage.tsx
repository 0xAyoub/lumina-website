import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "You send the brief.",
    body: "Your product, your offer, what you want the ad to do. That's it. We take it from there. No long forms, no kickoff deck, no back and forth.",
  },
  {
    num: "02",
    title: "We find the heroes.",
    body: "We analyze your brief and design hero concepts: the ad ideas most likely to convert for your product. We pull from our internal dataset of what's trending on social right now and which formats perform. Proven angle, fresh format, built to win attention.",
  },
  {
    num: "03",
    title: "Four variants per hero.",
    body: "Each hero ships with four variants to test it. Same concept, different hook, length, ratio, opening. The hook is where most of the performance lives, so that's what we test hardest.",
  },
  {
    num: "04",
    title: "We generate every scene.",
    body: "We produce all the footage on our proprietary AI stack. Fast, on demand, at a scale no shoot could match, and in the formats where AI looks its best.",
  },
  {
    num: "05",
    title: "Our editors make it convert.",
    body: "This is where it's won. Our editors turn the raw footage into on-brand, high-performing creative. Built for the hook, edited to be sticky, graded to read as filmed. The speed of AI, the finish of a studio.",
  },
  {
    num: "06",
    title: "Fresh every Friday.",
    body: "Every Friday, a new batch lands: fresh heroes plus variants for the week ahead. Your creative never runs dry, your winners never have to carry you too long.",
  },
  {
    num: "07",
    title: "We learn what works.",
    body: "We collect lightweight performance signals on what we ship, as frictionless as possible. We use it for one thing: to see what's working for your brand and make every next batch sharper. The creative gets better because the data feeds it.",
  },
];

const ProcessPage = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Hero */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-8 reveal" style={{ color: "rgba(17,17,17,0.35)" }}>
            Process
          </p>
          <h1 className="font-sans-display text-[36px] md:text-[64px] lg:text-[80px] leading-[0.98] tracking-[-0.03em] max-w-[900px] mb-8 reveal" style={{ color: "#111111" }}>
            From your brief to a weekly batch of ads{" "}
            <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.40)" }}>that convert.</span>
          </h1>
          <p className="text-[14px] leading-[1.7] max-w-[480px] mb-10 reveal" data-delay="80" style={{ color: "rgba(17,17,17,0.50)" }}>
            No deck. No four-week wait. You send a brief, we send back finished ads, fresh every Friday.
          </p>
          <div className="reveal" data-delay="140">
            <Link
              to="/free"
              className="inline-flex text-[12px] font-medium px-7 py-3.5 bg-black text-white transition-opacity hover:opacity-75"
            >
              Get my free ad →
            </Link>
          </div>
        </div>

        {/* Steps */}
        <div className="w-full">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 reveal"
              data-delay={String(i * 40)}
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              {/* Large watermark number */}
              <span
                className="absolute right-6 md:right-12 lg:right-20 top-1/2 font-sans-display pointer-events-none select-none"
                style={{
                  fontSize: "clamp(100px, 18vw, 240px)",
                  lineHeight: 1,
                  color: "rgba(17,17,17,0.04)",
                  letterSpacing: "-0.04em",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              >
                {step.num}
              </span>

              <div className="relative z-10 grid md:grid-cols-[160px_1fr] gap-6 md:gap-16 items-start">
                <div className="flex-shrink-0">
                  <span
                    className="font-sans-display text-[13px] tabular-nums"
                    style={{ color: "rgba(17,17,17,0.25)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <div className="max-w-[600px]">
                  <h2
                    className="font-sans-display text-[22px] md:text-[34px] leading-[1.1] tracking-[-0.02em] mb-5"
                    style={{ color: "#111111" }}
                  >
                    {step.title}
                  </h2>
                  <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(17,17,17,0.55)" }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-20 md:py-28 reveal">
          <h2 className="font-sans-display text-[28px] md:text-[52px] leading-[1.05] tracking-[-0.025em] mb-8 max-w-[700px]" style={{ color: "#111111" }}>
            Fresh ads that convert, every week.{" "}
            <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.40)" }}>At the scale of AI.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/free"
              className="inline-flex text-[12px] font-medium px-7 py-3.5 bg-black text-white transition-opacity hover:opacity-75"
            >
              Get my free ad →
            </Link>
            <span className="text-[12px] self-center" style={{ color: "rgba(17,17,17,0.35)" }}>
              No call. No commitment.
            </span>
          </div>
          <a
            href="mailto:ayoub@withluminalabs.com"
            className="inline-block mt-6 text-[12px] transition-opacity hover:opacity-60"
            style={{ color: "rgba(17,17,17,0.40)" }}
          >
            Or write directly: ayoub@withluminalabs.com →
          </a>
        </div>

      </main>
      <Footer />
    </>
  );
};

export default ProcessPage;
