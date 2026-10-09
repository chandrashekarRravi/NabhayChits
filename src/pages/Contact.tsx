import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

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
            <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] pt-32 pb-24">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#c59822] mb-8">{t("contact.badge")}</p>
              <h1 className="font-cormorant text-[clamp(40px,5vw,80px)] font-normal leading-[1.05] text-[#FAF5EE] max-w-xl">
                {t("contact.title1")}{" "}
                <span className="italic">{t("contact.titleHighlight")}</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Main split */}
        <div className="border-t border-[#1a1a1a]/10">
          <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">

            {/* Contact info */}
            <div className="py-20 pr-0 lg:pr-20 space-y-12">
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 mb-6">{t("contact.getInTouch")}</p>
                <p className="text-[14px] text-[#1a1a1a]/55 leading-relaxed max-w-sm">{t("contact.description")}</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/10 flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#123524]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1a1a1a] mb-1 tracking-wide uppercase">{t("contact.address")}</p>
                    <p className="text-[13px] text-[#1a1a1a]/55 leading-relaxed">
                      Opp Guru Wines Road, Behind Vijaya Motors,<br />
                      Maruthi Nagar, Tumkur - 572102, Karnataka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/10 flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#123524]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1a1a1a] mb-1 tracking-wide uppercase">{t("contact.phone.label")}</p>
                    <a href="tel:+919742130555" className="block text-[13px] text-[#1a1a1a]/55 hover:text-[#123524] transition-colors">9742130555</a>
                    <a href="tel:+919538595555" className="block text-[13px] text-[#1a1a1a]/55 hover:text-[#123524] transition-colors">9538595555</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-8 h-8 flex items-center justify-center border border-[#1a1a1a]/10 flex-shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#123524]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1a1a1a] mb-1 tracking-wide uppercase">{t("contact.workingHours")}</p>
                    <p className="text-[13px] text-[#1a1a1a]/55">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="text-[13px] text-[#1a1a1a]/35">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="py-20 pl-0 lg:pl-20">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 mb-10">{t("contact.sendMessage")}</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-medium text-[#1a1a1a]/60 mb-2 uppercase tracking-wider">{t("contact.fullName")}</label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 text-[14px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-medium text-[#1a1a1a]/60 mb-2 uppercase tracking-wider">{t("contact.phone")}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9XXXXXXXXX"
                      className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 text-[14px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#1a1a1a]/60 mb-2 uppercase tracking-wider">{t("contact.subject")}</label>
                  <input
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 text-[14px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-[#1a1a1a]/60 mb-2 uppercase tracking-wider">{t("contact.message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#1a1a1a]/15 bg-transparent px-4 py-3 text-[14px] text-[#1a1a1a] placeholder:text-[#1a1a1a]/30 outline-none focus:border-[#123524] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 h-[52px] px-8 bg-[#123524] text-[#FAF5EE] text-[14px] font-medium hover:bg-[#0e2a1c] transition-colors disabled:opacity-50">
                  {isSubmitting ? t("contact.sending") : (
                    <>{t("contact.send")} <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

