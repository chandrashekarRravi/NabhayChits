import { Link } from "react-router-dom";
import { ArrowRight, Layers, CalendarDays, LayoutGrid, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { icon: Layers, title: t("services.flexibleChits"), description: t("services.flexibleChitsDesc"), link: "/services" },
    { icon: CalendarDays, title: t("services.monthlySavings"), description: t("services.monthlySavingsDesc"), link: "/services" },
    { icon: LayoutGrid, title: t("services.multipleOptions"), description: t("services.multipleOptionsDesc"), link: "/services" },
    { icon: HeadphonesIcon, title: t("services.financialPlanning"), description: t("services.financialPlanningDesc"), link: "/services" },
  ];

  return (
    <section className="bg-white">
      {/* Section label */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-4 flex items-center justify-between">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 font-medium">{t("services.badge")}</span>
          <Link to="/services" className="text-[12px] text-[#123524] hover:underline flex items-center gap-1 transition-colors">
            {t("services.viewAll")} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Headline */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-16">
          <h2 className="font-cormorant text-[clamp(32px,3vw,52px)] font-normal leading-[1.1] text-[#1a1a1a] max-w-xl">
            {t("services.title1")} <span className="italic text-[#123524]">{t("services.titleHighlight")}</span>
          </h2>
        </div>
      </div>

      {/* Services grid — 4 columns with dividers */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[#1a1a1a]/10">
            {services.map((s) => (
              <div key={s.title} className="py-12 px-0 sm:px-10 first:pl-0 last:pr-0 group">
                <div className="w-9 h-9 flex items-center justify-center border border-[#1a1a1a]/10 mb-8">
                  <s.icon className="w-4 h-4 text-[#123524]" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#1a1a1a] mb-3 leading-snug">{s.title}</h3>
                <p className="text-[13px] text-[#1a1a1a]/50 leading-relaxed mb-8">{s.description}</p>
                <Link to={s.link} className="inline-flex items-center gap-1.5 text-[12px] text-[#123524] hover:gap-3 transition-all">
                  {t("services.learnMore")} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
