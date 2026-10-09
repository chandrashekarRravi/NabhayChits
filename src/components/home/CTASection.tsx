import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#123524]">
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Left */}
          <div className="py-20 pr-0 lg:pr-20">
            <h2 className="font-cormorant text-[clamp(32px,3vw,52px)] font-normal leading-[1.1] text-[#FAF5EE] mb-6">
              {t("cta.title1")}<br />
              <span className="italic text-[#c59822]">{t("cta.titleHighlight")}</span>
            </h2>
            <p className="text-[14px] text-[#FAF5EE]/50 leading-relaxed max-w-sm">{t("cta.description")}</p>
          </div>

          {/* Right */}
          <div className="py-20 pl-0 lg:pl-20 flex flex-col justify-center gap-6">
            <p className="text-[13px] text-[#FAF5EE]/40 tracking-widest uppercase">{t("cta.noHidden")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services"
                className="flex items-center justify-center gap-2 w-full sm:w-[180px] h-[52px] border border-[#FAF5EE]/25 text-[#FAF5EE] text-[14px] font-medium hover:bg-white/[0.06] transition-colors">
                {t("cta.openAccount")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="flex items-center justify-center gap-2 w-full sm:w-[180px] h-[52px] bg-[#c59822] text-[#1a1a1a] text-[14px] font-medium hover:brightness-110 transition-all">
                {t("cta.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
