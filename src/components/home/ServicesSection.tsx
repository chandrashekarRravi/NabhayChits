import { Link } from "react-router-dom";
import { ArrowRight, Layers, CalendarDays, LayoutGrid, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInReveal, StaggerGroup, fadeUpVariant } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

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
        <div className="mx-auto px-4 sm:px-8 lg:px-14 py-4 flex items-center justify-between">
          <span className="nc-label text-[#1a1a1a]/40">{t("services.badge")}</span>
          <Link to="/services" className="text-[13px] text-[#123524] hover:underline flex items-center gap-1.5 transition-colors tracking-[0.01em] min-h-[44px]">
            {t("services.viewAll")} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Headline */}
      <div className="border-t border-[#1a1a1a]/10">
        <FadeInReveal className="mx-auto px-4 sm:px-8 lg:px-14 py-12 sm:py-16">
          <h2 className="nc-section-h2 text-[#1a1a1a] max-w-2xl">
            {t("services.title1")} <em className="not-italic text-[#123524]">{t("services.titleHighlight")}</em>
          </h2>
        </FadeInReveal>
      </div>

      {/* Services grid — 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]/10">
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUpVariant}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="py-8 sm:py-12 px-0 sm:px-6 lg:px-8 first:pl-0 last:pr-0 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 mb-6 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                  <s.icon className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="nc-card-h3 text-[#1a1a1a] mb-3">{s.title}</h3>
                <p className="nc-small text-[#1a1a1a]/60 mb-6 leading-relaxed">{s.description}</p>
                <Link to={s.link} className="inline-flex items-center gap-1.5 text-[13px] text-[#123524] tracking-[0.01em] hover:gap-3 transition-all min-h-[44px]">
                  {t("services.learnMore")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
