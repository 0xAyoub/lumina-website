import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// ── Sound icons ───────────────────────────────────────────────────────
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

// ── Video ─────────────────────────────────────────────────────────────
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
  <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", transform: "translateZ(0)", ...style }}>
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      src="/nara-ad.mp4"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
    <button
      onClick={onToggle}
      style={{
        position: "absolute",
        bottom: "12px",
        right: "12px",
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
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.60)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.36)")}
      aria-label={muted ? "Unmute" : "Mute"}
    >
      {muted ? <SoundOff /> : <SoundOn />}
    </button>
  </div>
);

// ── Cal embed ─────────────────────────────────────────────────────────
const CalBlock = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "madeleine" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="madeleine"
      calLink="ayoublumina/growth"
      style={{ width: "100%", minHeight: "600px", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
};

// ── Page ──────────────────────────────────────────────────────────────
const Madeleine = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  const toggle = () => setMuted((v) => !v);

  useEffect(() => {
    document.title = "Madeleine, I watched your ads.";
    document.querySelector('meta[name="description"]')
      ?.setAttribute("content", "A diagnosis and a proposal for Nara Baby.");
    return () => {
      document.title = "Lumina Labs | Advertising the future.";
      document.querySelector('meta[name="description"]')
        ?.setAttribute("content", "Lumina Labs | Advertising the future.");
    };
  }, []);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const body: React.CSSProperties = {
    fontSize: "15px",
    lineHeight: 1.85,
    color: "rgba(17,17,17,0.65)",
    marginBottom: "16px",
  };
  const beat: React.CSSProperties = {
    fontSize: "15px",
    lineHeight: 1.85,
    color: "#111",
    fontWeight: 400,
    marginBottom: "16px",
    letterSpacing: "-0.005em",
  };

  const videoNode = (
    <Video
      videoRef={videoRef}
      muted={muted}
      onToggle={toggle}
      style={
        isMobile
          ? { aspectRatio: "9/16", maxHeight: "70vh", width: "auto" }
          : { height: "calc(100dvh - 80px)", aspectRatio: "9/16" }
      }
    />
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        minHeight: "100dvh",
        background: "#fff",
      }}
    >
      {/* Logo */}
      <a
        href="https://withluminalabs.com"
        style={{
          position: "fixed",
          top: "22px",
          left: isMobile ? "24px" : "32px",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          opacity: 0.85,
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
        aria-label="Lumina"
      >
        <img src="/logo.svg" alt="Lumina" style={{ height: "24px", width: "auto", display: "block" }} />
      </a>

      {/* ── Letter column ── */}
      <div
        style={{
          width: isMobile ? "100%" : "58vw",
          padding: isMobile ? "72px 28px 80px" : "76px 64px 80px 80px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: isMobile ? "100%" : "560px" }}>

          {/* Mobile: video inline */}
          {isMobile && (
            <div style={{ marginBottom: "40px" }}>
              {videoNode}
            </div>
          )}

          {/* Salutation */}
          <h1
            className="font-serif-display"
            style={{
              fontSize: "32px",
              lineHeight: 1.1,
              letterSpacing: "-0.020em",
              color: "#111",
              fontWeight: 350,
              marginBottom: "28px",
            }}
          >
            Madeleine,
          </h1>

          <p style={body}>
            Watched your 53 active ads. 31 open with the milk-fat stat. 4 creator videos run the
            same "I finally found a formula I trust" script.
          </p>

          <p style={body}>
            Your product is doing the heavy lifting. <strong style={{ color: "#111", fontWeight: 500 }}>Your creative isn't.</strong>
          </p>

          <p style={body}>
            The ad above is what would run instead. A mother turns two cans around. Reads the back
            of the competitor. Reads the back of Nara. No voiceover. No music. The label does the
            work.
          </p>

          <p style={body}>
            Nara exists because Esther couldn't trust what was on the shelf. That moment, a parent
            reading the back of a can, is when they actually decide. Your ads sell from the front.
            Your brand was built on the back.
          </p>

          <p style={body}>
            Bobbie spent September trying to discredit your formula. Reviewed.com just framed Nara
            as the research-driven choice against celebrity-led competitors. That's the brand
            argument winning in earned media.{" "}
            <strong style={{ color: "#111", fontWeight: 500 }}>It's not the one your paid creative is making yet.</strong>
          </p>

          <p style={body}>
            I built the production system behind the ad above. My co-founder Margot trained at Sup
            de Pub in Paris and trades media at Publicis. She runs creative direction. We're taking
            three brands this quarter.
          </p>

          <p style={{ ...beat, marginBottom: "16px", marginTop: "32px" }}>
            Here's what you'd get:
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
            {[
              "4 hero concepts every month, each a different angle",
              "40 variants built only on what's performing",
              "Weekly read on hook rate and CAC, in your inbox Friday",
              "Monthly strategy call with me, no account managers",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: "10px",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,0.65)",
                }}
              >
                <span style={{ color: "rgba(17,17,17,0.30)", flexShrink: 0, marginTop: "2px" }}>–</span>
                {item}
              </li>
            ))}
          </ul>

          <p style={{ ...body, marginBottom: "0px" }}>
            <strong style={{ color: "#111", fontWeight: 500 }}>First batch in 7 days.</strong> Worth 25 minutes?
          </p>

          {/* Sign-off */}
          <div style={{ paddingTop: "28px", marginTop: "12px", marginBottom: "48px" }}>
            <p
              className="font-serif-display"
              style={{
                fontSize: "18px",
                color: "#111",
                fontWeight: 350,
                letterSpacing: "-0.012em",
                marginBottom: 0,
              }}
            >
              Ayoub
            </p>
          </div>

          {/* CTA — cal inline, no headline */}
          <CalBlock />

          {/* Footer */}
          <div style={{ paddingTop: "24px", marginTop: "48px" }}>
            <p style={{ fontSize: "13px", color: "rgba(17,17,17,0.35)", margin: 0 }}>
              <a
                href="mailto:ayoub@withluminalabs.com"
                style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid rgba(17,17,17,0.18)", paddingBottom: "1px" }}
              >
                ayoub@withluminalabs.com
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* ── Desktop sticky right panel ── */}
      {!isMobile && (
        <div
          style={{
            width: "42vw",
            position: "sticky",
            top: 0,
            height: "100dvh",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            padding: "40px",
          }}
        >
          {videoNode}
        </div>
      )}

    </div>
  );
};

export default Madeleine;
