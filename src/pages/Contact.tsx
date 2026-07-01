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
        <div style={{ padding: "18px 28px", flexShrink: 0 }}>
          <Link
            to="/"
            style={{ fontSize: "12px", color: MUTED, transition: "color 0.18s ease" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = DK)}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = MUTED)}
          >
            ← back
          </Link>
        </div>

        {/* Centered form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 28px 40px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "360px" }}>

            {/* Header */}
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(22px, 2.6vw, 28px)",
                fontWeight: 300,
                fontOpticalSizing: "auto",
                letterSpacing: 0,
                lineHeight: 1.2,
                color: DK,
                marginBottom: "6px",
              }}
            >
              Get in touch.
            </h1>
            <p
              style={{
                fontSize: "12px",
                color: MUTED,
                marginBottom: "28px",
                letterSpacing: 0,
              }}
            >
              We respond within 24 hours.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
                rows={5}
                style={{ resize: "none" }}
              />
              <button
                type="submit"
                className="btn btn-dark btn-full"
                style={{ marginTop: "4px" }}
              >
                send
              </button>
            </form>

            {/* Or email directly */}
            <p style={{ marginTop: "20px", fontSize: "11px", color: "rgba(28,28,30,0.28)", textAlign: "center" }}>
              or{" "}
              <a
                href="mailto:ayoub@withluminalabs.com"
                style={{ color: MUTED, textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                email directly
              </a>
            </p>

          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
