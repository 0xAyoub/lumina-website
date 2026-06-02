import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    num: "01",
    title: "Free creative.",
    price: "€0 — no commitment.",
    body: "Send your product page. We write the brief, direct the creative, and deliver a finished ad in 48 hours. No call, no payment, no contract. Keep the ad whatever you decide next.",
    items: ["1 finished ad (9:16 or 16:9)", "Delivered in 48 hours", "Full usage rights", "No watermark"],
  },
  {
    num: "02",
    title: "Pilot.",
    price: "Flat rate, no subscription.",
    body: "A defined batch of ads at a flat price. You approve creative directions before we build anything, so you know exactly what's coming. One-off, no commitment.",
    items: ["Direction approval before production", "Defined batch of finished ads", "Mix of formats and ratios", "Full usage rights"],
  },
  {
    num: "03",
    title: "Retainer.",
    price: "From €1,500/mo — cancel anytime.",
    body: "30 ads a month, delivered in two bi-weekly batches. We track what's working in-market, retire what's fatiguing, and brief the next round around your winners.",
    items: ["30 ads per month", "Bi-weekly delivery", "Performance tracking included", "Direction approval each batch"],
  },
  {
    num: "04",
    title: "The loop.",
    price: "Built into the retainer.",
    body: "Every result briefs the next creative. We identify fatigue before it costs you spend and replace it before the drop hits. The creative system sharpens every week.",
    items: ["Fatigue detected before CPA climbs", "Winners spun into variants immediately", "Brief evolves with your data", "One continuous creative strategy"],
  },
];

const faqs = [
  {
    q: "Do I need to provide any assets?",
    a: "No. Send your product page and we handle everything — brief, direction, production, editing. If you have brand assets you'd like included, we use them.",
  },
  {
    q: "What formats do you produce?",
    a: "9:16 (Reels, Stories, TikTok) and 16:9 (feed, YouTube pre-roll) as standard. Square and other formats on request.",
  },
  {
    q: "Can I request revisions?",
    a: "On the pilot and retainer, you approve creative directions before production starts — this removes most revision needs. If something doesn't match the approved direction, we fix it.",
  },
  {
    q: "How do you track performance?",
    a: "We use Meta Ads Manager data you share with us. We look at hook rate, hold rate, CTR, and ROAS to decide what to iterate and what to retire.",
  },
  {
    q: "What categories do you work with?",
    a: "Premium DTC brands on Meta — beauty, skincare, supplements, food, apparel, baby products, wearables, home goods. Physical product with buyers on Meta.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "The free creative has no commitment. The pilot is a one-time flat-rate project. The retainer is month-to-month — cancel anytime.",
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
              className="grid md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-16 py-12 md:py-14"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
            >
              <p className="font-sans-display text-[44px] leading-none tracking-[-0.04em]" style={{ color: "rgba(17,17,17,0.07)" }}>
                {step.num}
              </p>
              <div>
                <h2 className="font-sans-display text-[20px] md:text-[26px] leading-[1.1] tracking-[-0.018em] mb-1" style={{ color: "#111111" }}>
                  {step.title}
                </h2>
                <p className="text-[11px] mb-4" style={{ color: "rgba(17,17,17,0.38)" }}>{step.price}</p>
                <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(17,17,17,0.55)" }}>{step.body}</p>
              </div>
              <div className="flex flex-col gap-2 md:pt-0.5">
                {step.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 flex-shrink-0" style={{ backgroundColor: "rgba(17,17,17,0.25)" }} />
                    <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.55)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            How we compare
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                  <th className="text-left pb-4" style={{ width: "20%" }} />
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "#111111" }}>Lumina</th>
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>Agency</th>
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>UGC</th>
                  <th className="text-left pb-4 text-[12px] font-medium" style={{ color: "rgba(17,17,17,0.40)" }}>Self-serve</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Delivery",  lumina: "48h",           agency: "4–8 weeks",     ugc: "5–14 days",       self: "Same day" },
                  { label: "Cost",      lumina: "From €1,500/mo", agency: "€10k+ min",    ugc: "€200–500/video",  self: "€50–200/mo + your time" },
                  { label: "Volume",    lumina: "30/mo",          agency: "3–5/cycle",     ugc: "Inconsistent",    self: "Unlimited — no editing" },
                  { label: "Edit",      lumina: "Studio-edited",  agency: "Studio-edited", ugc: "Creator-level",   self: "None — raw generation" },
                  { label: "Loop",      lumina: "Built-in",       agency: "None",          ugc: "None",            self: "Manual" },
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
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            Common questions
          </p>
          <div className="max-w-[640px]">
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
