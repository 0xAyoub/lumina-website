import { useState } from "react";
import { Link } from "react-router-dom";

const AD_STYLES = [
  "UGC", "Cinematic", "Cartoon", "Product Hero", "Lifestyle",
  "Motion Graphics", "Brand Film", "Other",
];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.10)",
  color: "rgba(0,0,0,0.85)",
  fontSize: "14px",
  padding: "10px 0",
  outline: "none",
  fontFamily: "inherit",
  letterSpacing: "-0.01em",
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 500,
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  color: "rgba(0,0,0,0.28)",
  marginBottom: "5px",
};

// ── Thank-you screen ──────────────────────────────────────────────────
const ThankYou = () => (
  <div className="min-h-[100dvh] md:h-[100dvh] flex flex-col bg-white">
    <div className="flex-shrink-0 px-6 md:px-12 pt-7">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[11px] text-black/35 hover:text-black/70 transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5m0 0 7-7m-7 7 7 7"/>
        </svg>
        Back to Lumina
      </Link>
    </div>

    <div className="flex-shrink-0 px-6 md:px-12 pt-10 pb-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-4">
        Request received
      </p>
      <h1 className="font-sans-display text-[24px] md:text-[40px] leading-[1.05] tracking-[-0.022em] text-black mb-3 max-w-[540px]">
        We'll be in touch<br />
        <span className="font-serif-display italic text-black/35">within 24–48 hours.</span>
      </h1>
      <p className="text-[13px] leading-[1.7] text-black/40 max-w-[440px]">
        In the meantime, schedule your demo below — we'll walk you through exactly what we'll build for your brand, live.
      </p>
    </div>

    <div className="flex-1 min-h-0 px-6 md:px-12 pb-8" style={{ minHeight: "360px" }}>
      <div className="w-full h-full rounded-[14px] overflow-hidden bg-black/[0.02] border border-black/[0.06]" style={{ minHeight: "360px" }}>
        <iframe
          src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=light&layout=column_view&hideBranding=1&hide_event_type_details=1"
          className="w-full h-full"
          style={{ minHeight: "360px" }}
          frameBorder="0"
          title="Schedule your demo"
          allow="payment"
        />
      </div>
    </div>
  </div>
);

// ── Form page ─────────────────────────────────────────────────────────
const FreeCreative = () => {
  const [firstName, setFirstName]     = useState("");
  const [lastName, setLastName]       = useState("");
  const [company, setCompany]         = useState("");
  const [companyUrl, setCompanyUrl]   = useState("");
  const [email, setEmail]             = useState("");
  const [phone, setPhone]             = useState("");
  const [adStyles, setAdStyles]       = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted]     = useState(false);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState<string | null>(null);
  const [focused, setFocused]         = useState<string | null>(null);

  const toggleStyle = (s: string) =>
    setAdStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/ayoub@withluminalabs.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          _subject: `Free creative request — ${firstName} ${lastName} · ${company}`,
          "First name": firstName,
          "Last name": lastName,
          "Company": company,
          "Website": companyUrl || "—",
          "Email": email,
          "Phone": phone || "—",
          "Ad styles": adStyles.length ? adStyles.join(", ") : "—",
          "Brief": description,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <ThankYou />;

  const fieldStyle = (id: string): React.CSSProperties => ({
    ...inputBase,
    borderBottomColor: focused === id ? "rgba(0,0,0,0.40)" : "rgba(0,0,0,0.10)",
  });

  return (
    // Mobile: natural scroll. Desktop: locked to 100dvh
    <div className="min-h-[100dvh] md:h-[100dvh] bg-white flex flex-col md:overflow-hidden">

      {/* Top bar */}
      <div className="flex-shrink-0 flex items-center px-6 md:px-12 pt-6 pb-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] text-black/35 hover:text-black/70 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5m0 0 7-7m-7 7 7 7"/>
          </svg>
          Back
        </Link>
      </div>

      {/* Main */}
      <div className="flex-1 min-h-0 flex flex-col md:flex-row">

        {/* Left: title — compact on mobile, centered on desktop */}
        <div className="flex-shrink-0 md:flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-6 pb-2 md:py-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-black/30 mb-3 md:mb-4">
            Free creative
          </p>
          <h1 className="font-sans-display text-[22px] sm:text-[26px] md:text-[30px] lg:text-[38px] leading-[1.06] tracking-[-0.022em] text-black mb-2 md:mb-3 max-w-[420px]">
            Get one mind-blowing<br />
            <span className="font-serif-display italic text-black/35">AI creative for $0.</span>
          </h1>
          <p className="text-[12px] md:text-[13px] leading-[1.7] text-black/35 max-w-[320px] md:max-w-[340px]">
            Fill in the form — we'll produce one cinematic AI creative, free, no commitment.
          </p>
        </div>

        {/* Divider — desktop only */}
        <div className="hidden md:block w-px bg-black/[0.06] my-10" />

        {/* Right: form — scrollable on mobile, centered on desktop */}
        <div className="flex-1 min-h-0 md:overflow-y-auto px-6 md:px-12 lg:px-16 pt-6 pb-10 md:py-10 flex flex-col md:justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 w-full max-w-[480px] md:mx-auto">

            {/* Names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>First name</label>
                <input
                  required type="text" value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  onFocus={() => setFocused("fn")} onBlur={() => setFocused(null)}
                  placeholder="Ayoub"
                  style={fieldStyle("fn")}
                  className="placeholder:text-black/20"
                />
              </div>
              <div>
                <label style={labelStyle}>Last name</label>
                <input
                  required type="text" value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  onFocus={() => setFocused("ln")} onBlur={() => setFocused(null)}
                  placeholder="Benouda"
                  style={fieldStyle("ln")}
                  className="placeholder:text-black/20"
                />
              </div>
            </div>

            {/* Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Company</label>
                <input
                  required type="text" value={company}
                  onChange={e => setCompany(e.target.value)}
                  onFocus={() => setFocused("co")} onBlur={() => setFocused(null)}
                  placeholder="Your Brand"
                  style={fieldStyle("co")}
                  className="placeholder:text-black/20"
                />
              </div>
              <div>
                <label style={labelStyle}>Website</label>
                <input
                  type="url" value={companyUrl}
                  onChange={e => setCompanyUrl(e.target.value)}
                  onFocus={() => setFocused("url")} onBlur={() => setFocused(null)}
                  placeholder="https://yourbrand.com"
                  style={fieldStyle("url")}
                  className="placeholder:text-black/20"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocused("em")} onBlur={() => setFocused(null)}
                  placeholder="you@brand.com"
                  style={fieldStyle("em")}
                  className="placeholder:text-black/20"
                />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  type="tel" value={phone}
                  onChange={e => setPhone(e.target.value)}
                  onFocus={() => setFocused("ph")} onBlur={() => setFocused(null)}
                  placeholder="+33 6 00 00 00 00"
                  style={fieldStyle("ph")}
                  className="placeholder:text-black/20"
                />
              </div>
            </div>

            {/* Ad style */}
            <div>
              <label style={labelStyle}>Ad style</label>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {AD_STYLES.map(s => (
                  <button
                    key={s} type="button"
                    onClick={() => toggleStyle(s)}
                    className="px-3.5 py-1 rounded-full text-[11px] transition-all duration-150"
                    style={{
                      border: adStyles.includes(s)
                        ? "1px solid rgba(0,0,0,0.50)"
                        : "1px solid rgba(0,0,0,0.12)",
                      color: adStyles.includes(s)
                        ? "rgba(0,0,0,0.85)"
                        : "rgba(0,0,0,0.38)",
                      background: adStyles.includes(s)
                        ? "rgba(0,0,0,0.05)"
                        : "transparent",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label style={labelStyle}>Describe what you want</label>
              <textarea
                required value={description}
                onChange={e => setDescription(e.target.value)}
                onFocus={() => setFocused("desc")} onBlur={() => setFocused(null)}
                placeholder="Product, target audience, tone, references, creative direction..."
                rows={3}
                style={{
                  ...fieldStyle("desc"),
                  resize: "none",
                  lineHeight: "1.7",
                }}
                className="placeholder:text-black/20"
              />
            </div>

            {/* Submit */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="text-[12px] font-medium bg-black text-white px-7 py-2.5 rounded-[8px] transition-all duration-200 hover:opacity-75 active:scale-[0.98] disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Get my free creative →"}
                </button>
                <p className="text-[11px] text-black/25">
                  No credit card. 48h delivery.
                </p>
              </div>
              {error && (
                <p className="text-[11px] text-red-500 mt-2">{error}</p>
              )}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default FreeCreative;
