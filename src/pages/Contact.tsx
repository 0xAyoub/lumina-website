import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "@/components/Background";

const DK = "#1c1c1e";
const MUTED = "rgba(28,28,30,0.48)";

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
            maxWidth: "440px",
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
              Contact
            </span>
            <div style={{ width: "48px" }} />
          </div>

          {/* Form */}
          <div style={{ padding: "32px 36px 36px" }}>
            <h1
              style={{
                fontSize: "clamp(20px, 2.8vw, 24px)",
                fontWeight: 400,
                letterSpacing: "-0.022em",
                color: DK,
                marginBottom: "24px",
              }}
            >
              Get in touch.
            </h1>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <input
                className="field"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                className="field"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <textarea
                className="field"
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={4}
                style={{ resize: "none" }}
              />
              <div style={{ marginTop: "6px" }}>
                <button type="submit" className="btn btn-dark" style={{ width: "100%" }}>
                  Send
                </button>
              </div>
            </form>

            <p
              style={{
                marginTop: "16px",
                fontSize: "11.5px",
                color: "rgba(28,28,30,0.30)",
                letterSpacing: "0.005em",
                textAlign: "center",
              }}
            >
              Opens your email client with the message pre-filled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
