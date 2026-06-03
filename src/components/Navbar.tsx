import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const intersectingDark = useRef(new Set<Element>());

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setIsHidden(false);
    const hideSection = document.querySelector('[data-navbar-hide="true"]') as HTMLElement | null;
    if (!hideSection) return;
    const onScroll = () => {
      if (window.innerWidth < 768) return;
      const rect = hideSection.getBoundingClientRect();
      setIsHidden(rect.top <= 0 && rect.bottom >= window.innerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) {
      setIsDarkSection(false);
      return;
    }
    const darkSections = document.querySelectorAll('[data-navbar-dark="true"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersectingDark.current.add(entry.target);
          else intersectingDark.current.delete(entry.target);
        });
        setIsDarkSection(intersectingDark.current.size > 0);
      },
      { rootMargin: "0px 0px -88% 0px", threshold: 0 }
    );
    darkSections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, location.pathname]);

  const isDark = isHome && isDarkSection && !scrolled;
  const textColor = isDark ? "rgba(255,255,255,0.65)" : "rgba(17,17,17,0.55)";
  const textColorHover = isDark ? "#ffffff" : "#111111";
  const btnBg = isDark ? "#ffffff" : "#111111";
  const btnText = isDark ? "#111111" : "#ffffff";
  const bgColor = isDark
    ? "rgba(0,0,0,0.12)"
    : "rgba(255,255,255,0.92)";

  return (
    <>
      <nav
        className="fixed z-50 flex items-center justify-between h-11"
        style={{
          top: "10px",
          left: "10px",
          right: "10px",
          backgroundColor: bgColor,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          paddingLeft: "16px",
          paddingRight: "12px",
          transform: isHidden ? "translateY(calc(-100% - 20px))" : "translateY(0)",
          transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1), background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Lumina"
            width={22}
            height={22}
            style={{ opacity: isDark ? 0.9 : 1, transition: "opacity 0.3s ease" }}
          />
          <span
            className="text-[13px] font-medium tracking-[-0.01em]"
            style={{ color: isDark ? "rgba(255,255,255,0.9)" : "#111111", transition: "color 0.3s ease" }}
          >
            Lumina
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-[12px] font-medium tracking-[0.01em] transition-colors duration-200"
                style={{
                  color: isActive
                    ? isDark ? "#ffffff" : "#111111"
                    : textColor,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = textColorHover)}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? (isDark ? "#ffffff" : "#111111") : textColor)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/free"
            className="text-[11px] font-medium px-4 py-2 transition-opacity duration-200 hover:opacity-75"
            style={{ backgroundColor: btnBg, color: btnText, transition: "background-color 0.3s ease, color 0.3s ease" }}
          >
            Get a free ad
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.8)" : "#111111",
              transform: menuOpen ? "translateY(3px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: isDark ? "rgba(255,255,255,0.8)" : "#111111",
              transform: menuOpen ? "translateY(-3px) rotate(-45deg)" : "none",
              opacity: menuOpen ? 1 : 1,
            }}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 bg-white flex flex-col md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      >
        <div className="flex flex-col pt-24 px-8 pb-10 h-full">
          <div className="flex flex-col flex-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-sans-display text-[40px] leading-none py-5 tracking-[-0.025em]"
                style={{
                  color: location.pathname === link.href ? "#111111" : "rgba(17,17,17,0.30)",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                  transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/free"
            className="text-[13px] font-medium px-6 py-4 text-center bg-black text-white mt-6"
          >
            Get a free ad →
          </Link>
          <p className="text-[10px] text-center mt-4" style={{ color: "rgba(17,17,17,0.30)" }}>
            ayoub@withluminalabs.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
