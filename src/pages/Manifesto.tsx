import { Link } from "react-router-dom";
import Background from "@/components/Background";

const DK = "#1c1c1e";
const MUTED = "rgba(28,28,30,0.48)";

const paragraphs = [
  "Every few decades, the cost of creating something collapses to almost nothing — and when it does, the world reorganizes around whoever understands what to do with that freedom.",
  "The printing press did it to the written word. The camera did it to the image. The internet did it to distribution. Each time, the same thing happened: making things stopped being the hard part, and taste became everything.",
  "We are living through that moment again, now with stories told in moving image. For the first time, a person with imagination and no studio, no budget, and no permission can bring an entire world to life. The barrier that stood for a century — the cost of production — is falling away.",
  "Most people look at this and see a flood of disposable content. We see the opposite. When anyone can make anything, the only things that still matter are the ones people genuinely love. Abundance doesn't kill quality — it makes quality the only thing worth having.",
  "So we are not interested in making more. We are interested in making things people return to. Stories with a pulse. Worlds people want to live inside. Characters they miss when they're gone.",
  "That is the whole idea, and it is harder than it sounds. Today, we are doing the simplest and most honest version of it: telling our own stories, and learning — frame by frame — what makes someone unable to look away.",
  "Everything else we are building grows from that one question.",
];

const Manifesto = () => (
  <div style={{ position: "fixed", inset: 0, background: "#fff", overflow: "hidden" }}>
    <Background />

    <div
      style={{
        position: "relative",
        zIndex: 10,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        className="glass"
        style={{
          width: "100%",
          maxWidth: "620px",
          maxHeight: "calc(100vh - 40px)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 36px",
            borderBottom: "1px solid rgba(28,28,30,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <Link
            to="/"
            style={{
              fontSize: "12.5px",
              color: MUTED,
              letterSpacing: "0.005em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = DK)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = MUTED)}
          >
            ← back
          </Link>

          <span
            style={{
              fontSize: "10.5px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "rgba(28,28,30,0.35)",
            }}
          >
            Manifesto
          </span>

          <Link to="/contact" className="btn btn-dark btn-sm">
            Contact us
          </Link>
        </div>

        {/* Scrollable body */}
        <div
          className="manifesto-scroll"
          style={{ flex: 1, padding: "36px 36px 44px" }}
        >
          {/* Pull quote — first sentence highlighted */}
          <p
            style={{
              fontSize: "clamp(17px, 2.2vw, 21px)",
              fontWeight: 400,
              letterSpacing: "-0.018em",
              lineHeight: 1.62,
              color: DK,
              marginBottom: "28px",
              paddingBottom: "28px",
              borderBottom: "1px solid rgba(28,28,30,0.07)",
            }}
          >
            {paragraphs[0]}
          </p>

          {/* Body paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            {paragraphs.slice(1).map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "clamp(14px, 1.6vw, 15.5px)",
                  fontWeight: 300,
                  lineHeight: 1.82,
                  color: "rgba(28,28,30,0.82)",
                  letterSpacing: "-0.008em",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Signature */}
          <p
            style={{
              marginTop: "40px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(28,28,30,0.07)",
              fontSize: "15px",
              fontWeight: 300,
              fontStyle: "italic",
              color: MUTED,
              letterSpacing: "-0.008em",
            }}
          >
            — Ayoub
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Manifesto;
