import { useEffect, useRef, useState } from "react";

const TomHale = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <div style={{ display: "flex", minHeight: "100dvh", background: "#fff" }}>

      {/* Left: scrollable letter */}
      <div
        style={{
          width: "50vw",
          padding: "80px 64px 120px 64px",
          boxSizing: "border-box",
          color: "#111",
        }}
      >
        {/* Header */}
        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(17,17,17,0.35)", marginBottom: "48px" }}>
          Lumina Labs · May 2026
        </p>

        <h1
          className="font-serif-display"
          style={{ fontSize: "36px", lineHeight: 1.1, letterSpacing: "-0.022em", color: "#111", marginBottom: "12px", fontStyle: "italic" }}
        >
          Dear Tom,
        </h1>

        <div style={{ width: "40px", height: "1px", background: "rgba(17,17,17,0.12)", margin: "32px 0" }} />

        {/* Body */}
        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(17,17,17,0.75)", maxWidth: "520px" }}>

          <p style={{ marginBottom: "24px" }}>
            I'm Ayoub. I run a one-person AI creative studio called Lumina Labs. I made an Oura Ring ad — without a camera, without a crew, without a studio. I'm sending it to you directly because I think it's the kind of work that earns a direct send.
          </p>

          <p style={{ marginBottom: "24px" }}>
            You can watch it on the right.
          </p>

          <h2
            className="font-serif-display"
            style={{ fontSize: "20px", lineHeight: 1.2, letterSpacing: "-0.016em", color: "#111", margin: "48px 0 16px", fontStyle: "italic" }}
          >
            Why this ad and why now
          </h2>

          <p style={{ marginBottom: "24px" }}>
            Oura is entering a moment where the brand has to do two things at once: hold its premium positioning and reach a much broader audience. That's a hard creative problem. Most brands solve it badly — they either go mass and lose the soul, or stay niche and plateau.
          </p>

          <p style={{ marginBottom: "24px" }}>
            The ad I made doesn't try to explain the ring. It tries to make you feel what it's like to wear it — the quiet intelligence of it, the way it knows things about your body before you do. A woman. A run. A ring. No voiceover. No feature checklist. Just the feeling.
          </p>

          <p style={{ marginBottom: "24px" }}>
            That's the creative direction I think Oura needs right now: aspirational without being abstract, scientific without being cold.
          </p>

          <h2
            className="font-serif-display"
            style={{ fontSize: "20px", lineHeight: 1.2, letterSpacing: "-0.016em", color: "#111", margin: "48px 0 16px", fontStyle: "italic" }}
          >
            The strategic choices, briefly
          </h2>

          <p style={{ marginBottom: "24px" }}>
            I chose a woman running at dawn. Not a gym. Not a lab. Not a data dashboard. Movement as the primary language. The ring as something she trusts rather than something she monitors.
          </p>

          <p style={{ marginBottom: "24px" }}>
            The visual language is cinematic — close skin, real light, motion blur. The kind of footage that costs $300K to produce traditionally. This cost a fraction of that, and it's ready to test on paid social tomorrow.
          </p>

          <p style={{ marginBottom: "24px" }}>
            9:16 because that's where performance creative lives. But the composition works at any ratio.
          </p>

          <h2
            className="font-serif-display"
            style={{ fontSize: "20px", lineHeight: 1.2, letterSpacing: "-0.016em", color: "#111", margin: "48px 0 16px", fontStyle: "italic" }}
          >
            What this took to make
          </h2>

          <p style={{ marginBottom: "24px" }}>
            No cameras. No studio. No crew. No travel. No casting. No location permits. No post-production house.
          </p>

          <p style={{ marginBottom: "24px" }}>
            Just AI tools, a clear creative brief, and about 48 hours. That's the model. Every creative we produce — at any scale — follows this structure. Which means the cost curve is permanently different from traditional production.
          </p>

          <p style={{ marginBottom: "24px" }}>
            We can produce 30 variations of this spot in the time it takes a traditional agency to schedule the first creative review.
          </p>

          <h2
            className="font-serif-display"
            style={{ fontSize: "20px", lineHeight: 1.2, letterSpacing: "-0.016em", color: "#111", margin: "48px 0 16px", fontStyle: "italic" }}
          >
            If any of this is useful
          </h2>

          <p style={{ marginBottom: "24px" }}>
            I'm not pitching a retainer. I'm not asking for a meeting before you've seen the work. The work is the pitch.
          </p>

          <p style={{ marginBottom: "24px" }}>
            If you watch the ad and feel something — if it captures even 10% of what you'd want Oura to feel like on a Meta feed — then I think it's worth a conversation. I'd love to make more of these, faster, for the channels where Oura is trying to win.
          </p>

          <p style={{ marginBottom: "24px" }}>
            If it's not right, I'd genuinely like to know what's off. That's useful too.
          </p>

          <div style={{ width: "40px", height: "1px", background: "rgba(17,17,17,0.12)", margin: "48px 0" }} />

          {/* Signature */}
          <p style={{ marginBottom: "6px" }}>With respect,</p>
          <p
            className="font-serif-display"
            style={{ fontSize: "22px", fontStyle: "italic", letterSpacing: "-0.016em", color: "#111", marginBottom: "24px" }}
          >
            Ayoub Benouda
          </p>
          <p style={{ fontSize: "13px", color: "rgba(17,17,17,0.45)", marginBottom: "4px" }}>
            Founder, Lumina Labs
          </p>
          <p style={{ fontSize: "13px", marginBottom: "4px" }}>
            <a
              href="mailto:ayoub@withluminalabs.com"
              style={{ color: "rgba(17,17,17,0.55)", textDecoration: "none", borderBottom: "1px solid rgba(17,17,17,0.15)" }}
            >
              ayoub@withluminalabs.com
            </a>
          </p>
          <p style={{ fontSize: "13px" }}>
            <a
              href="https://withluminalabs.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(17,17,17,0.55)", textDecoration: "none", borderBottom: "1px solid rgba(17,17,17,0.15)" }}
            >
              withluminalabs.com
            </a>
          </p>
        </div>
      </div>

      {/* Right: sticky video */}
      <div
        style={{
          width: "50vw",
          position: "sticky",
          top: 0,
          height: "100dvh",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          src="/oura-ad.mp4"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
        />

        {/* Sound toggle */}
        <button
          onClick={() => setMuted(v => !v)}
          style={{
            position: "absolute",
            bottom: "24px",
            right: "24px",
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            backdropFilter: "blur(8px)",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.65)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          )}
        </button>
      </div>

    </div>
  );
};

export default TomHale;
