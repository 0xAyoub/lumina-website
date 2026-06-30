import { useState } from "react";
import { Link } from "react-router-dom";

const fieldStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "11px 14px",
  border: "1px solid rgba(0,0,0,0.16)",
  borderRadius: "3px",
  fontSize: "14px",
  fontFamily: "inherit",
  fontWeight: 400,
  color: "#000",
  background: "#fff",
  letterSpacing: "-0.005em",
  transition: "border-color 0.15s ease",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ayoub@withluminalabs.com?subject=${subject}&body=${body}`;
  };

  return (
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

      <div style={{ width: "100%", maxWidth: "420px" }}>
        <h1
          style={{
            fontSize: "clamp(22px, 3.5vw, 34px)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            color: "#000",
            marginBottom: "40px",
          }}
        >
          Get in touch.
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={fieldStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={fieldStyle}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={5}
            style={{ ...fieldStyle, resize: "none" }}
          />
          <div style={{ marginTop: "4px" }}>
            <button
              type="submit"
              style={{
                padding: "11px 26px",
                background: "#000",
                color: "#fff",
                border: "1px solid #000",
                borderRadius: "3px",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "inherit",
                cursor: "pointer",
                letterSpacing: "0.005em",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              Send
            </button>
          </div>
        </form>

        <p
          style={{
            marginTop: "28px",
            fontSize: "12px",
            color: "rgba(0,0,0,0.32)",
            letterSpacing: "0.005em",
            lineHeight: 1.6,
          }}
        >
          This opens your email client with the message pre-filled.
        </p>
      </div>
    </div>
  );
};

export default Contact;
