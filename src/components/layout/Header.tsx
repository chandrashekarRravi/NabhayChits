import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

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
    ? "sticky top-0 z-50 flex justify-between items-center bg-[#123524] border-b border-white/10 px-[20px] sm:px-[32px] lg:px-[56px] py-3"
    : "absolute top-[22px] left-[20px] sm:left-[32px] lg:left-[56px] right-[20px] sm:right-[32px] lg:right-[56px] flex justify-between items-center z-50";

  return (
    <>
      <header className={headerBase}>
        {/* Logo lockup */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo/NC-LOGO.png"
            alt="Nabhay Chits logo"
            className="h-20 w-auto flex-shrink-0"
            loading="eager"
          />
          <span className="hidden sm:block mt-12">
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

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center h-[52px] bg-black/[0.18] border border-white/[0.06] backdrop-blur-sm">
          <nav className="flex items-center h-full">
            {desktopNavLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center h-full px-6 text-[15px] font-normal tracking-[0.01em] border-r border-white/[0.08] text-[#FAF5EE]/80 hover:text-[#FAF5EE] transition-colors leading-[1.2]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="h-full px-7 bg-white text-[#123524] flex items-center text-[15px] font-normal tracking-[0.01em] hover:bg-[#f5f0e8] transition-colors leading-[1.2]"
          >
            {t("nav.contact")}
          </Link>
          <button
            onClick={() => setLanguage(language === "en" ? "kn" : "en")}
            className="h-full px-5 text-[#FAF5EE]/60 text-[13px] tracking-[0.01em] hover:text-[#FAF5EE] transition-colors border-l border-white/[0.08] whitespace-nowrap"
            aria-label={language === "en" ? "Switch to Kannada" : "Switch to English"}
          >
            {language === "en" ? "ಕನ್ನಡ" : "English"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-[66px] left-0 right-0 bg-[#0e2a1c] z-50 px-6 py-6 flex flex-col gap-4 border-t border-white/10 shadow-xl">
          {mobileNavLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[#FAF5EE]/80 text-base font-medium hover:text-[#FAF5EE] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setLanguage(language === "en" ? "kn" : "en");
              setMenuOpen(false);
            }}
            className="text-left text-[#c59822] text-base font-medium mt-2 pt-4 border-t border-white/10"
          >
            {language === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ" : "Switch to English"}
          </button>
        </div>
      )}
    </>
  );
}
