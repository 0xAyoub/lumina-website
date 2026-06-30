import { Link } from "react-router-dom";

const Home = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 24px",
      background: "#fff",
    }}
  >
    <h1
      style={{
        fontSize: "clamp(26px, 4.5vw, 52px)",
        fontWeight: 400,
        letterSpacing: "-0.025em",
        lineHeight: 1.15,
        color: "#000",
        textAlign: "center",
        marginBottom: "44px",
        maxWidth: "680px",
      }}
    >
      We craft stories that people love.
    </h1>

    <div style={{ display: "flex", gap: "10px" }}>
      <Link
        to="/contact"
        style={{
          display: "inline-block",
          padding: "10px 22px",
          background: "#000",
          color: "#fff",
          border: "1px solid #000",
          borderRadius: "3px",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.005em",
          transition: "opacity 0.15s ease",
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      >
        Contact us
      </Link>
      <Link
        to="/manifesto"
        className="btn-ghost"
        style={{
          display: "inline-block",
          padding: "10px 22px",
          background: "transparent",
          color: "#000",
          border: "1px solid rgba(0,0,0,0.18)",
          borderRadius: "3px",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.005em",
          transition: "border-color 0.15s ease, color 0.15s ease",
        }}
      >
        Manifesto
      </Link>
    </div>
  </div>
);

export default Home;
