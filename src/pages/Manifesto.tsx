import { Link } from "react-router-dom";
import Background from "@/components/Background";

const DK    = "#1c1c1e";
const MUTED = "rgba(28,28,30,0.38)";
const BODY  = "rgba(28,28,30,0.82)";

const Em = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontWeight: 500, color: DK }}>{children}</span>
);

const paragraphs: React.ReactNode[] = [
  <>Every few decades, the cost of creating something collapses to almost nothing, and when it does, the world reorganizes around whoever understands what to do with that freedom.</>,
  <>The printing press did it to the written word. The camera did it to the image. The internet did it to distribution. Each time, the same thing happened: <Em>making things stopped being the hard part</Em>, and <Em>taste became everything</Em>.</>,
  <>We are living through that moment again, now with stories told in moving image. For the first time, a person with imagination and no studio, no budget, and no permission can bring an entire world to life. The barrier that stood for a century, <Em>the cost of production</Em>, is falling away.</>,
  <>Most people look at this and see a flood of disposable content. We see the opposite. When anyone can make anything, the only things that still matter are the ones people genuinely love. Abundance doesn't kill quality: it makes <Em>quality the only thing worth having</Em>.</>,
  <>So we are not interested in making more. We are interested in making things people return to. <Em>Stories with a pulse. Worlds people want to live inside. Characters they miss when they're gone.</Em></>,
  <>That is the whole idea, and it is harder than it sounds. Today, we are doing the simplest and most honest version of it: telling our own stories, and learning, frame by frame, <Em>what makes someone unable to look away</Em>.</>,
  <>Everything else we are building grows from that one question.</>,
];

const Manifesto = () => (
  <>
    <Background />

    <div className="glass-layer">

      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 28px",
          flexShrink: 0,
        }}
      >
        <Link
          to="/"
          style={{ fontSize: "12px", color: MUTED, transition: "color 0.18s ease" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = DK)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = MUTED)}
        >
          ← back
        </Link>

        <Link to="/contact" className="btn btn-dark">contact us</Link>
      </div>

      {/* Reading column */}
      <div
        className="mf-scroll"
        style={{ flex: 1, overflowY: "auto", padding: "0 28px" }}
      >
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            padding: "32px 0 56px",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(22px, 2.8vw, 28px)",
              fontWeight: 300,
              fontOpticalSizing: "auto",
              letterSpacing: 0,
              lineHeight: 1.2,
              color: DK,
              marginBottom: "32px",
            }}
          >
            Manifesto
          </h1>

          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "clamp(13.5px, 1.5vw, 15px)",
                fontWeight: i === 0 ? 400 : 300,
                lineHeight: 1.85,
                color: i === 0 ? DK : BODY,
                letterSpacing: 0,
                marginBottom: i < paragraphs.length - 1 ? "20px" : 0,
              }}
            >
              {p}
            </p>
          ))}

          <p
            style={{
              marginTop: "36px",
              fontSize: "14px",
              fontStyle: "italic",
              fontWeight: 300,
              color: MUTED,
            }}
          >
            Ayoub
          </p>
        </div>
      </div>

    </div>
  </>
);

export default Manifesto;
