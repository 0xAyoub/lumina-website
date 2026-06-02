import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  {
    name: "Free Creative",
    price: "$0",
    period: "one time",
    desc: "One finished ad for your brand, delivered in 48 hours. No call, no payment, no contract. The proof before anything else.",
    includes: [
      "1 finished ad (9:16 or 16:9)",
      "Brief written by us",
      "Delivered in 48 hours",
      "Full usage rights",
      "No watermark",
    ],
    cta: "Get my free ad",
    href: "/free",
    highlight: false,
  },
  {
    name: "Retainer",
    price: "From $1,500",
    period: "/ month",
    desc: "A weekly batch of 10 to 15 ads. You approve creative angles on Monday. We deliver every Friday. We track what works, retire what fatigues, and brief the next round around your winners. Cancel anytime.",
    includes: [
      "10 to 15 ads per week",
      "Weekly Friday delivery",
      "Direction approval each batch",
      "Performance tracking",
      "Brief iteration on winners",
      "Cancel anytime",
    ],
    cta: "Start the retainer",
    href: "/free",
    highlight: true,
  },
];

const faqs = [
  {
    q: "Is the free ad really free?",
    a: "Yes. No card, no contract, no catch. We produce one finished ad for your brand and send it over. If you want to go further, we talk.",
  },
  {
    q: "What's included in the creative direction?",
    a: "We write the brief, choose the hook format, direct the visual language, write the copy, and produce the full edit: pacing, sound, color grade. You don't need to provide a brief or assets.",
  },
  {
    q: "How does the weekly batch work?",
    a: "You approve the creative angles on Monday. We go into production and deliver the full batch every Friday. Each batch is briefed around what's working in-market and what's starting to fatigue.",
  },
  {
    q: "How do you track performance?",
    a: "We use Meta Ads Manager data you share with us. We look at hook rate, hold rate, CTR, and ROAS to decide what to iterate, what to scale, and what to retire.",
  },
  {
    q: "What if I want to cancel the retainer?",
    a: "Cancel by the end of any month and your next cycle won't bill. No penalty, no notice period beyond that.",
  },
  {
    q: "Do you work with brands outside Europe?",
    a: "Yes. We work with DTC brands globally. Pricing is in dollars but we can invoice in euros or GBP.",
  },
  {
    q: "What categories do you work with?",
    a: "Premium DTC brands on Meta: beauty, skincare, supplements, food, apparel, baby products, wearables, home goods. Physical product with buyers on Meta.",
  },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Header */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
            Pricing
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-sans-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em]" style={{ color: "#111111" }}>
              Start free.{" "}
              <span className="font-serif-display italic">No surprises.</span>
            </h1>
            <p className="text-[13px] leading-[1.7] md:text-right md:max-w-[240px]" style={{ color: "rgba(17,17,17,0.45)" }}>
              First ad free. Commit to nothing until the work proves itself.
            </p>
          </div>
        </div>

        {/* Tiers */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(0,0,0,0.07)" }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col p-8 md:p-10"
                style={{ backgroundColor: tier.highlight ? "#111111" : "#ffffff" }}
              >
                <p
                  className="text-[11px] font-medium uppercase tracking-[0.10em] mb-6"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.45)" : "rgba(17,17,17,0.35)" }}
                >
                  {tier.name}
                </p>

                <div className="mb-6">
                  <p
                    className="font-sans-display text-[40px] leading-none tracking-[-0.03em]"
                    style={{ color: tier.highlight ? "#ffffff" : "#111111" }}
                  >
                    {tier.price}
                  </p>
                  <p
                    className="text-[12px] mt-1"
                    style={{ color: tier.highlight ? "rgba(255,255,255,0.40)" : "rgba(17,17,17,0.40)" }}
                  >
                    {tier.period}
                  </p>
                </div>

                <p
                  className="text-[13px] leading-[1.7] mb-8"
                  style={{ color: tier.highlight ? "rgba(255,255,255,0.60)" : "rgba(17,17,17,0.55)" }}
                >
                  {tier.desc}
                </p>

                <div className="flex flex-col gap-2.5 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 mt-[6px] w-1 h-1"
                        style={{ backgroundColor: tier.highlight ? "rgba(255,255,255,0.40)" : "rgba(17,17,17,0.30)" }}
                      />
                      <p
                        className="text-[12px] leading-[1.5]"
                        style={{ color: tier.highlight ? "rgba(255,255,255,0.70)" : "rgba(17,17,17,0.65)" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  to={tier.href}
                  className="text-[12px] font-medium px-6 py-3 text-center transition-opacity hover:opacity-75"
                  style={{
                    backgroundColor: tier.highlight ? "#ffffff" : "#111111",
                    color: tier.highlight ? "#111111" : "#ffffff",
                  }}
                >
                  {tier.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
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
                Not sure yet?
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                Start free. You'll know after you see the first ad.
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

export default Pricing;
