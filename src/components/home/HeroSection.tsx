import { Link } from "react-router-dom";
import { TrendingUp, Users, Award, ChevronsDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeroChart } from "@/components/home/HeroChart";

export function HeroSection() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Award, value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { icon: TrendingUp, value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { icon: Users, value: t("hero.stat3Value"), label: t("hero.stat3Label") },
  ];

  return (
    <section className="relative min-h-[100svh] w-full bg-[#123524] overflow-hidden text-[#FAF5EE] flex flex-col justify-between px-4 sm:px-8 lg:px-14 pt-28 sm:pt-36 pb-8 sm:pb-12">
      {/* Candlestick Animated Chart Visual */}
      <HeroChart />

      {/* Main Headline */}
      <div className="relative z-10 my-auto py-8 sm:py-12 max-w-4xl">
        <h1
          className={`nc-page-h1 text-[#FAF5EE] transition-all duration-700 ease-out ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t("hero.title1")}<br />
          <span className="text-[#c59822]">{t("hero.titleHighlight")}</span>
        </h1>
      </div>

      {/* Vertical decorative label on large screens */}
      <div className="hidden xl:block absolute right-12 top-[40%] rotate-90 origin-right text-[11px] tracking-[0.1em] text-[#FAF5EE]/30 uppercase whitespace-nowrap z-10 pointer-events-none">
        Tumkur, Karnataka
      </div>

      {/* Bottom Area: Stats & Action row */}
      <div
        className={`relative z-10 border-t border-white/15 pt-6 transition-all duration-700 delay-200 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Stats row - grid on mobile, row on tablet/desktop */}
        <div className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-12 pb-6 border-b border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <div className="nc-scheme-amount text-[#c59822] leading-none">{s.value}</div>
              <div className="nc-label text-[#FAF5EE]/50 mt-1.5 line-clamp-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tagline + Buttons row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-6">
          <p className="nc-body text-[#FAF5EE]/70 max-w-lg">
            {t("hero.description")}
          </p>

          <div className="hidden xl:flex flex-col items-center opacity-40 animate-bounce">
            <ChevronsDown className="w-5 h-5" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              to="/services"
              className="w-full sm:w-[170px] min-h-[48px] sm:min-h-[52px] flex items-center justify-center border border-[#FAF5EE]/30 text-[15px] font-normal text-[#FAF5EE] hover:bg-white/[0.08] active:bg-white/15 transition-colors rounded-sm"
            >
              {t("hero.exploreServices")}
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-[170px] min-h-[48px] sm:min-h-[52px] flex items-center justify-center bg-[#c59822] text-[15px] font-medium text-[#123524] hover:brightness-110 active:brightness-95 transition-all rounded-sm shadow-md"
            >
              {t("nav.contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
