import { Link } from "react-router-dom";
import Background from "@/components/Background";

const Home = () => (
  <>
    <Background />

    <div className="glass-layer" style={{ alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>

        {/* Logo */}
        <img
          src="/logo.svg"
          alt="Lumina"
          width={24}
          height={24}
          style={{ opacity: 0.55, marginBottom: "16px", display: "inline-block" }}
        />

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(18px, 2.6vw, 24px)",
            fontWeight: 400,
            letterSpacing: "-0.022em",
            lineHeight: 1.25,
            color: "#1c1c1e",
            marginBottom: "20px",
          }}
        >
          We craft stories<br />that people love.
        </h1>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "7px", justifyContent: "center" }}>
          <Link to="/contact" className="btn btn-dark">contact us</Link>
          <Link to="/manifesto" className="btn btn-ghost">manifesto</Link>
        </div>

      </div>
    </div>
  </>
);

export default Home;
