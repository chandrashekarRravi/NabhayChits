import { Shield, Eye, TrendingUp, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInReveal, StaggerGroup, fadeUpVariant } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, title: t("about.security"), description: t("about.securityDesc") },
    { icon: Eye, title: t("about.transparency"), description: t("about.transparencyDesc") },
    { icon: TrendingUp, title: t("about.growth"), description: t("about.growthDesc") },
    { icon: HeadphonesIcon, title: t("about.community"), description: t("about.communityDesc") },
  ];

  return (
    <section id="about" className="bg-[#f5f0e8] scroll-mt-20">
      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14 py-4 flex items-center gap-3">
          <span className="nc-label text-[#1a1a1a]/40">{t("about.badge")}</span>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
          {/* Left — headline */}
          <FadeInReveal className="py-12 sm:py-16 lg:py-20 pr-0 lg:pr-16">
            <h2 className="nc-section-h2 text-[#1a1a1a] mb-6 sm:mb-8">
              {t("about.title1")} <em className="not-italic text-[#123524]">{t("about.titleHighlight")}</em> {t("about.title2")}
            </h2>
            <div className="space-y-4 sm:space-y-5 nc-body text-[#1a1a1a]/65 max-w-xl">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
          </FadeInReveal>

          {/* Right — values grid: single col on 320px-480px, 2 cols on tablet/desktop */}
          <StaggerGroup className="py-12 sm:py-16 lg:py-20 pl-0 lg:pl-16 grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12 content-start">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUpVariant}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/12 mb-4 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                  <v.icon className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h3 className="nc-card-h3 text-[#1a1a1a] mb-2">{v.title}</h3>
                <p className="nc-small text-[#1a1a1a]/60 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
