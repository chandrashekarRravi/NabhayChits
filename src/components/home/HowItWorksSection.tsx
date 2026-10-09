import { Search, Phone, FileText, PenTool, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-4">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 font-medium">{t("how.badge")}</span>
        </div>
      </div>

      {/* Headline */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-16">
          <h2 className="font-cormorant text-[clamp(32px,3vw,52px)] font-normal leading-[1.1] text-[#1a1a1a] max-w-xl">
            {t("how.title1")}
          </h2>
          <p className="text-[14px] text-[#1a1a1a]/50 mt-4 max-w-sm">{t("how.description")}</p>
        </div>
      </div>

      {/* Steps — 5 columns */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]/10">
            {steps.map((step, i) => (
              <div key={step.title} className="py-12 px-0 sm:px-8 first:pl-0 last:pr-0">
                <div className="text-[11px] text-[#c59822] font-medium tracking-widest mb-6">
                  0{i + 1}
                </div>
                <div className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/10 mb-6">
                  <step.icon className="w-4 h-4 text-[#123524]" />
                </div>
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-3">{step.title}</h3>
                <p className="text-[13px] text-[#1a1a1a]/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
