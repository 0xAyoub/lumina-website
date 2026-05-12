import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const intersectingDark = useRef(new Set<Element>());

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop, { passive: true });

    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  useEffect(() => {
    const darkSections = document.querySelectorAll('[data-navbar-dark="true"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingDark.current.add(entry.target);
          } else {
            intersectingDark.current.delete(entry.target);
          }
        });
        setIsDark(intersectingDark.current.size > 0);
      },
      { rootMargin: "0px 0px -88% 0px", threshold: 0 }
    );
    darkSections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const inHero = isDark && !scrolled;
  const textColor = isDark ? "rgba(255,255,255,0.6)" : "rgba(17,17,17,0.6)";
  const textColorHover = isDark ? "#ffffff" : "#111111";
  const logColor = isDark ? "#ffffff" : "#111111";
  const btnBg = isDark ? "rgba(255,255,255,1)" : "rgba(17,17,17,1)";
  const btnText = isDark ? "#111111" : "#ffffff";

  return (
    <nav
      className="fixed top-[10px] z-50 flex items-center justify-between h-10 px-2"
      style={{
        left: isDesktop && scrolled ? "400px" : "5px",
        right: isDesktop && scrolled ? "400px" : "5px",
        backgroundColor: inHero ? "rgba(255,255,255,0.04)" : isDark ? "rgba(17,17,17,0.72)" : "rgba(255,255,255,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "7px",
        border: inHero
          ? "1px solid rgba(255,255,255,0.08)"
          : isDark
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(0,0,0,0.06)",
        transition:
          "left 0.6s cubic-bezier(0.16, 1, 0.3, 1), right 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Logo */}
      <a href="#" className="flex items-center flex-shrink-0">
        <img
          src="/logo.svg"
          alt="Lumina"
          width={26}
          height={26}
          style={{ borderRadius: "5px", opacity: isDark ? 0.9 : 1, transition: "opacity 0.4s ease" }}
        />
      </a>

      {/* Full nav — visible on all screens ≥ 360px */}
      <div className="hidden min-[360px]:flex items-center gap-3 sm:gap-5 md:gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[11px] font-medium tracking-[0.035em] transition-colors duration-200"
            style={{ color: textColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textColorHover)}
            onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/free"
          className="text-[11px] font-medium px-3 py-1.5 sm:px-4 rounded-[7px] hover:opacity-80 active:scale-[0.97]"
          style={{
            backgroundColor: btnBg,
            color: btnText,
            transition: "background-color 0.4s ease, color 0.4s ease",
          }}
        >
          Get a free ad
        </a>
      </div>

      {/* Hamburger — only on truly tiny screens (< 360px) */}
      <button
        className="min-[360px]:hidden flex items-center justify-center"
        aria-label="Menu"
        style={{ color: logColor }}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="5" x2="15" y2="15" /><line x1="15" y1="5" x2="5" y2="15" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="7" x2="17" y2="7" /><line x1="3" y1="13" x2="17" y2="13" />
          </svg>
        )}
      </button>

      {/* Dropdown for tiny screens */}
      {menuOpen && (
        <div
          className="min-[360px]:hidden absolute top-12 left-0 right-0 rounded-[7px] p-4 flex flex-col gap-3"
          style={{
            backgroundColor: isDark ? "rgba(17,17,17,0.95)" : "rgba(255,255,255,0.96)",
            backdropFilter: "blur(24px)",
            border: isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.06)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12px] font-medium py-1"
              style={{ color: textColor }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/free"
            className="text-[11px] font-medium px-4 py-2 rounded-[7px] text-center mt-1"
            style={{ backgroundColor: btnBg, color: btnText }}
            onClick={() => setMenuOpen(false)}
          >
            Get a free ad
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
