import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Free ad.",
    price: "$0, no commitment.",
    body: "Send your product page. We write the brief, direct the creative, and deliver a finished ad in 48 hours. No call, no payment, no contract. Keep the ad whatever you decide.",
  },
  {
    num: "02",
    title: "Retainer.",
    price: "From $1,500/mo, cancel anytime.",
    body: "A weekly batch of 10 to 15 finished ads. You approve the creative angles on Monday. We deliver every Friday. We track what's working in-market, retire what's fatiguing, and brief the next round around your winners.",
  },
  {
    num: "03",
    title: "The loop.",
    price: "Built into the retainer.",
    body: "Every ad feeds the next brief. We watch performance, identify fatigue before it costs you spend, and replace what's dying before the drop hits. One strategy, compounding every week.",
  },
];

const faqs = [
  {
    q: "Do I need to provide any assets?",
    a: "No. Send your product page and we handle everything: brief, direction, production, editing. If you have brand assets you'd like included, we use them.",
  },
  {
    q: "What formats do you produce?",
    a: "9:16 (Reels, Stories, TikTok) and 16:9 (feed, YouTube pre-roll) as standard. Square and other formats on request.",
  },
  {
    q: "How does the approval process work?",
    a: "You approve creative angles before production starts. This removes most revision needs. If something doesn't match the approved direction, we fix it.",
  },
  {
    q: "How do you track performance?",
    a: "We use Meta Ads Manager data you share with us. We look at hook rate, hold rate, CTR, and ROAS to decide what to iterate and what to retire.",
  },
  {
    q: "What categories do you work with?",
    a: "Premium DTC brands on Meta: beauty, skincare, supplements, food, apparel, baby products, wearables, home goods. Physical product with buyers on Meta.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "The free creative has no commitment. The retainer is month-to-month. Cancel anytime.",
  },
];

const ProcessPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Header */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
            Process
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-sans-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em] max-w-[540px]" style={{ color: "#111111" }}>
              Start for free.{" "}
              <span className="font-serif-display italic">Scale when it earns it.</span>
            </h1>
            <p className="text-[13px] leading-[1.7] md:text-right md:max-w-[240px]" style={{ color: "rgba(17,17,17,0.45)" }}>
              No call, no contract, no commitment to start.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="w-full px-6 md:px-12 lg:px-20">
          {steps.map((step) => (
            <div
              key={step.num}
              className="py-14 md:py-20"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-20 items-start">
                <div>
                  <p
                    className="font-sans-display leading-none mb-5"
                    style={{ fontSize: "clamp(72px, 8vw, 120px)", color: "rgba(17,17,17,0.06)", letterSpacing: "-0.04em" }}
                  >
                    {step.num}
                  </p>
                  <h2 className="font-sans-display text-[24px] md:text-[32px] leading-[1.1] tracking-[-0.018em] mb-2" style={{ color: "#111111" }}>
                    {step.title}
                  </h2>
                  <p className="text-[12px]" style={{ color: "rgba(17,17,17,0.38)" }}>{step.price}</p>
                </div>
                <div className="md:pt-2">
                  <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(17,17,17,0.55)" }}>{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            Common questions
          </p>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <button
                  className="w-full text-left flex items-center justify-between gap-4 py-5"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[14px] font-medium" style={{ color: "#111111" }}>{faq.q}</span>
                  <span
                    className="flex-shrink-0 text-[18px] leading-none transition-transform duration-200"
                    style={{ color: "rgba(17,17,17,0.35)", transform: openFaq === i ? "rotate(45deg)" : "none" }}
                  >+</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-[13px] leading-[1.75]" style={{ color: "rgba(17,17,17,0.55)" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-sans-display text-[22px] md:text-[32px] leading-[1.1] tracking-[-0.02em] mb-2" style={{ color: "#111111" }}>
                Start with zero risk.
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                First ad free. No call, no commitment, delivered in 48 hours.
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
      <Footer />
    </>
  );
};

export default ProcessPage;
