import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Determine if we are on a light-background page (non-hero)
  const isLightPage = ["/services", "/contact", "/terms", "/privacy"].includes(location.pathname);

  const desktopNavLinks = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.services"), path: "/services" },
  ];

  const mobileNavLinks = [
    ...desktopNavLinks,
    { label: t("nav.contact"), path: "/contact" },
  ];

  const headerBase = isLightPage
    ? "sticky top-0 z-50 flex justify-between items-center bg-[#123524] border-b border-white/10 px-4 sm:px-8 lg:px-14 py-3"
    : "absolute top-[18px] sm:top-[22px] left-4 sm:left-8 lg:left-14 right-4 sm:right-8 lg:right-14 flex justify-between items-center z-50";

  return (
    <>
      <header className={headerBase}>
        {/* Logo lockup */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src="/logo/NC-LOGO.png"
            alt="Nabhay Chits logo"
            className="h-16 sm:h-20 w-auto flex-shrink-0"
            loading="eager"
          />
          <span className="hidden sm:block mt-8 sm:mt-12">
            <img
              src="/logo/NC-LOGO-word.png"
              alt="Nabhay Chits"
              className="h-3 w-auto"
              loading="eager"
            />
            <span className="block text-white/50 text-[9px] font-medium tracking-[0.18em] uppercase mt-0.5">
              Since 2015
            </span>
          </span>
        </Link>

        {/* Desktop nav - visible on lg screens and up */}
        <div className="hidden lg:flex items-center h-[52px] bg-black/[0.18] border border-white/[0.06] backdrop-blur-sm">
          <nav className="flex items-center h-full">
            {desktopNavLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center h-full px-6 text-[15px] font-normal tracking-[0.01em] border-r border-white/[0.08] transition-colors leading-[1.2] ${isActive ? "text-[#c59822]" : "text-[#FAF5EE]/80 hover:text-[#FAF5EE]"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c59822]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/contact"
            className={`h-full px-7 flex items-center text-[15px] font-normal tracking-[0.01em] transition-colors leading-[1.2] ${location.pathname === "/contact"
              ? "bg-[#c59822] text-[#123524]"
              : "bg-white text-[#123524] hover:bg-[#f5f0e8]"
              }`}
          >
            {t("nav.contact")}
          </Link>
          {/* <button
            onClick={() => setLanguage(language === "en" ? "kn" : "en")}
            className="h-full px-5 text-[#FAF5EE]/60 text-[13px] tracking-[0.01em] hover:text-[#FAF5EE] transition-colors border-l border-white/[0.08] whitespace-nowrap min-w-[44px]"
            aria-label={language === "en" ? "Switch to Kannada" : "Switch to English"}
          >
            {language === "en" ? "ಕನ್ನಡ" : "English"}
          </button> */}
        </div>

        {/* Mobile & Tablet hamburger button */}
        <button
          className="lg:hidden flex items-center justify-center w-11 h-11 text-[#FAF5EE] rounded-md hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c59822]/60"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </header>

      {/* Mobile & Tablet slide-down animated menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[76px] sm:top-[88px] bg-[#0e2a1c]/98 backdrop-blur-md z-40 border-t border-white/10 shadow-2xl px-6 py-8 flex flex-col gap-5 max-h-[calc(100vh-90px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-3">
              {mobileNavLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`py-3 px-4 rounded-md text-base font-medium transition-colors flex items-center justify-between ${isActive
                      ? "bg-white/10 text-[#c59822]"
                      : "text-[#FAF5EE]/85 hover:bg-white/5 hover:text-[#FAF5EE]"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#c59822]" />}
                  </Link>
                );
              })}
            </nav>

            {/* <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50 tracking-wider uppercase">Language</span>
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "kn" : "en");
                  setMenuOpen(false);
                }}
                className="px-4 py-2 bg-[#c59822]/15 border border-[#c59822]/30 text-[#c59822] rounded-md text-sm font-medium hover:bg-[#c59822]/25 transition-colors min-h-[44px]"
              >
                {language === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ" : "Switch to English"}
              </button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
