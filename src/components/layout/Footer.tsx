import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { FadeInReveal } from "@/components/common/MotionTransitions";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.contact"), path: "/contact" },
    { name: t("footer.terms"), path: "/terms" },
    { name: t("footer.privacy"), path: "/privacy" },
  ];

  return (
    <footer className="bg-[#f5f0e8] text-[#1a1a1a] border-t border-[#1a1a1a]/10">
      <div className="mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">

          {/* LEFT — Brand identity */}
          <FadeInReveal className="pt-12 sm:pt-16 pb-8 sm:pb-12 pr-0 lg:pr-16 flex flex-col justify-between gap-8 sm:gap-12">
            {/* Logo lockup */}
            <Link to="/" className="flex items-center gap-3 sm:gap-4 w-fit group">
              <img
                src="/logo/NC-LOGO.png"
                alt="Nabhay Chits logo"
                className="h-20 sm:h-24 w-auto flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
              <div>
                <img
                  src="/logo/NC-LOGO-word.png"
                  alt="Nabhay Chits"
                  className="h-4 sm:h-5 w-auto mt-8 sm:mt-12"
                  loading="lazy"
                />
                <p className="nc-label text-[#1a1a1a]/40 mt-1">Since 2015</p>
              </div>
            </Link>

            {/* Tagline */}
            <div className="space-y-2 sm:space-y-3">
              <p className="nc-cta-h2 text-[#1a1a1a] leading-[1.15]">
                Our Chit…<br />
                <em className="not-italic text-[#123524]">Your Future</em>
              </p>
              <p className="text-[12px] text-[#c59822] tracking-[0.06em] uppercase font-medium">
                Building Financial Confidence, Together
              </p>
              <p className="nc-small text-[#1a1a1a]/60 max-w-[320px]">
                Professionally managed chit fund services serving Karnataka since 2015.
              </p>
            </div>

            {/* Copyright + legal links */}
            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-0">
              <p className="nc-small text-[#1a1a1a]/50">
                © {new Date().getFullYear()} Nabhay Chits. {t("footer.rights")}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/terms" className="nc-small text-[#1a1a1a]/60 hover:text-[#123524] hover:underline transition-all min-h-[36px] flex items-center">
                  {t("footer.terms")}
                </Link>
                <Link to="/privacy" className="nc-small text-[#1a1a1a]/60 hover:text-[#123524] hover:underline transition-all min-h-[36px] flex items-center">
                  {t("footer.privacy")}
                </Link>
                <Link to="/contact" className="nc-small text-[#1a1a1a]/60 hover:text-[#123524] hover:underline transition-all min-h-[36px] flex items-center">
                  {t("footer.communications")}
                </Link>
              </div>
            </div>
          </FadeInReveal>

          {/* RIGHT — Navigation + contact */}
          <FadeInReveal delay={0.1} className="pt-10 sm:pt-16 pb-12 pl-0 lg:pl-16 flex flex-col justify-between gap-8 sm:gap-12">
            {/* CTA headline */}
            <div>
              <p className="nc-label text-[#1a1a1a]/40 mb-3 sm:mb-4">
                {t("nav.contact")}
              </p>
              <h2 className="nc-cta-h2 text-[#1a1a1a] mb-5 sm:mb-6 max-w-sm">
                {t("cta.title1")}{" "}
                <em className="not-italic text-[#123524]">{t("cta.titleHighlight")}</em>
              </h2>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 min-h-[48px] px-7 bg-[#123524] text-[#FAF5EE] text-[14px] tracking-[0.01em] hover:bg-[#0e2a1c] transition-colors rounded-sm"
                >
                  {t("cta.contactUs")} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            </div>

            {/* Nav + Contact details grid: 1 col on small mobile (<360px), 2 cols elsewhere */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 pt-4">
              {/* Site links */}
              <div>
                <p className="nc-label text-[#1a1a1a]/50 mb-3 sm:mb-4">Pages</p>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="nc-small text-[#1a1a1a]/70 hover:text-[#123524] hover:translate-x-1 transition-all inline-flex items-center min-h-[36px]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                <div>
                  <p className="nc-label text-[#1a1a1a]/50 mb-1.5">{t("contact.phone.label")}</p>
                  <a href="tel:+919742130555" className="nc-small text-[#1a1a1a] hover:text-[#123524] transition-colors block py-0.5">
                    +91 9742130555
                  </a>
                  <a href="tel:+919538595555" className="nc-small text-[#1a1a1a] hover:text-[#123524] transition-colors block py-0.5">
                    +91 9538595555
                  </a>
                </div>
                <div>
                  <p className="nc-label text-[#1a1a1a]/50 mb-1.5">{t("contact.address")}</p>
                  <address className="not-italic nc-small text-[#1a1a1a]/80 leading-relaxed">
                    Opp Guru Wines Road,<br />
                    Behind Vijaya Motors,<br />
                    Maruthi Nagar,<br />
                    Tumkur – 572102
                  </address>
                </div>
              </div>
            </div>
          </FadeInReveal>

        </div>
      </div>
    </footer>
  );
}
