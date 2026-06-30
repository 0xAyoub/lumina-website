import { Link } from "react-router-dom";

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
  <div style={{ background: "#fff", minHeight: "100vh", padding: "0 24px 120px" }}>

    {/* Back */}
    <Link
      to="/"
      className="link-accent"
      style={{
        position: "fixed",
        top: "28px",
        left: "28px",
        fontSize: "12px",
        fontWeight: 400,
        color: "rgba(0,0,0,0.38)",
        letterSpacing: "0.01em",
        transition: "color 0.15s ease",
      }}
    >
      ← back
    </Link>

    {/* Letter body */}
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        paddingTop: "120px",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "rgba(0,0,0,0.32)",
          marginBottom: "64px",
        }}
      >
        Manifesto
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: "17px",
              lineHeight: 1.82,
              color: "#111",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            {p}
          </p>
        ))}
      </div>

      <p
        style={{
          marginTop: "60px",
          fontSize: "17px",
          lineHeight: 1.82,
          color: "#111",
          fontWeight: 300,
          letterSpacing: "-0.01em",
        }}
      >
        — Ayoub
      </p>
    </div>
  </div>
);

export default Manifesto;
