import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

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
      <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px]">
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10">

          {/* LEFT — Brand identity */}
          <div className="pt-16 pb-12 pr-0 lg:pr-16 flex flex-col justify-between gap-12">
            {/* Logo lockup */}
            <Link to="/" className="flex items-center gap-4 w-fit">
              <img
                src="/logo/NC-LOGO.png"
                alt="Nabhay Chits logo"
                className="h-24 w-auto flex-shrink-0"
                loading="lazy"
              />
              <div>
                <img
                  src="/logo/NC-LOGO-word.png"
                  alt="Nabhay Chits"
                  className="h-5 w-auto mt-12"
                  loading="lazy"
                />
                <p className="text-[9px] tracking-[0.18em] uppercase text-[#1a1a1a]/40 mt-1">Since 2015</p>
              </div>
            </Link>

            {/* Tagline */}
            <div className="space-y-3">
              <p className="font-cormorant text-[clamp(22px,2vw,30px)] font-normal leading-snug text-[#1a1a1a]">
                Our Chit…<br />
                <span className="italic text-[#123524]">Your Future</span>
              </p>
              <p className="text-[12px] text-[#c59822] font-medium tracking-wide">
                Your Trust, Our Strength
              </p>
              <p className="text-xs text-[#1a1a1a]/55 leading-relaxed max-w-[300px]">
                Professionally managed chit fund services serving Karnataka since 2015.
              </p>
            </div>

            {/* Copyright + legal links */}
            <div className="space-y-4">
              <p className="text-xs text-[#1a1a1a]/40">
                © {new Date().getFullYear()} Nabhay Chits. {t("footer.rights")}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/terms" className="text-xs text-[#1a1a1a]/55 hover:text-[#1a1a1a] transition-colors">
                  {t("footer.terms")}
                </Link>
                <Link to="/privacy" className="text-xs text-[#1a1a1a]/55 hover:text-[#1a1a1a] transition-colors">
                  {t("footer.privacy")}
                </Link>
                <Link to="/contact" className="text-xs text-[#1a1a1a]/55 hover:text-[#1a1a1a] transition-colors">
                  {t("footer.communications")}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT — Navigation + contact */}
          <div className="pt-16 pb-12 pl-0 lg:pl-16 flex flex-col justify-between gap-12">
            {/* CTA headline */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#1a1a1a]/35 mb-4">
                {t("nav.contact")}
              </p>
              <h2 className="font-cormorant text-[clamp(28px,2.5vw,40px)] font-normal leading-[1.1] text-[#1a1a1a] mb-6 max-w-xs">
                {t("cta.title1")}{" "}
                <span className="italic text-[#123524]">{t("cta.titleHighlight")}</span>
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-[48px] px-7 bg-[#123524] text-[#FAF5EE] text-[13px] font-medium hover:bg-[#0e2a1c] transition-colors"
              >
                {t("cta.contactUs")} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Nav + Contact details grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Site links */}
              <div>
                <p className="text-xs text-[#1a1a1a]/40 uppercase tracking-widest mb-4">Pages</p>
                <div className="flex flex-col gap-2.5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-xs font-medium text-[#1a1a1a]/70 hover:text-[#123524] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#1a1a1a]/40 mb-2">{t("contact.phone.label")}</p>
                  <a href="tel:+919742130555" className="text-xs font-medium text-[#1a1a1a] hover:text-[#123524] transition-colors block">
                    +91 9742130555
                  </a>
                  <a href="tel:+919538595555" className="text-xs font-medium text-[#1a1a1a] hover:text-[#123524] transition-colors block mt-1">
                    +91 9538595555
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#1a1a1a]/40 mb-2">{t("contact.address")}</p>
                  <address className="not-italic text-xs font-medium text-[#1a1a1a] leading-relaxed">
                    Opp Guru Wines Road,<br />
                    Behind Vijaya Motors,<br />
                    Maruthi Nagar,<br />
                    Tumkur – 572102
                  </address>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
