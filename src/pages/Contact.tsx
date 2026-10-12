import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { FadeInReveal } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: t("contact.messageSent"), description: t("contact.messageSuccess") });
    setFormData({ name: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8]">
      <Header />
      <main className="flex-1">
        {/* Page hero */}
        <section className="bg-[#123524]">
          <div className="border-t border-white/10">
            <FadeInReveal className="mx-auto px-4 sm:px-8 lg:px-14 pt-28 sm:pt-36 pb-16 sm:pb-24">
              <p className="nc-label text-[#c59822] mb-6 sm:mb-8">{t("contact.badge")}</p>
              <h1 className="nc-page-h1 text-[#FAF5EE] max-w-xl">
                {t("contact.title1")}{" "}
                <em className="not-italic text-[#c59822]">{t("contact.titleHighlight")}</em>
              </h1>
            </FadeInReveal>
          </div>
        </section>

        {/* Main split: contact info first, form below on mobile; 2 cols on lg screens */}
        <div className="border-t border-[#1a1a1a]/10">
          <div className="mx-auto px-4 sm:px-8 lg:px-14 grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">

            {/* Contact info side */}
            <FadeInReveal className="py-12 sm:py-16 lg:py-20 pr-0 lg:pr-14 space-y-8 sm:space-y-12">
              <div>
                <p className="nc-label text-[#1a1a1a]/40 mb-4 sm:mb-6">{t("contact.getInTouch")}</p>
                <p className="nc-body text-[#1a1a1a]/65 max-w-md">{t("contact.description")}</p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 flex-shrink-0 mt-0.5 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                    <MapPin className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="nc-label text-[#1a1a1a] mb-1.5">{t("contact.address")}</p>
                    <p className="nc-body-sm text-[#1a1a1a]/65 leading-relaxed">
                      Opp Guru Wines Road, Behind Vijaya Motors,<br />
                      Maruthi Nagar, Tumkur - 572102, Karnataka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 flex-shrink-0 mt-0.5 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                    <Phone className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="nc-label text-[#1a1a1a] mb-1.5">{t("contact.phone.label")}</p>
                    <a href="tel:+919742130555" className="block nc-body-sm text-[#1a1a1a]/70 hover:text-[#123524] transition-colors py-0.5">9742130555</a>
                    <a href="tel:+919538595555" className="block nc-body-sm text-[#1a1a1a]/70 hover:text-[#123524] transition-colors py-0.5">9538595555</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-5 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#1a1a1a]/10 flex-shrink-0 mt-0.5 transition-colors group-hover:border-[#123524] group-hover:bg-[#123524]/5 rounded-sm">
                    <Clock className="w-4 h-4 text-[#123524] transition-transform duration-200 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="nc-label text-[#1a1a1a] mb-1.5">{t("contact.workingHours")}</p>
                    <p className="nc-body-sm text-[#1a1a1a]/65">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="nc-body-sm text-[#1a1a1a]/40">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </FadeInReveal>

            {/* Form side */}
            <FadeInReveal delay={0.1} className="py-12 sm:py-16 lg:py-20 pl-0 lg:pl-14">
              <p className="nc-label text-[#1a1a1a]/40 mb-6 sm:mb-8">{t("contact.sendMessage")}</p>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 max-w-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block nc-label text-[#1a1a1a]/60 mb-2">{t("contact.fullName")}</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 nc-body-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors rounded-sm min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label className="block nc-label text-[#1a1a1a]/60 mb-2">{t("contact.phone")}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9XXXXXXXXX"
                      className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 nc-body-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors rounded-sm min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block nc-label text-[#1a1a1a]/60 mb-2">{t("contact.subject")}</label>
                  <input
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 nc-body-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors rounded-sm min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block nc-label text-[#1a1a1a]/60 mb-2">{t("contact.message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 nc-body-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors resize-none rounded-sm"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-8 bg-[#123524] text-[#FAF5EE] text-[15px] tracking-[0.01em] hover:bg-[#0e2a1c] transition-colors disabled:opacity-50 font-medium rounded-sm">
                  {isSubmitting ? t("contact.sending") : (
                    <>{t("contact.send")} <ArrowRight className="w-4 h-4" /></>
                  )}
                </motion.button>
              </form>
            </FadeInReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
