import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.svg" alt="Lumina" width={20} height={20} style={{ opacity: 0.8 }} />
              <span className="text-[13px] font-medium" style={{ color: "#111111" }}>Lumina</span>
            </div>
            <p className="text-[12px] leading-[1.7]" style={{ color: "rgba(17,17,17,0.45)", maxWidth: "200px" }}>
              AI-directed creative for DTC brands on Meta.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
              Pages
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Work", href: "/work" },
                { label: "Process", href: "/process" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[12px] transition-colors duration-200"
                  style={{ color: "rgba(17,17,17,0.50)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.50)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Start */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
              Start
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Get a free ad", href: "/free" },
                { label: "Start a pilot", href: "/free" },
                { label: "Book a call", href: "/free" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[12px] transition-colors duration-200"
                  style={{ color: "rgba(17,17,17,0.50)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.50)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.10em] mb-4" style={{ color: "rgba(17,17,17,0.35)" }}>
              Contact
            </p>
            <a
              href="mailto:ayoub@withluminalabs.com"
              className="text-[12px] transition-colors duration-200 block"
              style={{ color: "rgba(17,17,17,0.50)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.50)")}
            >
              ayoub@withluminalabs.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <span className="text-[10px]" style={{ color: "rgba(17,17,17,0.28)" }}>© 2026 Lumina Labs</span>
          <span className="text-[10px]" style={{ color: "rgba(17,17,17,0.20)" }}>
            Built for DTC brands that live and die by Meta creative.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
