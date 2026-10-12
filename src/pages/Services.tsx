import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Layers, CalendarDays, LayoutGrid, HeadphonesIcon, Check } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "flexible-chits",
      icon: Layers,
      title: t("services.flexibleChits"),
      description: t("services.flexibleChitsDesc"),
      features: [t("services.flexibleChitsF1"), t("services.flexibleChitsF2"), t("services.flexibleChitsF3")],
    },
    {
      id: "monthly-savings",
      icon: CalendarDays,
      title: t("services.monthlySavings"),
      description: t("services.monthlySavingsDesc"),
      features: [t("services.monthlySavingsF1"), t("services.monthlySavingsF2"), t("services.monthlySavingsF3")],
    },
    {
      id: "multiple-options",
      icon: LayoutGrid,
      title: t("services.multipleOptions"),
      description: t("services.multipleOptionsDesc"),
      features: [t("services.multipleOptionsF1"), t("services.multipleOptionsF2"), t("services.multipleOptionsF3")],
    },
    {
      id: "financial-planning",
      icon: HeadphonesIcon,
      title: t("services.financialPlanning"),
      description: t("services.financialPlanningDesc"),
      features: [t("services.financialPlanningF1"), t("services.financialPlanningF2"), t("services.financialPlanningF3")],
    },
  ];

  const schemes = [
    { amount: '₹1,00,000', monthly: '₹5,000' },
    { amount: '₹2,00,000', monthly: '₹10,000' },
    { amount: '₹3,00,000', monthly: '₹15,000' },
    { amount: '₹5,00,000', monthly: '₹25,000' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8]">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-[#123524]">
          <div className="border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] pt-32 pb-24">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#c59822] mb-8">{t("servicesPage.badge")}</p>
              <h1 className="font-cormorant text-[clamp(40px,5vw,80px)] font-normal leading-[1.05] text-[#FAF5EE] max-w-2xl">
                {t("servicesPage.title1")}{" "}
                <span className="italic">{t("servicesPage.titleHighlight")}</span>
              </h1>
              <p className="text-[15px] text-[#FAF5EE]/50 mt-8 max-w-lg leading-relaxed">
                {t("servicesPage.description")}
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f0e8]"}>
            <div className="border-t border-[#1a1a1a]/10">
              <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
                {/* Info */}
                <div className="py-20 pr-0 lg:pr-20">
                  <div className="w-9 h-9 flex items-center justify-center border border-[#1a1a1a]/10 mb-8">
                    <service.icon className="w-4 h-4 text-[#123524]" />
                  </div>
                  <h2 className="font-cormorant text-[clamp(28px,2.5vw,44px)] font-normal leading-[1.1] text-[#1a1a1a] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-[14px] text-[#1a1a1a]/55 leading-relaxed mb-8 max-w-sm">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[13px] text-[#1a1a1a]/55">
                        <Check className="w-3.5 h-3.5 text-[#123524] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 mt-10 text-[13px] text-[#123524] font-medium hover:gap-3 transition-all">
                    {t("servicesPage.applyNow")} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Scheme table */}
                <div className="py-20 pl-0 lg:pl-20 flex flex-col justify-center">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 mb-8">{t("servicesPage.quickCalculator")}</p>
                  <table className="w-full max-w-sm">
                    <thead>
                      <tr className="border-b border-[#1a1a1a]/10">
                        <th className="text-left pb-4 text-[12px] font-semibold text-[#1a1a1a]/50 uppercase tracking-wider">{t("servicesPage.sampleAmount")}</th>
                        <th className="text-right pb-4 text-[12px] font-semibold text-[#1a1a1a]/50 uppercase tracking-wider">{t("servicesPage.duration")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schemes.map((s) => (
                        <tr key={s.amount} className="border-b border-[#1a1a1a]/[0.06]">
                          <td className="py-4 text-[15px] text-[#1a1a1a]">{s.amount}</td>
                          <td className="py-4 text-right text-[15px] font-semibold text-[#123524]">{s.monthly}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[11px] text-[#1a1a1a]/35 mt-6 max-w-xs leading-relaxed">{t("schemes.note")}</p>
                  <p className="text-[11px] text-[#c59822] mt-3 max-w-xs leading-relaxed font-medium">{t("servicesPage.availabilityNote")}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA strip */}
        <div className="bg-[#123524] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-cormorant text-[clamp(24px,2vw,38px)] font-normal text-[#FAF5EE]">{t("servicesPage.readyTitle")}</h2>
              <p className="text-[13px] text-[#FAF5EE]/45 mt-2 max-w-sm">{t("servicesPage.readyDesc")}</p>
            </div>
            <Link to="/contact"
              className="flex items-center gap-2 h-[52px] px-8 bg-[#c59822] text-[#1a1a1a] text-[14px] font-medium hover:brightness-110 transition-all whitespace-nowrap">
              {t("cta.contactUs")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;


