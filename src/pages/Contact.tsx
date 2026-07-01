import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "@/components/Background";

const DK    = "#1c1c1e";
const MUTED = "rgba(28,28,30,0.42)";

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
            justifyContent: "space-between",
            padding: "18px 28px",
            borderBottom: "1px solid rgba(28,28,30,0.07)",
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

          <span
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "rgba(28,28,30,0.32)",
            }}
          >
            Contact
          </span>

          <div style={{ width: "56px" }} />
        </div>

        {/* Centered form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "28px",
          }}
        >
          <div style={{ width: "100%", maxWidth: "380px" }}>
            <h1
              style={{
                fontSize: "clamp(18px, 2.4vw, 22px)",
                fontWeight: 400,
                letterSpacing: "-0.022em",
                color: DK,
                marginBottom: "22px",
              }}
            >
              Get in touch.
            </h1>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "9px" }}
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
                style={{ marginTop: "4px" }}
              >
                send
              </button>
            </form>

            <p
              style={{
                marginTop: "14px",
                fontSize: "11px",
                color: "rgba(28,28,30,0.28)",
                textAlign: "center",
                letterSpacing: "0.01em",
              }}
            >
              opens your email client with the message pre-filled
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
