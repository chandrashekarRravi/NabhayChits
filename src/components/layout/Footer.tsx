import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#f5f0e8] text-[#1a1a1a] border-t border-[#1a1a1a]/10">
      <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px]">
        {/* Single grid container stretching tall */}
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/10 min-h-[650px]">

          {/* LEFT COLUMN */}
          <div className="pt-16 pb-12 pr-0 lg:pr-16 flex flex-col justify-between h-full min-h-[400px]">
            {/* Top: Logo */}
            <div>
              <Link to="/" className="inline-block mb-8">
                <img src="/logo/NC-LOGO.png" alt="Nabhay Chits" className="h-20 w-auto" />
                <img src="/logo/NC-LOGO-word.png" alt="Nabhay Chits" className="h-5 w-auto" />
              </Link>

            </div>

            {/* Bottom: Legal Info */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs text-[#c59822] font-medium tracking-wide">Plan • Save • Participate • Grow</p>
                <p className="text-xs text-[#1a1a1a]/60 leading-relaxed max-w-[300px]">
                  Professionally managed chit fund services serving Karnataka since 2015.<br />
                  © {new Date().getFullYear()} Nabhay Chits. All rights reserved.
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <Link to="/contact" className="text-xs text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/contact" className="text-xs text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/contact" className="text-xs text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors">
                  Communications Disclosures
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="pt-16 pb-12 pl-0 lg:pl-16 flex flex-col justify-between h-full min-h-[400px]">
            {/* Top: Headline & Subscribe */}
            <div>
              <h2 className="font-cormorant text-[clamp(32px,3vw,48px)] font-normal leading-[1.1] text-[#1a1a1a] mb-24 max-w-lg">
                Our Chit...<br />Your Future...
              </h2>

              {/* Email subscribe row */}
              <div className="flex items-stretch border border-[#1a1a1a]/15 max-w-lg bg-transparent hover:border-[#1a1a1a]/30 transition-colors">
                <input
                  type="text"
                  placeholder="Your phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent px-5 py-4 text-[13px] placeholder:text-[#1a1a1a]/40 outline-none"
                />
                <button className="bg-[#d4c8b0] hover:bg-[#c9bb9e] transition-colors text-[#1a1a1a] text-[13px] font-medium px-8 py-4 whitespace-nowrap">
                  Contact Us
                </button>
              </div>
              <p className="text-[11px] text-[#1a1a1a]/40 mt-4 leading-relaxed max-w-md">
                By submitting you agree to be contacted by our team regarding available chit schemes from Nabhay Chits.
              </p>
            </div>

            {/* Bottom: Nav & Contact Info */}
            <div className="grid grid-cols-2 gap-8 mt-24">
              {/* Nav */}
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-xs font-medium text-[#1a1a1a]/80 hover:text-[#123524] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Contact */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-[#1a1a1a]/50 mb-1">General Inquiries</p>
                  <a href="tel:+919742130555" className="text-xs font-medium text-[#1a1a1a] hover:text-[#123524] transition-colors block">
                    +91 9742130555
                  </a>
                  <a href="tel:+919538595555" className="text-xs font-medium text-[#1a1a1a] hover:text-[#123524] transition-colors block">
                    +91 9538595555
                  </a>
                </div>
                <div>
                  <p className="text-xs text-[#1a1a1a]/50 mb-1">Office Address</p>
                  <p className="text-xs font-medium text-[#1a1a1a] leading-relaxed">
                    Opp Guru Wines Road,<br />
                    Maruthi Nagar, Tumkur
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
