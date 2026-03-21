const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-[60px] md:py-[80px]">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between gap-8 mb-12">
          <div>
            <p className="font-serif-display text-[15px] text-white mb-2">Lumina</p>
            <p className="text-[11px] text-white/30">AI-native creative for DTC</p>
          </div>

          <div className="flex gap-6">
            {[
              { label: "Work", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "About", href: "#about" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-white/30 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <a
              href="mailto:hello@lumina.agency"
              className="text-[11px] text-white/30 transition-colors duration-200 hover:text-white"
            >
              hello@lumina.agency
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          <p className="text-[10px] text-white/15">© 2026 Lumina</p>
          <p className="text-[10px] text-white/15">Built without cameras</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
