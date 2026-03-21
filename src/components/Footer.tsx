const Footer = () => {
  return (
    <footer className="bg-foreground text-white">

      {/* Founder contact */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-12 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="text-[11px] font-medium uppercase tracking-[0.10em] text-white/25 mb-5">
          Talk to the founder
        </p>
        <a
          href="mailto:ayoub@withluminalabs.com"
          className="group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-70"
        >
          <span className="font-sans-display text-[22px] md:text-[32px] tracking-[-0.018em] text-white">
            ayoub@withluminalabs.com
          </span>
          <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </a>
        <p className="text-[12px] text-white/25 mt-3 leading-[1.6] max-w-[380px]">
          Have a project in mind? A question about pricing? Write directly — no sales team, no form.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <img src="/logo.svg" alt="Lumina" width={20} height={20} style={{ opacity: 0.35, borderRadius: "4px" }} />
          <span className="text-[10px] text-white/20">© 2026 Lumina Labs</span>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: "Work", href: "#work" },
            { label: "Process", href: "#process" },
            { label: "Results", href: "#results" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] text-white/20 transition-colors duration-200 hover:text-white/60"
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="text-[10px] text-white/15">Built without cameras.</span>
      </div>

    </footer>
  );
};

export default Footer;
