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
    {/* Grain overlay */}
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
    document.title = "Madeleine — I watched your ads.";
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
          : { height: "calc(100dvh - 120px)", aspectRatio: "9/16" }
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
          width: isMobile ? "100%" : "50vw",
          padding: isMobile ? "72px 28px 80px" : "76px 64px 80px 80px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: isMobile ? "100%" : "490px" }}>

          {/* Mobile: video + tagline inline */}
          {isMobile && (
            <div style={{ marginBottom: "40px" }}>
              {videoNode}
              <p
                className="font-serif-display"
                style={{
                  fontSize: "22px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.018em",
                  color: "#111",
                  fontWeight: 350,
                  marginTop: "20px",
                  marginBottom: 0,
                }}
              >
                The label is the ad.
              </p>
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
            Madeleine —
          </h1>

          <p style={body}>
            Watched your last 53 ads on Meta. 30+ of them open with "50% of calories for growing
            babies should come from fat." Four creator videos run essentially the same script. The
            product is doing the heavy lifting. The creative isn't.
          </p>

          <p style={{ ...beat, marginBottom: "28px" }}>Here's the diagnosis.</p>

          <p style={body}>
            Nara doesn't exist because of milk fat percentage. Nara exists because Esther couldn't
            trust what was on the shelf. Every parent buying formula in 2026 turns the can around
            and reads the back — that's the actual purchase moment. Your ads sell from the front of
            the package. The brand was built on the back.
          </p>

          <p style={body}>
            The video above is one version of the ad I'd run instead. No voiceover, no music, no
            founder-explains-the-science. Just the moment a mother turns two cans around. The label
            does the work.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.85,
              color: "#111",
              fontWeight: 500,
              marginBottom: "28px",
              marginTop: "32px",
              letterSpacing: "-0.005em",
            }}
          >
            Why this matters now.
          </p>

          <p style={body}>
            Nara's first 12 months in market is when creative concentration costs you the most.
            Three winning angles fatigue inside Meta's auction faster than a small team can replace
            them. You need 30+ distinct narrative variants per month — not 30 variants of the same
            headline.
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.85,
              color: "#111",
              fontWeight: 500,
              marginBottom: "16px",
              marginTop: "32px",
              letterSpacing: "-0.005em",
            }}
          >
            What I'd build for you:
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {[
              "Map 8 narrative angles beyond “milk fat” and “clinical trial”",
              "30+ vertical video ads per month, segmented across angle and life stage",
              "Weekly performance read tied to CAC by angle, not by ad",
              "One strategy call per month with you. No account-manager middlemen.",
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

          <p style={{ ...beat, marginBottom: "32px" }}>
            €12,000/month. 3-month minimum. First batch in 7 days.
          </p>

          <p style={body}>
            If the diagnosis is wrong, the call's still worth 25 minutes — you'll get a sharper
            read on your creative position than the agencies pitching you this quarter.
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
            width: "50vw",
            position: "sticky",
            top: 0,
            height: "100dvh",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexShrink: 0,
            padding: "32px",
          }}
        >
          {videoNode}
          <p
            className="font-serif-display"
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              lineHeight: 1.2,
              letterSpacing: "-0.018em",
              color: "#111",
              fontWeight: 350,
              textAlign: "center",
            }}
          >
            The label is the ad.
          </p>
        </div>
      )}

    </div>
  );
};

export default Madeleine;
