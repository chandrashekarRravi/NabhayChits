import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronsDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroChart } from "@/components/home/HeroChart";

export function HeroSection() {
  const { t, language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Award, value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { icon: TrendingUp, value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { icon: Users, value: t("hero.stat3Value"), label: t("hero.stat3Label") },
  ];

  return (
    <>
      <style>{`
        .hero-nav-item { color: rgba(250,245,238,0.85); transition: color 0.15s; }
        .hero-nav-item:hover { color: #FAF5EE; }
      `}</style>

      <section className="relative min-h-screen w-full bg-[#123524] overflow-hidden text-[#FAF5EE] flex flex-col px-[20px] sm:px-[32px] lg:px-[56px]">
        {/* Candlestick Animated Chart Visual */}
        <HeroChart />

        {/* Header */}
        {/* <header className="absolute top-[22px] left-[20px] sm:left-[32px] lg:left-[56px] right-[20px] sm:right-[32px] lg:right-[56px] flex justify-between items-center z-20">
          <Link to="/" className="flex items-center">
            <img src="/logo/NC-LOGO.png" alt="Nabhay Chits" className="h-0 w-auto" />
          </Link>

          {/* Desktop nav */}
        {/* <div className="hidden lg:flex items-center h-[58px] bg-black/[0.18] border border-white/[0.06] backdrop-blur-sm">
            <nav className="flex items-center h-full">
              {[
                { label: t("nav.services"), path: "/services" },
                { label: "About Us", path: "/#about" },
                { label: t("nav.home"), path: "/" },
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
        {/* <button className="lg:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button> */}


        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-[80px] left-0 right-0 bg-[#0e2a1c] z-30 px-6 py-6 flex flex-col gap-4 border-t border-white/10">
            {[t("nav.home"), t("nav.services"), "About Us", t("nav.contact")].map((item) => (
              <span key={item} className="text-[#FAF5EE]/80 text-base font-medium cursor-pointer">{item}</span>
            ))}
          </div>
        )}

        {/* Headline — upper-middle */}
        <div className="flex-1 flex flex-col justify-center z-10 pt-[120px] pb-[140px]">
          <h1 className={`text-[clamp(40px,5.5vw,64px)] leading-[1.1] tracking-[-0.03em] font-normal max-w-[900px] transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            {t("hero.title1")}<br />
            <span>{t("hero.titleHighlight")}</span>
          </h1>
        </div>

        {/* Vertical label */}
        <div className="hidden lg:block absolute right-[56px] top-[38%] rotate-90 origin-right text-[11px] tracking-[0.08em] text-[#FAF5EE]/30 uppercase whitespace-nowrap z-10">
          Tumkur, Karnataka
        </div>

        {/* Bottom strip */}
        <div className={`absolute bottom-0 left-[20px] sm:left-[32px] lg:left-[56px] right-[20px] sm:right-[32px] lg:right-[56px] border-t border-white/[0.15] transition-all duration-700 delay-200 ${mounted ? "opacity-100" : "opacity-0"
          }`}>
          {/* Stats row */}
          <div className="flex gap-12 py-5 border-b border-white/[0.08]">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-[clamp(26px,2.5vw,32px)] font-normal text-[#c59822] leading-none tracking-[-0.02em]">{s.value}</div>
                <div className="text-[11px] text-[#FAF5EE]/45 mt-1 tracking-[0.08em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Tagline + scroll + buttons */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-6">
            <p className="text-[15px] leading-[1.65] text-[#FAF5EE]/65 max-w-[500px] font-normal tracking-[0.005em]">
              {t("hero.description")}
            </p>

            <div className="hidden lg:flex flex-col items-center opacity-40 animate-bounce">
              <ChevronsDown className="w-5 h-5" />
            </div>

            <div className="flex flex-col sm:flex-row gap-[18px] w-full lg:w-auto">
              <Link to="/services"
                className="w-full sm:w-[167px] h-[54px] flex items-center justify-center border border-[#FAF5EE]/30 text-[15px] font-normal text-[#FAF5EE] hover:bg-white/[0.07] transition-colors duration-200 tracking-[0.01em] leading-[1.2]">
                {t("hero.exploreServices")}
              </Link>
              <Link to="/contact"
                className="w-full sm:w-[167px] h-[54px] flex items-center justify-center bg-[#c59822] text-[15px] font-normal text-[#123524] hover:brightness-110 transition-all duration-200 tracking-[0.01em] leading-[1.2]">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

