import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Free creative.",
    sub: "No call. No commitment. No risk.",
    body: "Send us your product page. We study it, write the brief, direct the creative, and deliver a finished performance ad in 48 hours. Yours to keep and run. No card required, no contract, no follow-up call unless you want one.",
    detail: ["Any product category", "9:16 or 16:9 format", "Delivered in 48 hours", "Full usage rights"],
  },
  {
    num: "02",
    title: "Pilot.",
    sub: "A defined batch. One flat price.",
    body: "Before we produce, you review and approve the creative directions — hooks, angles, formats. You know exactly what you're getting before anything is built. Then we deliver the batch on time.",
    detail: ["Direction approval before production", "Defined number of ads", "Full usage rights", "No monthly commitment"],
  },
  {
    num: "03",
    title: "Retainer, from €1,500/mo.",
    sub: "30 ads a month. Cancel anytime.",
    body: "Thirty fresh ads every month, delivered in two bi-weekly batches. We track what's working in-market, retire what's fatiguing, and brief the next round around your winners. You get a creative partner who knows your brand — not a new freelancer every time.",
    detail: ["30 ads per month", "Bi-weekly delivery", "Performance tracking included", "Cancel anytime"],
  },
  {
    num: "04",
    title: "The loop.",
    sub: "Every result briefs the next creative.",
    body: "We watch what's working in-market, identify fatigue before it costs you spend, and brief the replacement before the drop hits. One brand, one continuous creative strategy — the system sharpens every week. This is what compounding creative looks like.",
    detail: ["Continuous brief refinement", "Fatigue detection", "Iteration on winners", "Strategy evolves weekly"],
  },
];

const faqs = [
  {
    q: "Do I need to provide any assets?",
    a: "No. Send us your product page and we handle everything — brief, direction, production, editing. If you have brand assets you want to include, we'll use them.",
  },
  {
    q: "What formats do you produce?",
    a: "We produce 9:16 (Reels, Stories, TikTok) and 16:9 (feed, YouTube pre-roll) as standard. Square and other formats on request.",
  },
  {
    q: "Can I request revisions?",
    a: "On the pilot and retainer, you approve creative directions before production starts — this eliminates most revision needs. If something doesn't match the approved direction, we fix it.",
  },
  {
    q: "How do you track performance?",
    a: "We use Meta Ads Manager data you share with us. We look at hook rate, hold rate, CTR, and ROAS to decide what to iterate on and what to retire.",
  },
  {
    q: "What categories do you work with?",
    a: "DTC brands on Meta — supplements, beauty, skincare, apparel, baby products, food, wearables, home goods. If your buyers are on Meta and you have a physical product, we can build for you.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "The free ad has no commitment. The pilot is a one-time project. The retainer is month-to-month — cancel anytime.",
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
            <h1 className="font-sans-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.025em] max-w-[560px]" style={{ color: "#111111" }}>
              From one free ad{" "}
              <span className="font-serif-display italic">to a creative system.</span>
            </h1>
            <p className="text-[13px] leading-[1.7] md:text-right md:max-w-[260px]" style={{ color: "rgba(17,17,17,0.45)" }}>
              Start with zero commitment. Scale when the work earns it.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="w-full px-6 md:px-12 lg:px-20">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="grid md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 py-12 md:py-16"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div>
                <p className="font-sans-display text-[52px] leading-none tracking-[-0.04em]" style={{ color: "rgba(17,17,17,0.08)" }}>
                  {step.num}
                </p>
              </div>
              <div>
                <h2 className="font-sans-display text-[22px] md:text-[28px] leading-[1.1] tracking-[-0.02em] mb-1" style={{ color: "#111111" }}>
                  {step.title}
                </h2>
                <p className="text-[12px] mb-5" style={{ color: "rgba(17,17,17,0.40)" }}>{step.sub}</p>
                <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(17,17,17,0.60)" }}>{step.body}</p>
              </div>
              <div className="flex flex-col gap-2 md:pt-1">
                {step.detail.map((d) => (
                  <div key={d} className="flex items-center gap-3">
                    <span className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: "rgba(17,17,17,0.25)" }} />
                    <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.55)" }}>{d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How we compare */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            How we compare
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                  <th className="text-left pb-4 text-[11px] font-medium uppercase tracking-[0.08em]" style={{ color: "rgba(17,17,17,0.35)", width: "22%" }} />
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "#111111" }}>Lumina</th>
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>Agency</th>
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>UGC</th>
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>Self-serve AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Delivery", lumina: "48h", agency: "4–8 weeks", ugc: "5–14 days", self: "Same day" },
                  { label: "Cost", lumina: "From €1,500/mo", agency: "€10k+ min", ugc: "€200–500/video", self: "€50–200/mo" },
                  { label: "Volume", lumina: "30/mo", agency: "3–5/cycle", ugc: "Inconsistent", self: "Unlimited" },
                  { label: "Quality", lumina: "Studio-edited", agency: "Studio-edited", ugc: "Creator-level", self: "Generic" },
                  { label: "Loop", lumina: "Built-in", agency: "None", ugc: "None", self: "Manual" },
                ].map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td className="py-4 text-[11px] font-medium uppercase tracking-[0.07em]" style={{ color: "rgba(17,17,17,0.35)" }}>{row.label}</td>
                    <td className="py-4 text-[13px] font-medium" style={{ color: "#111111" }}>{row.lumina}</td>
                    <td className="py-4 text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>{row.agency}</td>
                    <td className="py-4 text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>{row.ugc}</td>
                    <td className="py-4 text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>{row.self}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            FAQ
          </p>
          <div className="max-w-[680px]">
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <button
                  className="w-full text-left flex items-center justify-between gap-4 py-5"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-[14px] font-medium" style={{ color: "#111111" }}>{faq.q}</span>
                  <span className="flex-shrink-0 text-[18px] leading-none transition-transform duration-200" style={{ color: "rgba(17,17,17,0.35)", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
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
            <h2 className="font-sans-display text-[22px] md:text-[32px] leading-[1.1] tracking-[-0.02em]" style={{ color: "#111111" }}>
              Start with one free ad.
            </h2>
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
