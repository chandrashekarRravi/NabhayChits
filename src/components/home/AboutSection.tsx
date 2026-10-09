import { Shield, Eye, TrendingUp, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    { icon: Shield, title: t("about.security"), description: t("about.securityDesc") },
    { icon: Eye, title: t("about.transparency"), description: t("about.transparencyDesc") },
    { icon: TrendingUp, title: t("about.growth"), description: t("about.growthDesc") },
    { icon: HeadphonesIcon, title: t("about.community"), description: t("about.communityDesc") },
  ];

  return (
    <section id="about" className="bg-[#f5f0e8]">
      {/* Top divider label */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-4 flex items-center gap-3">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 font-medium">{t("about.badge")}</span>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
          {/* Left — headline */}
          <div className="py-20 pr-0 lg:pr-20">
            <h2 className="font-cormorant text-[clamp(36px,3.5vw,56px)] font-normal leading-[1.1] text-[#1a1a1a] mb-8">
              {t("about.title1")} <span className="italic">{t("about.titleHighlight")}</span> {t("about.title2")}
            </h2>
            <div className="space-y-5 text-[15px] text-[#1a1a1a]/60 leading-relaxed max-w-lg">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="py-20 pl-0 lg:pl-20 grid grid-cols-2 gap-x-12 gap-y-12 content-start">
            {values.map((v) => (
              <div key={v.title}>
                <div className="w-9 h-9 flex items-center justify-center border border-[#1a1a1a]/12 mb-5">
                  <v.icon className="w-4 h-4 text-[#123524]" />
                </div>
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-2 tracking-wide">{v.title}</h3>
                <p className="text-[13px] text-[#1a1a1a]/50 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
