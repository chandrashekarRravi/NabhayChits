import { Search, Phone, FileText, PenTool, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInReveal, StaggerGroup, fadeUpVariant } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

const ICONS = [Search, Phone, FileText, PenTool, CheckCircle2];

export function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    { icon: ICONS[0], title: t("how.s1.title"), description: t("how.s1.desc") },
    { icon: ICONS[1], title: t("how.s2.title"), description: t("how.s2.desc") },
    { icon: ICONS[2], title: t("how.s3.title"), description: t("how.s3.desc") },
    { icon: ICONS[3], title: t("how.s4.title"), description: t("how.s4.desc") },
    { icon: ICONS[4], title: t("how.s5.title"), description: t("how.s5.desc") },
  ];

  return (
    <section className="bg-[#f5f0e8]">
      {/* Label */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14 py-4">
          <span className="nc-label text-[#1a1a1a]/40">{t("how.badge")}</span>
        </div>
      </div>

      {/* Headline */}
      <div className="border-t border-[#1a1a1a]/10">
        <FadeInReveal className="mx-auto px-4 sm:px-8 lg:px-14 py-12 sm:py-16">
          <h2 className="nc-section-h2 text-[#1a1a1a] max-w-xl">
            {t("how.title1")}
          </h2>
          <p className="nc-body-sm text-[#1a1a1a]/60 mt-3 sm:mt-4 max-w-md">{t("how.description")}</p>
        </FadeInReveal>
      </div>

      {/* Steps: 1 col on mobile, 2/3 on tablet, 5 on desktop */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14">
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUpVariant}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="py-8 sm:py-12 px-0 sm:px-6 lg:px-8 first:pl-0 last:pr-0 group"
              >
                <div className="text-[12px] text-[#c59822] tracking-[0.09em] uppercase mb-4 sm:mb-6 font-semibold">
                  0{i + 1}
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 mb-4 sm:mb-6 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                  <step.icon className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="nc-card-h3 text-[#1a1a1a] mb-2">{step.title}</h3>
                <p className="nc-small text-[#1a1a1a]/60 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
