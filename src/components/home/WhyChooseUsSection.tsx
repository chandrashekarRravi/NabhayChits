import { ShieldCheck, Handshake, Headphones, FileText, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-4">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 font-medium">{t("why.badge")}</span>
        </div>
      </div>

      {/* Split: headline + grid */}
      <div className="border-t border-[#1a1a1a]/10">
        <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] grid lg:grid-cols-[1fr_2fr] divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
          {/* Headline */}
          <div className="py-20 pr-0 lg:pr-20">
            <h2 className="font-cormorant text-[clamp(32px,3vw,50px)] font-normal leading-[1.1] text-[#1a1a1a]">
              {t("why.title1")}<br />
              <span className="italic text-[#123524]">{t("why.titleHighlight")}</span>
            </h2>
            <p className="text-[13px] text-[#1a1a1a]/50 mt-6 leading-relaxed max-w-xs">{t("why.description")}</p>
          </div>

          {/* 5-column principles — wrap 3+2 */}
          <div className="py-20 pl-0 lg:pl-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 content-start">
            {principles.map((p) => (
              <div key={p.title}>
                <div className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/10 mb-5">
                  <p.icon className="w-4 h-4 text-[#123524]" />
                </div>
                <h3 className="text-[14px] font-semibold text-[#1a1a1a] mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#1a1a1a]/50 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
