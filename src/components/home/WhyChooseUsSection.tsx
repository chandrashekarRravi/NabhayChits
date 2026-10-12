import { ShieldCheck, Handshake, Headphones, FileText, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInReveal, StaggerGroup, fadeUpVariant } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

const ICONS = [ShieldCheck, FileText, Headphones, Handshake, CheckCircle];

export function WhyChooseUsSection() {
  const { t } = useLanguage();

  const principles = [
    { icon: ICONS[0], title: t("why.p1.title"), description: t("why.p1.desc") },
    { icon: ICONS[1], title: t("why.p2.title"), description: t("why.p2.desc") },
    { icon: ICONS[2], title: t("why.p3.title"), description: t("why.p3.desc") },
    { icon: ICONS[3], title: t("why.p4.title"), description: t("why.p4.desc") },
    { icon: ICONS[4], title: t("why.p5.title"), description: t("why.p5.desc") },
  ];

  return (
    <section className="bg-white">
      {/* Label */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14 py-4">
          <span className="nc-label text-[#1a1a1a]/40">{t("why.badge")}</span>
        </div>
      </div>

      {/* Split: headline + grid */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14 grid lg:grid-cols-[1fr_2fr] divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
          {/* Headline */}
          <FadeInReveal className="py-12 sm:py-16 lg:py-20 pr-0 lg:pr-16">
            <h2 className="nc-section-h2 text-[#1a1a1a]">
              {t("why.title1")}<br />
              <em className="not-italic text-[#123524]">{t("why.titleHighlight")}</em>
            </h2>
            <p className="nc-small text-[#1a1a1a]/60 mt-4 sm:mt-6 max-w-sm leading-relaxed">{t("why.description")}</p>
          </FadeInReveal>

          {/* Principles grid: 1 col mobile, 2/3 cols tablet/desktop */}
          <StaggerGroup className="py-12 sm:py-16 lg:py-20 pl-0 lg:pl-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 gap-y-8 sm:gap-y-12 content-start">
            {principles.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUpVariant}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 mb-4 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                  <p.icon className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="nc-card-h3 text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="nc-small text-[#1a1a1a]/60 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
