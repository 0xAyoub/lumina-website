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

const VideoCard = ({
  videoRef,
  muted,
  onToggleMute,
  className = "",
  style = {},
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
  muted: boolean;
  onToggleMute: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={className} style={{ position: "relative", borderRadius: "7px", overflow: "hidden", ...style }}>
    <video
      ref={videoRef}
      autoPlay muted loop playsInline
      src="/oura-ad.mp4"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      onCanPlay={e => { (e.currentTarget as HTMLVideoElement).play().catch(() => {}); }}
    />
    <button
      onClick={onToggleMute}
      style={{ ...btnStyle, position: "absolute", bottom: "12px", right: "12px" }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.60)")}
      onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.36)")}
      aria-label={muted ? "Unmute" : "Mute"}
    >
      {muted ? <SoundOff /> : <SoundOn />}
    </button>
  </div>
);

const TomHale = () => {
  const [muted, setMuted] = useState(true);
  const desktopRef = useRef<HTMLVideoElement>(null);
  const mobileRef  = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (desktopRef.current) desktopRef.current.muted = muted;
    if (mobileRef.current)  mobileRef.current.muted  = muted;
  }, [muted]);

  const toggle = () => setMuted(v => !v);

  const body: React.CSSProperties = { fontSize: "15px", lineHeight: 1.85, color: "rgba(17,17,17,0.68)", marginBottom: "16px" };
  const beat: React.CSSProperties = { fontSize: "15px", lineHeight: 1.85, color: "#111", fontWeight: 400, marginBottom: "16px", letterSpacing: "-0.005em" };
  const h2s:  React.CSSProperties = { fontSize: "20px", lineHeight: 1.15, letterSpacing: "-0.014em", color: "#111", fontWeight: 350, margin: "0 0 16px" };

  return (
    <div className="flex flex-col md:flex-row" style={{ minHeight: "100dvh", background: "#fff" }}>

      {/* ── Letter column ── */}
      <div className="w-full md:w-[50vw]" style={{ padding: "40px 28px 72px", boxSizing: "border-box" }}>
        <div className="md:px-[28px]" style={{ maxWidth: "640px", margin: "0 auto" }}>

          {/* Greeting */}
          <h1 className="font-serif-display" style={{
            fontSize: "32px", lineHeight: 1.1, letterSpacing: "-0.020em",
            color: "#111", fontWeight: 350, marginBottom: "28px",
          }}>
            Hi Tom,
          </h1>

          <div style={{ maxWidth: "490px" }}>

            <p style={body}>Thanks for accepting the connect. Made you something while I was at it.</p>

            {/* Hook */}
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "#111", fontWeight: 400, marginBottom: "28px", letterSpacing: "-0.005em" }}>
              A 30 second spec ad for Oura. Performance creative, not brand. No ask attached.
            </p>

            {/* ── Mobile-only inline video ── */}
            <div className="md:hidden" style={{ margin: "0 0 40px" }}>
              <VideoCard
                videoRef={mobileRef}
                muted={muted}
                onToggleMute={toggle}
                style={{ aspectRatio: "9/16", maxHeight: "70vh", width: "auto" }}
              />
            </div>

            {/* ── Why this ad ── */}
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

            {/* ── The choices ── */}
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

            {/* ── What this took ── */}
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

            {/* ── Signature ── */}
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
      </div>

      {/* ── Right: sticky video — desktop only ── */}
      <div className="hidden md:flex" style={{
        width: "50vw",
        position: "sticky",
        top: 0,
        height: "100dvh",
        background: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <VideoCard
          videoRef={desktopRef}
          muted={muted}
          onToggleMute={toggle}
          style={{ height: "calc(100dvh - 40px)", aspectRatio: "9/16" }}
        />
      </div>

    </div>
  );
};

export default TomHale;
