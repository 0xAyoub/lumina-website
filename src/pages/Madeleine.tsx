import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

// ── Video placeholder ─────────────────────────────────────────────────
const VideoPlaceholder = ({ style }: { style?: React.CSSProperties }) => (
  <div
    style={{
      position: "relative",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "rgba(17,17,17,0.05)",
      border: "1px solid rgba(17,17,17,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        opacity: 0.6,
        pointerEvents: "none",
      }}
    />
    <p
      style={{
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: "rgba(17,17,17,0.22)",
      }}
    >
      Video coming
    </p>
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
    <VideoPlaceholder
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
        <div style={{ maxWidth: isMobile ? "100%" : "490px" }}>

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
            Watched your 53 active ads on Meta. 31 of them lead with the milk-fat stat. 4 creator
            videos run the same "I finally found a formula I trust" script. The product is doing
            the heavy lifting. The creative isn't.
          </p>

          <p style={{ ...beat, marginBottom: "28px" }}>The ad above is what I'd run instead.</p>

          <p style={body}>
            A mother turns two cans around. Reads the back of the competitor. Reads the back of
            Nara. No voiceover. No music. The label does the work.
          </p>

          <p style={body}>
            Nara was built because Esther couldn't trust what was on the shelf. That moment, a
            parent reading the back of a can, is the actual purchase decision. Your ads sell from
            the front. The brand was built on the back.
          </p>

          <p style={body}>
            First 12 months in market is when creative concentration costs you the most. You need
            30+ distinct angles per month. Not 30 versions of the same headline.
          </p>

          <p style={{ ...beat, marginBottom: "16px", marginTop: "32px" }}>
            What I'd build:
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {[
              "4 hero concepts per month. Each a distinct angle beyond milk fat.",
              "40 variants across them. Allocated by performance signal, not guesswork.",
              "Weekly read on hook rate and CAC by angle.",
              "Monthly strategy call with me. No account managers.",
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

          <p style={{ ...beat, marginBottom: "16px" }}>
            8,000 euros per month. 3-month minimum. First batch in 7 days.
          </p>

          <p style={{ ...body, marginBottom: "0px" }}>
            25 minutes if the diagnosis is worth a call.
          </p>

          {/* Sign-off */}
          <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)", paddingTop: "28px", marginTop: "12px", marginBottom: "64px" }}>
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

          {/* CTA block */}
          <div>
            <p
              className="font-sans-display"
              style={{
                fontSize: "22px",
                lineHeight: 1.15,
                letterSpacing: "-0.016em",
                color: "#111",
                fontWeight: 400,
                marginBottom: "8px",
              }}
            >
              Book 25 minutes.
            </p>
            <p style={{ fontSize: "13px", color: "rgba(17,17,17,0.40)", marginBottom: "24px", lineHeight: 1.6 }}>
              Pick any open slot below.
            </p>
            <CalBlock />
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(17,17,17,0.07)", paddingTop: "24px", marginTop: "48px" }}>
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
