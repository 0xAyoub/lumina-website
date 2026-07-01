import { Link } from "react-router-dom";
import Background from "@/components/Background";

const Home = () => (
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
          maxWidth: "400px",
          padding: "44px 40px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Lumina"
          width={26}
          height={26}
          style={{ opacity: 0.65, marginBottom: "18px", display: "inline-block" }}
        />

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(20px, 3vw, 26px)",
            fontWeight: 400,
            letterSpacing: "-0.022em",
            lineHeight: 1.22,
            color: "#1c1c1e",
            marginBottom: "22px",
          }}
        >
          We craft stories<br />that people love.
        </h1>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <Link to="/contact" className="btn btn-dark">
            Contact us
          </Link>
          <Link to="/manifesto" className="btn btn-ghost">
            Manifesto
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
