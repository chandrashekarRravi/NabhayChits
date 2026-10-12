import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Layers, CalendarDays, LayoutGrid, HeadphonesIcon, Check } from "lucide-react";
import { FadeInReveal } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

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
            <FadeInReveal className="mx-auto px-4 sm:px-8 lg:px-14 pt-28 sm:pt-36 pb-16 sm:pb-24">
              <p className="nc-label text-[#c59822] mb-6 sm:mb-8">{t("servicesPage.badge")}</p>
              <h1 className="nc-page-h1 text-[#FAF5EE] max-w-2xl">
                {t("servicesPage.title1")}{" "}
                <em className="not-italic text-[#c59822]">{t("servicesPage.titleHighlight")}</em>
              </h1>
              <p className="nc-body text-[#FAF5EE]/60 mt-6 sm:mt-8 max-w-xl">
                {t("servicesPage.description")}
              </p>
            </FadeInReveal>
          </div>
        </section>

        {/* Services & Schemes list */}
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className={`${i % 2 === 0 ? "bg-white" : "bg-[#f5f0e8]"} scroll-mt-20`}>
            <div className="border-t border-[#1a1a1a]/10">
              <div className="mx-auto px-4 sm:px-8 lg:px-14 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">
                {/* Info / Features side */}
                <FadeInReveal className="py-12 sm:py-16 lg:py-20 pr-0 lg:pr-14">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 mb-6 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                    <service.icon className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <h2 className="nc-section-h2 text-[#1a1a1a] mb-4 sm:mb-6">
                    {service.title}
                  </h2>
                  <p className="nc-body text-[#1a1a1a]/65 mb-6 sm:mb-8 max-w-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 nc-body-sm text-[#1a1a1a]/60">
                        <Check className="w-4 h-4 text-[#123524] mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 mt-8 sm:mt-10 min-h-[44px] text-[14px] text-[#123524] tracking-[0.01em] hover:gap-3 transition-all font-medium">
                    {t("servicesPage.applyNow")} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </FadeInReveal>

                {/* Scheme table / overview side */}
                <FadeInReveal delay={0.1} className="py-12 sm:py-16 lg:py-20 pl-0 lg:pl-14 flex flex-col justify-center">
                  <p className="nc-label text-[#1a1a1a]/40 mb-6 sm:mb-8">{t("servicesPage.quickCalculator")}</p>
                  
                  {/* Fluid responsive scheme table */}
                  <div className="w-full max-w-lg overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#1a1a1a]/10">
                          <th className="text-left pb-3 sm:pb-4 nc-label text-[#1a1a1a]/50">{t("servicesPage.sampleAmount")}</th>
                          <th className="text-right pb-3 sm:pb-4 nc-label text-[#1a1a1a]/50">{t("servicesPage.duration")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schemes.map((s) => (
                          <tr
                            key={s.amount}
                            className="border-b border-[#1a1a1a]/[0.06] hover:bg-[#123524]/[0.03] transition-colors"
                          >
                            <td className="py-4 sm:py-5">
                              <span className="nc-scheme-amount text-[#1a1a1a] whitespace-nowrap">{s.amount}</span>
                            </td>
                            <td className="py-4 sm:py-5 text-right">
                              <span className="nc-scheme-amount text-[#123524] whitespace-nowrap">{s.monthly}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="nc-small text-[#1a1a1a]/45 mt-5 sm:mt-6 max-w-sm leading-relaxed">{t("schemes.note")}</p>
                  <p className="nc-small text-[#c59822] mt-2.5 max-w-sm leading-relaxed font-medium">{t("servicesPage.availabilityNote")}</p>
                </FadeInReveal>
              </div>
            </div>
          </div>
        ))}

        {/* CTA strip */}
        <div className="bg-[#123524] border-t border-white/10">
          <FadeInReveal className="mx-auto px-4 sm:px-8 lg:px-14 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <div>
              <h2 className="nc-cta-h2 text-[#FAF5EE]">{t("servicesPage.readyTitle")}</h2>
              <p className="nc-small text-[#FAF5EE]/50 mt-2 max-w-md">{t("servicesPage.readyDesc")}</p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link to="/contact"
                className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-8 bg-[#c59822] text-[#123524] text-[15px] tracking-[0.01em] hover:brightness-110 active:brightness-95 transition-all whitespace-nowrap font-medium rounded-sm shadow-md">
                {t("cta.contactUs")} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </FadeInReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
