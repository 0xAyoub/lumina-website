import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "@/components/Background";

const DK    = "#1c1c1e";
const MUTED = "rgba(28,28,30,0.38)";

const Contact = () => {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ayoub@withluminalabs.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Background />

      <div className="glass-layer">

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
        </div>

        {/* Two-column body */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>

          {/* Left — form */}
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              alignItems: "center",
              padding: "40px 48px",
            }}
          >
            <div style={{ width: "100%", maxWidth: "340px" }}>
              <h1
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(20px, 2.4vw, 26px)",
                  fontWeight: 300,
                  fontOpticalSizing: "auto",
                  letterSpacing: 0,
                  lineHeight: 1.2,
                  color: DK,
                  marginBottom: "28px",
                }}
              >
                Get in touch.
              </h1>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <input
                  className="field"
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <input
                  className="field"
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <textarea
                  className="field"
                  placeholder="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                  rows={4}
                  style={{ resize: "none" }}
                />
                <button
                  type="submit"
                  className="btn btn-dark btn-full"
                  style={{ marginTop: "6px" }}
                >
                  send
                </button>
              </form>
            </div>
          </div>

          {/* Right — decorative */}
          <div
            className="contact-right"
            style={{
              flex: "1 1 340px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "48px",
              overflow: "hidden",
              borderLeft: "1px solid rgba(28,28,30,0.06)",
            }}
          >
            {/* Gradient orb */}
            <div
              style={{
                position: "absolute",
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(197,210,248,0.32) 0%, rgba(197,210,248,0) 68%)",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -54%)",
                pointerEvents: "none",
              }}
            />

            {/* Large display text */}
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(52px, 7vw, 86px)",
                fontWeight: 300,
                fontOpticalSizing: "auto",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: DK,
                marginBottom: "32px",
                position: "relative",
              }}
            >
              Let's<br />talk.
            </p>

            {/* Email */}
            <a
              href="mailto:ayoub@withluminalabs.com"
              style={{
                fontSize: "12px",
                color: MUTED,
                letterSpacing: 0,
                transition: "color 0.18s ease",
                position: "relative",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = DK)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = MUTED)}
            >
              ayoub@withluminalabs.com
            </a>

            <p
              style={{
                marginTop: "6px",
                fontSize: "11px",
                color: "rgba(28,28,30,0.28)",
                position: "relative",
              }}
            >
              Response within 24 hours.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
