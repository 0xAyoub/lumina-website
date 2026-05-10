import { useEffect, useRef, useState } from "react";

const A = ({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    style={{
      color: "inherit",
      textDecoration: "none",
      borderBottom: "1px solid rgba(17,17,17,0.22)",
      paddingBottom: "1px",
      transition: "border-color 0.15s",
    }}
    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.55)")}
    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.22)")}
  >
    {children}
  </a>
);

const btnStyle: React.CSSProperties = {
  background: "rgba(0,0,0,0.36)",
  border: "none",
  borderRadius: "50%",
  width: "34px",
  height: "34px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#fff",
  backdropFilter: "blur(10px)",
  transition: "background 0.18s",
};

const SoundOn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);

const SoundOff = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <line x1="23" y1="9" x2="17" y2="15"/>
    <line x1="17" y1="9" x2="23" y2="15"/>
  </svg>
);

// ── Single video element, repositioned by isMobile ──────────────────────────
const Video = ({
  videoRef,
  muted,
  onToggle,
  style,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  muted: boolean;
  onToggle: () => void;
  style?: React.CSSProperties;
}) => (
  <div style={{ position: "relative", borderRadius: "7px", overflow: "hidden", ...style }}>
    <video
      ref={videoRef}
      autoPlay
      muted          // initial attribute only — kept in sync via DOM ref, never re-applied by React
      loop
      playsInline
      src="/oura-ad.mp4"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
    <button
      onClick={onToggle}
      style={{ ...btnStyle, position: "absolute", bottom: "12px", right: "12px" }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.60)")}
      onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.36)")}
      aria-label={muted ? "Unmute" : "Mute"}
    >
      {muted ? <SoundOff /> : <SoundOn />}
    </button>
  </div>
);

// ────────────────────────────────────────────────────────────────────────────
const TomHale = () => {
  const [muted, setMuted]       = useState(true);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // Viewport tracking — determines which slot the single video lives in
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  // Autoplay once after mount (avoids onCanPlay re-triggering on mute change)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  // Muted — write directly to DOM, never through React prop, so video never restarts
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const toggle = () => setMuted(v => !v);

  const body: React.CSSProperties = { fontSize: "15px", lineHeight: 1.85, color: "rgba(17,17,17,0.68)", marginBottom: "16px" };
  const beat: React.CSSProperties = { fontSize: "15px", lineHeight: 1.85, color: "#111", fontWeight: 400, marginBottom: "16px", letterSpacing: "-0.005em" };
  const h2s:  React.CSSProperties = { fontSize: "20px", lineHeight: 1.15, letterSpacing: "-0.014em", color: "#111", fontWeight: 350, margin: "0 0 16px" };

  const videoNode = (
    <Video
      videoRef={videoRef}
      muted={muted}
      onToggle={toggle}
      style={isMobile
        ? { aspectRatio: "9/16", maxHeight: "70vh", width: "auto" }
        : { height: "calc(100dvh - 40px)", aspectRatio: "9/16" }
      }
    />
  );

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "100dvh", background: "#fff" }}>

      {/* ── Sticky logo ── */}
      <a
        href="https://withluminalabs.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          margin: "10px",
          opacity: 0.75,
          transition: "opacity 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
        aria-label="Lumina"
      >
        <img src="/logo.svg" alt="Lumina" style={{ height: "22px", width: "auto", display: "block" }} />
      </a>

      {/* ── Letter column ── */}
      <div
        style={{
          width: isMobile ? "100%" : "50vw",
          padding: isMobile ? "64px 28px 72px" : "64px 56px 72px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: isMobile ? "100%" : "490px" }}>

          <h1 className="font-serif-display" style={{
            fontSize: "32px", lineHeight: 1.1, letterSpacing: "-0.020em",
            color: "#111", fontWeight: 350, marginBottom: "28px",
          }}>
            Hi Tom,
          </h1>

          <p style={body}>Thanks for accepting the connect. Made you something while I was at it.</p>

          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#111", fontWeight: 400, marginBottom: "28px", letterSpacing: "-0.005em" }}>
            A 30 second spec ad for Oura. Performance creative, not brand. No ask attached.
          </p>

          {/* Mobile: video appears here, right after the hook */}
          {isMobile && <div style={{ marginBottom: "40px" }}>{videoNode}</div>}

          <h2 className="font-serif-display" style={h2s}>Why this ad</h2>

          <p style={body}>
            I know the brand work moved in a different direction.{" "}
            <em style={{ fontStyle: "italic" }}>Give Us the Finger</em> nailed the cultural positioning, longevity over youth.
            Nice&amp;Frank did exceptional work.
          </p>

          <p style={beat}>This is the other thing.</p>

          <p style={body}>
            Dorothy Kilroy said it at Elevate Toronto. The fastest growing Oura demographic is women
            in their early twenties. The Lululemon FURTHER partnership, Team USA through LA28,
            U.S. Soccer. The product has a natural home with women training seriously, even as
            the brand leans longevity.
          </p>

          <p style={body}>
            Brand campaigns shape who people want to become. Performance creative converts the woman
            who is already there. Running her tempo session, glancing at her readiness score before
            a hard workout.
          </p>

          <p style={{ ...beat, marginBottom: "48px" }}>That is the gap I tried to fill.</p>

          <h2 className="font-serif-display" style={h2s}>The choices</h2>

          <p style={body}>
            Track athlete, not yoga influencer. Strava tier serious. The user who would choose Oura
            over an Apple Watch because she does not want notifications mid stride.
          </p>

          <p style={body}>
            Nike grammar, Oura values. The emotional beat sits in the recovery moment, the glance
            down at the ring after the effort. Performance is the hook. The data informed pause
            is the message.
          </p>

          <p style={{ ...body, marginBottom: "48px" }}>
            Final frame left empty. Whatever line your team is testing drops cleanly into the geometry.
          </p>

          <h2 className="font-serif-display" style={h2s}>What this took</h2>

          <p style={body}>A few days, AI native pipeline I have been building.</p>

          <p style={body}>
            The point is not cost. It is iteration speed. A creative this caliber in two days means
            testing thirty angles per quarter against the top performer, not four.
          </p>

          <p style={body}>
            Use it, ignore it, send notes. All good outcomes. If it is worth twenty minutes with
            whoever runs growth or creative, I would take that conversation.
          </p>

          <p style={{ ...body, marginBottom: "48px" }}>
            Either way, the ring is on a lot of fingers in Paris. Mine included.
          </p>

          <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)", paddingTop: "28px" }}>
            <p className="font-serif-display" style={{
              fontSize: "18px", color: "#111", fontWeight: 350,
              letterSpacing: "-0.012em", marginBottom: "14px",
            }}>
              Ayoub Benouda
            </p>
            <div style={{ fontSize: "13px", lineHeight: 2.0, color: "rgba(17,17,17,0.45)" }}>
              <p style={{ margin: 0 }}><A href="mailto:ayoub@withluminalabs.com" external={false}>ayoub@withluminalabs.com</A></p>
              <p style={{ margin: 0 }}><A href="https://x.com/ayoubtwelve">@ayoubtwelve</A></p>
              <p style={{ margin: 0 }}><A href="https://withluminalabs.com">withluminalabs.com</A></p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Desktop: sticky right panel ── */}
      {!isMobile && (
        <div style={{
          width: "50vw",
          position: "sticky",
          top: 0,
          height: "100dvh",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}>
          {videoNode}
        </div>
      )}

    </div>
  );
};

export default TomHale;
