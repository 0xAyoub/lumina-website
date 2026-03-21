const Footer = () => {
  return (
    <footer className="bg-[#111] w-full px-6 md:px-12 lg:px-20 py-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <img src="/logo.svg" alt="Lumina" width={20} height={20} style={{ opacity: 0.3, borderRadius: "4px" }} />
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
    </footer>
  );
};

export default Footer;
