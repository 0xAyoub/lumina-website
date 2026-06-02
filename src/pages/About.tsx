import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const points = [
  {
    label: "The edit is the product.",
    body: "Generating footage is now accessible to anyone. The bottleneck moved to editing — the hook structure, pacing, sound, and color grade that turn raw material into something that converts. That's where our craft lives.",
  },
  {
    label: "Volume and quality are not opposites.",
    body: "30 ads a month doesn't mean 30 compromises. It means 30 deliberate creative decisions, tested in-market, feeding the next brief. The system produces better creative over time, not worse.",
  },
  {
    label: "The proof comes first.",
    body: "We don't sell you on the work before you see it. First ad is free, delivered in 48 hours, no call required. If it's good, you'll know. If it's not, you owe us nothing.",
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
          <h1 className="font-sans-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.025em] max-w-[680px]" style={{ color: "#111111" }}>
            The studio between generation{" "}
            <span className="font-serif-display italic">and your brand.</span>
          </h1>
        </div>

        {/* Mission */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-6" style={{ color: "rgba(17,17,17,0.35)" }}>
                What we are
              </p>
              <p className="text-[16px] leading-[1.80] mb-5 font-medium" style={{ color: "rgba(17,17,17,0.75)" }}>
                Lumina is a creative studio for premium DTC brands on Meta.
              </p>
              <p className="text-[14px] leading-[1.80] mb-5" style={{ color: "rgba(17,17,17,0.55)" }}>
                We produce 30 finished, performance-edited ads per month — hooks, comparisons, product close-ups, impossible-to-film shots — in two bi-weekly batches. Delivered as finished creative, not raw files.
              </p>
              <p className="text-[14px] leading-[1.80]" style={{ color: "rgba(17,17,17,0.55)" }}>
                The brands winning on Meta aren't spending more. They're producing faster, testing more, and iterating around what actually converts. That's the system we built.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-6" style={{ color: "rgba(17,17,17,0.35)" }}>
                The founder
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-black text-white text-[13px] font-medium flex-shrink-0">
                  A
                </div>
                <div>
                  <p className="text-[13px] font-medium" style={{ color: "#111111" }}>Ayoub</p>
                  <p className="text-[11px]" style={{ color: "rgba(17,17,17,0.40)" }}>Founder, Lumina Labs</p>
                </div>
              </div>
              <p className="text-[14px] leading-[1.80] mb-5" style={{ color: "rgba(17,17,17,0.55)" }}>
                I built Lumina because I saw the same pattern in every brand that plateaued: they couldn't produce fast enough to test, and they couldn't test fast enough to learn.
              </p>
              <p className="text-[14px] leading-[1.80]" style={{ color: "rgba(17,17,17,0.55)" }}>
                The new production tools removed the old bottleneck. The new bottleneck is the edit — the brief, the structure, the pacing that turns footage into conversion. That's where we operate.
              </p>
              <a
                href="mailto:ayoub@withluminalabs.com"
                className="inline-block mt-5 text-[12px] transition-opacity hover:opacity-60"
                style={{ color: "rgba(17,17,17,0.45)" }}
              >
                ayoub@withluminalabs.com →
              </a>
            </div>
          </div>
        </div>

        {/* How we work */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            How we work
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {points.map((p) => (
              <div
                key={p.label}
                className="p-7"
                style={{ backgroundColor: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <h3 className="font-sans-display text-[18px] leading-[1.2] tracking-[-0.015em] mb-3" style={{ color: "#111111" }}>
                  {p.label}
                </h3>
                <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(17,17,17,0.55)" }}>
                  {p.body}
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
                See the work before anything else.
              </h2>
              <p className="text-[13px]" style={{ color: "rgba(17,17,17,0.45)" }}>
                First ad free. No call, no commitment, delivered in 48 hours.
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
