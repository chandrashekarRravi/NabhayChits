import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Label } from "recharts";
import path from "path";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  return (
    <>
      <style>{`
        .hero-nav-item { color: rgba(250,245,238,0.85); transition: color 0.15s; }
        .hero-nav-item:hover { color: #FAF5EE; }
      `}</style>

      {/* Header positioned absolutely over the dark hero sections */}
      <header className="absolute top-[22px] left-[20px] sm:left-[32px] lg:left-[56px] right-[20px] sm:right-[32px] lg:right-[56px] flex justify-between items-center z-50">
        <Link to="/" className="flex flex-col items-center group mt-1">
          <img src="/logo/NC-LOGO.png" alt="Nabhay Chits" className="h-20 w-auto" />
          <span className="text-white/80 text-[10px] font-medium tracking-wider mt-0.5 uppercase">Since 2015</span>
        </Link>


        {/* Desktop nav */}
        <div className="hidden lg:flex items-center h-[58px] bg-black/[0.18] border border-white/[0.06] backdrop-blur-sm">
          <nav className="flex items-center h-full">
            {[
              { label: t("nav.services"), path: "#services" },
              { label: "About Us", path: "/#about" },
              // { label: t("nav.home"), path: "/" },
              { label: t("Scheames"), path: "/scheames" },
            ].map((item) => (
              <Link key={item.path} to={item.path}
                className="hero-nav-item flex items-center gap-1.5 h-full px-6 text-[15px] font-medium border-r border-white/[0.08]">
                {item.label}
                <ChevronDown className="w-3.5 h-3.5 opacity-50" />
              </Link>
            ))}
          </nav>
          <Link to="/contact"
            className="h-full px-7 bg-white text-[#123524] flex items-center text-[15px] font-medium hover:bg-[#f5f0e8] transition-colors">
            {t("nav.contact")}
          </Link>
          <button
            onClick={() => setLanguage(language === "en" ? "kn" : "en")}
            className="h-full px-5 text-[#FAF5EE]/60 text-[13px] hover:text-[#FAF5EE] transition-colors border-l border-white/[0.08]">
            {language === "en" ? "ಕನ್ನಡ" : "English"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[80px] left-[20px] right-[20px] sm:left-[32px] sm:right-[32px] bg-[#0e2a1c] z-50 px-6 py-6 flex flex-col gap-4 border border-white/10 shadow-xl backdrop-blur-sm">
          {[
            { label: t("nav.home"), path: "/" },
            { label: t("nav.services"), path: "/services" },
            { label: t("scheames.title"), path: "/scheames" },
            { label: "About Us", path: "/#about" },
            { label: t("nav.contact"), path: "/contact" },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="text-[#FAF5EE]/80 text-base font-medium" onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setLanguage(language === "en" ? "kn" : "en");
              setMenuOpen(false);
            }}
            className="text-left text-[#c59822] text-base font-medium mt-2 pt-4 border-t border-white/10">
            Switch to {language === "en" ? "ಕನ್ನಡ" : "English"}
          </button>
        </div>
      )}
    </>
  );
}
