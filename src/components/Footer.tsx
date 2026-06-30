import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="w-full px-6 md:px-12 lg:px-20 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.svg" alt="Lumina" width={18} height={18} style={{ opacity: 0.7 }} />
              <span className="text-[13px] font-medium" style={{ color: "#111111" }}>Lumina</span>
            </div>
            <p className="text-[12px] leading-[1.7]" style={{ color: "rgba(17,17,17,0.40)", maxWidth: "200px" }}>
              The studio between the models and your brand.
            </p>
          </div>

          {/* Nav + Contact */}
          <div className="flex gap-12 md:gap-16">
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Work", href: "/work" },
                { label: "Process", href: "/process" },
                { label: "Pricing", href: "/pricing" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[12px] transition-opacity hover:opacity-100"
                  style={{ color: "rgba(17,17,17,0.45)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.45)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:ayoub@withluminalabs.com"
                className="text-[12px] transition-colors duration-200"
                style={{ color: "rgba(17,17,17,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.45)")}
              >
                ayoub@withluminalabs.com
              </a>
              <Link
                to="/free"
                className="text-[12px] transition-colors duration-200"
                style={{ color: "rgba(17,17,17,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111111")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.45)")}
              >
                Get a free ad
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
          <span className="text-[10px]" style={{ color: "rgba(17,17,17,0.25)" }}>© 2026 Lumina Labs</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
