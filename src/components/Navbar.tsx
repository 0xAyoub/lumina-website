import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDark, setIsDark] = useState(true); // hero is dark, start dark
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
  const btnBorder = "none";

  return (
    <nav
      className="fixed top-[10px] z-50 flex items-center justify-between h-10 p-1 px-1 mx-3"
      style={{
        left: isDesktop && scrolled ? "400px" : "5px",
        right: isDesktop && scrolled ? "400px" : "5px",
        backgroundColor: inHero ? "rgba(255,255,255,0.04)" : isDark ? "rgba(17,17,17,0.72)" : "rgba(255,255,255,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "7px",
        border: inHero ? "1px solid rgba(255,255,255,0.08)" : isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.06)",
        transition:
          "left 0.6s cubic-bezier(0.16, 1, 0.3, 1), right 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <a href="#" className="flex items-center">
        <img
          src="/logo.svg"
          alt="Lumina"
          width={26}
          height={26}
          style={{
            borderRadius: "5px",
            opacity: isDark ? 0.9 : 1,
            transition: "opacity 0.4s ease",
          }}
        />
      </a>

      <div className="hidden md:flex items-center gap-6">
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
          href="https://cal.com/lumina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium px-4 py-1.5 rounded-[7px] transition-all duration-200 hover:opacity-80 active:scale-[0.97]"
          style={{
            backgroundColor: btnBg,
            color: btnText,
            border: btnBorder,
            transition: "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease",
          }}
        >
          Book a call
        </a>
      </div>

      <button
        className="md:hidden"
        aria-label="Menu"
        style={{ color: logColor }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="3" y1="7" x2="17" y2="7" />
          <line x1="3" y1="13" x2="17" y2="13" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
