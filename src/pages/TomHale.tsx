import { useEffect, useRef, useState } from "react";

const link: React.CSSProperties = {
  color: "rgba(17,17,17,0.70)",
  textDecoration: "none",
  borderBottom: "1px solid rgba(17,17,17,0.20)",
};

const TomHale = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <div style={{ display: "flex", minHeight: "100dvh", background: "#fff" }}>

      {/* Left: scrollable letter */}
      <div style={{ width: "50vw", padding: "60px 60px 100px 60px", boxSizing: "border-box" }}>

        {/* Byline */}
        <p style={{ fontSize: "12px", color: "rgba(17,17,17,0.38)", marginBottom: "40px", letterSpacing: "0.01em" }}>
          From Ayoub Benouda, Lumina Labs, Paris
        </p>

        {/* Salutation */}
        <h1
          className="font-serif-display"
          style={{ fontSize: "34px", lineHeight: 1.1, letterSpacing: "-0.022em", color: "#111", marginBottom: "32px", fontWeight: 350 }}
        >
          Hi{" "}
          <a href="https://www.linkedin.com/in/tomeghale/" target="_blank" rel="noopener noreferrer" style={{ ...link, fontSize: "34px" }}>
            Tom
          </a>,
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(17,17,17,0.72)", maxWidth: "500px" }}>

          <p style={{ marginBottom: "20px" }}>
            Thanks for accepting the connect. Made you something while I was at it.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Bike mechanic in Reno, then Macromedia, Adobe, Linden Lab, HomeAway, Momentive, now Oura. That's a career built on the same bet you're making with the ring: small, consistent, data-informed decisions compound. I read the Rent Responsibly fireside and the Sequoia podcast. The "don't rush it, wait for the right CEO job" advice from your mentor stuck with me. The patience to wait for the right fit is the same patience the ring sells to its members.
          </p>

          <p style={{ marginBottom: "36px" }}>
            So, a 30-second spec ad for Oura. Performance creative, not brand. No ask attached. If a single frame is useful, it's yours.
          </p>

          {/* Section */}
          <h2
            className="font-serif-display"
            style={{ fontSize: "19px", lineHeight: 1.2, letterSpacing: "-0.014em", color: "#111", fontWeight: 350, margin: "44px 0 14px" }}
          >
            Why this ad, and why now
          </h2>

          <p style={{ marginBottom: "20px" }}>
            I know the brand work moved in a different direction. <em style={{ fontStyle: "italic" }}>Give Us the Finger</em> was the right campaign for the cultural positioning: longevity over youth, presence over optimization, the index finger as identity marker. Nice&amp;Frank did exceptional work. That's brand. It builds the gravitational field.
          </p>

          <p style={{ marginBottom: "20px" }}>This is the other thing.</p>

          <p style={{ marginBottom: "12px" }}>Three things I noticed reading through Oura's recent communications:</p>

          <p style={{ marginBottom: "12px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>1. Dorothy Kilroy said it out loud.</strong> At Elevate Toronto, she confirmed the fastest-growing Oura demographic is women in their early twenties. Not corporate athletes. Not biohackers. Young women.
          </p>

          <p style={{ marginBottom: "12px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>2. The athletic partnerships keep stacking.</strong> Team USA through LA28. Lululemon's FURTHER women's ultramarathon. U.S. Soccer. The product has a natural home with women who are training seriously, even as the brand campaigns lean toward longevity and self-expression.
          </p>

          <p style={{ marginBottom: "20px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>3. Performance and longevity aren't opposites, they're the same insight at different ages.</strong> A 23-year-old marathon trainee and a 67-year-old tango dancer are both buying the same thing: the feedback loop that turns body data into better decisions. The ad above speaks to the first one in her language.
          </p>

          <p style={{ marginBottom: "20px" }}>
            That's the gap I tried to fill. Brand campaigns shape who people <em style={{ fontStyle: "italic" }}>want to become</em>. Performance creative converts the woman who's already there: running her tempo session, glancing at her readiness score before a hard workout, deciding whether today is push or recover.
          </p>

          {/* Section */}
          <h2
            className="font-serif-display"
            style={{ fontSize: "19px", lineHeight: 1.2, letterSpacing: "-0.014em", color: "#111", fontWeight: 350, margin: "44px 0 14px" }}
          >
            The strategic choices, briefly
          </h2>

          <p style={{ marginBottom: "12px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>Track athlete, not yoga influencer.</strong> Strava-tier serious. The kind of woman who'd choose Oura over an Apple Watch because she doesn't want notifications mid-stride. The 88% 12-month retention number from your team's communications suggests this user, once converted, doesn't leave.
          </p>

          <p style={{ marginBottom: "12px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>Nike grammar, Oura values.</strong> Sprint energy on the track, then the breath, then the stat check. The emotional beat sits in the <em style={{ fontStyle: "italic" }}>recovery</em> moment: the glance down at the ring after the effort. That's the Oura insight, not the Nike one. Performance is the hook; the data-informed pause is the message.
          </p>

          <p style={{ marginBottom: "12px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>Product hero on white.</strong> The ring rotating, isolated. Standard for premium hardware, deliberately so. It pulls the ad away from generic UGC and signals the same fashion-grade design language the Ceramic line introduced.
          </p>

          <p style={{ marginBottom: "20px" }}>
            <strong style={{ fontWeight: 500, color: "rgba(17,17,17,0.85)" }}>Final frame reserved for slogan.</strong> I left the closing slot deliberately empty. Whatever line your team is testing drops cleanly into the geometry.
          </p>

          {/* Section */}
          <h2
            className="font-serif-display"
            style={{ fontSize: "19px", lineHeight: 1.2, letterSpacing: "-0.014em", color: "#111", fontWeight: 350, margin: "44px 0 14px" }}
          >
            What this took to make
          </h2>

          <p style={{ marginBottom: "20px" }}>
            48 hours, in Paris. AI-native pipeline: image generation, image-to-video, voice, edit. End-to-end agentic.
          </p>

          <p style={{ marginBottom: "20px" }}>
            I'm not pitching the pipeline. The point of showing it is unit economics: a creative this caliber, in two days, means a brand at Oura's scale could test 30-50 angles per quarter against the standing top performer instead of 4-6. That's the real argument for AI-native creative: not cost, <em style={{ fontStyle: "italic" }}>iteration speed</em>.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Whoop is already moving fast on creative volume. The window for whoever converts first on this kind of production tempo isn't open forever.
          </p>

          {/* Section */}
          <h2
            className="font-serif-display"
            style={{ fontSize: "19px", lineHeight: 1.2, letterSpacing: "-0.014em", color: "#111", fontWeight: 350, margin: "44px 0 14px" }}
          >
            If any of this is useful
          </h2>

          <p style={{ marginBottom: "20px" }}>
            Use the ad, share it, ignore it, send me notes. All good outcomes. If it's worth a 20-minute call with whoever runs growth or creative on your team, I'd take that conversation. If not, I'll keep building and check back when there's a v2 worth showing.
          </p>

          <p style={{ marginBottom: "36px" }}>
            Either way, congrats on what you've built. The ring is on a lot of fingers in Paris too. Mine included.
          </p>

          {/* Signature */}
          <div style={{ paddingTop: "8px", borderTop: "1px solid rgba(17,17,17,0.08)" }}>
            <p
              className="font-serif-display"
              style={{ fontSize: "20px", color: "#111", marginBottom: "12px", fontWeight: 350, marginTop: "24px" }}
            >
              Ayoub Benouda
            </p>
            <p style={{ fontSize: "13px", color: "rgba(17,17,17,0.45)", lineHeight: 1.8 }}>
              <a href="mailto:ayoub@withluminalabs.com" style={link}>ayoub@withluminalabs.com</a>
              {" · "}
              <a href="https://x.com/ayoubtwelve" target="_blank" rel="noopener noreferrer" style={link}>@ayoubtwelve</a>
              {" · "}
              <a href="https://withluminalabs.com" target="_blank" rel="noopener noreferrer" style={link}>withluminalabs.com</a>
            </p>
          </div>

        </div>
      </div>

      {/* Right: sticky video, fully visible on white */}
      <div
        style={{
          width: "50vw",
          position: "sticky",
          top: 0,
          height: "100dvh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          style={{ height: "100%", width: "auto", maxWidth: "100%" }}
          onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
        />

        {/* Sound toggle */}
        <button
          onClick={() => setMuted(v => !v)}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            backdropFilter: "blur(8px)",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
          onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.35)")}
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
