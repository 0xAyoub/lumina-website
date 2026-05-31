const Footer = () => {
  return (
    <footer className="bg-white w-full px-6 md:px-12 lg:px-20 py-6 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="flex items-center gap-6">
        <img src="/logo.svg" alt="Lumina" width={20} height={20} style={{ opacity: 0.25, borderRadius: 0 }} />
        <span className="text-[10px]" style={{ color: "rgba(17,17,17,0.30)" }}>© 2026 Lumina Labs</span>
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
            className="text-[10px] transition-colors duration-200"
            style={{ color: "rgba(17,17,17,0.30)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#111")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(17,17,17,0.30)")}
          >
            {link.label}
          </a>
        ))}
      </div>
      <span className="text-[10px]" style={{ color: "rgba(17,17,17,0.20)" }}>Built for DTC brands that live and die by Meta creative.</span>
    </footer>
  );
};

export default Footer;
