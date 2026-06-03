import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 md:pt-28">

        {/* Hero */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-8" style={{ color: "rgba(17,17,17,0.35)" }}>
            About
          </p>
          <h1 className="font-sans-display text-[40px] md:text-[72px] lg:text-[88px] leading-[0.98] tracking-[-0.03em] max-w-[900px]" style={{ color: "#111111" }}>
            Two people.{" "}
            <span className="font-serif-display italic" style={{ color: "rgba(17,17,17,0.45)" }}>One studio.</span>
          </h1>
        </div>

        {/* Mission */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="font-sans-display text-[20px] md:text-[32px] leading-[1.3] tracking-[-0.018em] max-w-[760px]" style={{ color: "#111111", fontWeight: 400 }}>
            Generation is now accessible to anyone. The new differentiator is post-production: the judgment, the taste, the curation that turns raw AI footage into something that stops the scroll, holds the viewer, lands the message, and drives the purchase.
          </p>
        </div>

        {/* Founders */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">

            {/* Margot */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-9 h-9 flex items-center justify-center bg-black text-white text-[12px] font-medium flex-shrink-0">
                  M
                </div>
                <div>
                  <p className="text-[14px] font-medium" style={{ color: "#111111" }}>Margot Gress</p>
                  <p className="text-[11px]" style={{ color: "rgba(17,17,17,0.40)" }}>Co-founder, Creative Direction</p>
                </div>
              </div>
              <p className="text-[15px] leading-[1.85] mb-5" style={{ color: "rgba(17,17,17,0.60)" }}>
                Margot runs creative strategy at Publicis and studies at Sup de Pub, one of the top advertising schools in France. She's spent years training the eye that tells a good ad from a great one.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(17,17,17,0.60)" }}>
                At Lumina, she brings the judgment, the taste, and the curation. She decides what gets made, how it gets shaped in post, and what never ships. The AI generates the raw material. Margot decides what it becomes.
              </p>
            </div>

            {/* Ayoub */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-9 h-9 flex items-center justify-center bg-black text-white text-[12px] font-medium flex-shrink-0">
                  A
                </div>
                <div>
                  <p className="text-[14px] font-medium" style={{ color: "#111111" }}>Ayoub</p>
                  <p className="text-[11px]" style={{ color: "rgba(17,17,17,0.40)" }}>Co-founder, Production & Engineering</p>
                </div>
              </div>
              <p className="text-[15px] leading-[1.85] mb-5" style={{ color: "rgba(17,17,17,0.60)" }}>
                Ayoub is the video editor and engineer behind Lumina. He built the production stack that lets us generate, cut, and deliver at a pace no traditional studio can match.
              </p>
              <p className="text-[15px] leading-[1.85]" style={{ color: "rgba(17,17,17,0.60)" }}>
                The system exists to give Margot's judgment more surface area. More formats, more hooks, more angles, shipped faster. The output is only as good as the craft behind it.
              </p>
              <a
                href="mailto:ayoub@withluminalabs.com"
                className="inline-block mt-6 text-[12px] transition-opacity hover:opacity-60"
                style={{ color: "rgba(17,17,17,0.45)" }}
              >
                ayoub@withluminalabs.com →
              </a>
            </div>

          </div>
        </div>

        {/* What we believe */}
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] mb-10" style={{ color: "rgba(17,17,17,0.35)" }}>
            What we believe
          </p>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                heading: "Post-production is the differentiator.",
                body: "Any brand can generate footage now. What separates the ads that convert from the ones that get scrolled past is judgment, taste, and curation in post. That's the craft we bring.",
              },
              {
                heading: "Volume and quality are not opposites.",
                body: "A weekly batch doesn't mean compromise. It means deliberate creative decisions, tested in-market, feeding the next brief. The system produces better creative over time, not worse.",
              },
              {
                heading: "The proof comes first.",
                body: "We don't sell the work before you see it. First ad is free, delivered in 48 hours, no call required. If it's good, you'll know. If it's not, you owe us nothing.",
              },
            ].map((item) => (
              <div key={item.heading}>
                <h3 className="font-sans-display text-[17px] leading-[1.2] tracking-[-0.012em] mb-4" style={{ color: "#111111" }}>
                  {item.heading}
                </h3>
                <p className="text-[13px] leading-[1.8]" style={{ color: "rgba(17,17,17,0.55)" }}>
                  {item.body}
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
