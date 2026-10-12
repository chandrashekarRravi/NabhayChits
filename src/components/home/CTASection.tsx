import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FadeInReveal } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#123524]">
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 sm:px-8 lg:px-14 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Left */}
          <FadeInReveal className="py-12 sm:py-16 lg:py-20 pr-0 lg:pr-16">
            <h2 className="nc-cta-h2 text-[#FAF5EE] mb-4 sm:mb-6">
              {t("cta.title1")}<br />
              <em className="not-italic text-[#c59822]">{t("cta.titleHighlight")}</em>
            </h2>
            <p className="nc-body-sm text-[#FAF5EE]/60 max-w-sm">{t("cta.description")}</p>
          </FadeInReveal>

          {/* Right */}
          <FadeInReveal delay={0.15} className="py-12 sm:py-16 lg:py-20 pl-0 lg:pl-16 flex flex-col justify-center gap-6">
            <p className="nc-label text-[#FAF5EE]/40">{t("cta.noHidden")}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link to="/services"
                  className="flex items-center justify-center gap-2 w-full sm:w-[180px] min-h-[48px] sm:min-h-[52px] border border-[#FAF5EE]/25 text-[#FAF5EE] text-[15px] tracking-[0.01em] hover:bg-white/[0.08] active:bg-white/15 transition-colors rounded-sm">
                  {t("cta.openAccount")} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link to="/contact"
                  className="flex items-center justify-center gap-2 w-full sm:w-[180px] min-h-[48px] sm:min-h-[52px] bg-[#c59822] text-[#123524] text-[15px] tracking-[0.01em] hover:brightness-110 active:brightness-95 transition-all font-medium rounded-sm shadow-md">
                  {t("cta.contactUs")}
                </Link>
              </motion.div>
            </div>
          </FadeInReveal>
        </div>
      </div>
    </section>
  );
}
