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
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.90)",
  fontSize: "14px",
  padding: "12px 0",
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
  color: "rgba(255,255,255,0.30)",
  marginBottom: "6px",
};

// ── Thank-you screen ──────────────────────────────────────────────────
const ThankYou = () => (
  <div className="min-h-[100dvh] flex flex-col bg-[#0c0c0c]">
    <div className="flex-shrink-0 px-6 md:px-12 pt-7">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[11px] text-white/35 hover:text-white/70 transition-colors duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5m0 0 7-7m-7 7 7 7"/>
        </svg>
        Back to Lumina
      </Link>
    </div>

    <div className="flex-shrink-0 px-6 md:px-12 pt-12 pb-10">
      <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-4">
        Request received
      </p>
      <h1 className="font-sans-display text-[26px] md:text-[40px] leading-[1.05] tracking-[-0.022em] text-white mb-4 max-w-[540px]">
        We'll be in touch<br />
        <span className="font-serif-display italic text-white/45">within 24–48 hours.</span>
      </h1>
      <p className="text-[13px] leading-[1.7] text-white/40 max-w-[440px]">
        In the meantime, schedule your demo below — we'll walk you through exactly what we'll build for your brand, live.
      </p>
    </div>

    <div className="flex-1 min-h-0 px-6 md:px-12 pb-8" style={{ minHeight: "480px" }}>
      <div className="w-full h-full rounded-[14px] overflow-hidden bg-white/[0.03] border border-white/[0.07]" style={{ minHeight: "480px" }}>
        <iframe
          src="https://cal.com/ayoub-benouda/15-min-creative-sprint-intro?embed=true&theme=dark&layout=column_view&hideBranding=1&hide_event_type_details=1"
          className="w-full h-full"
          style={{ minHeight: "480px" }}
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
  const [focused, setFocused]         = useState<string | null>(null);

  const toggleStyle = (s: string) =>
    setAdStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) return <ThankYou />;

  const fieldStyle = (id: string): React.CSSProperties => ({
    ...inputBase,
    borderBottomColor: focused === id ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.12)",
  });

  return (
    <div className="min-h-[100dvh] bg-[#0c0c0c] flex flex-col">

      {/* Back arrow */}
      <div className="flex-shrink-0 px-6 md:px-12 pt-7">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] text-white/35 hover:text-white/70 transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5m0 0 7-7m-7 7 7 7"/>
          </svg>
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-[640px]">

          {/* Header */}
          <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/30 mb-5">
            Free creative
          </p>
          <h1 className="font-sans-display text-[26px] md:text-[38px] leading-[1.05] tracking-[-0.022em] text-white mb-3">
            Get one mind-blowing<br />
            <span className="font-serif-display italic text-white/45">AI creative for $0.</span>
          </h1>
          <p className="text-[13px] leading-[1.7] text-white/35 mb-10 max-w-[480px]">
            Tell us about your brand and what you want. We'll produce one cinematic AI creative — for free, no commitment.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* Row 1: names */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>First name</label>
                <input
                  required type="text" value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  onFocus={() => setFocused("fn")} onBlur={() => setFocused(null)}
                  placeholder="Ayoub"
                  style={fieldStyle("fn")}
                  className="placeholder:text-white/20"
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
                  className="placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Row 2: company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>Company name</label>
                <input
                  required type="text" value={company}
                  onChange={e => setCompany(e.target.value)}
                  onFocus={() => setFocused("co")} onBlur={() => setFocused(null)}
                  placeholder="Your Brand"
                  style={fieldStyle("co")}
                  className="placeholder:text-white/20"
                />
              </div>
              <div>
                <label style={labelStyle}>Website URL</label>
                <input
                  type="url" value={companyUrl}
                  onChange={e => setCompanyUrl(e.target.value)}
                  onFocus={() => setFocused("url")} onBlur={() => setFocused(null)}
                  placeholder="https://yourbrand.com"
                  style={fieldStyle("url")}
                  className="placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Row 3: contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocused("em")} onBlur={() => setFocused(null)}
                  placeholder="you@brand.com"
                  style={fieldStyle("em")}
                  className="placeholder:text-white/20"
                />
              </div>
              <div>
                <label style={labelStyle}>Phone number</label>
                <input
                  type="tel" value={phone}
                  onChange={e => setPhone(e.target.value)}
                  onFocus={() => setFocused("ph")} onBlur={() => setFocused(null)}
                  placeholder="+33 6 00 00 00 00"
                  style={fieldStyle("ph")}
                  className="placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Ad style */}
            <div>
              <label style={labelStyle}>Ad style</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {AD_STYLES.map(s => (
                  <button
                    key={s} type="button"
                    onClick={() => toggleStyle(s)}
                    className="px-4 py-1.5 rounded-full text-[12px] transition-all duration-150"
                    style={{
                      border: adStyles.includes(s)
                        ? "1px solid rgba(255,255,255,0.55)"
                        : "1px solid rgba(255,255,255,0.12)",
                      color: adStyles.includes(s)
                        ? "rgba(255,255,255,0.90)"
                        : "rgba(255,255,255,0.40)",
                      background: adStyles.includes(s)
                        ? "rgba(255,255,255,0.07)"
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
                placeholder="Tell us about your product, target audience, tone, references, any creative direction. The more detail, the better the result."
                rows={4}
                style={{
                  ...fieldStyle("desc"),
                  resize: "none",
                  lineHeight: "1.7",
                }}
                className="placeholder:text-white/20"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto text-[12px] font-medium bg-white text-black px-8 py-3 rounded-[8px] transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
              >
                Get my free creative →
              </button>
              <p className="text-[11px] text-white/25 mt-3">
                No credit card. No commitment. One deliverable, 48h.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default FreeCreative;
