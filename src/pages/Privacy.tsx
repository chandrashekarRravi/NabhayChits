import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Privacy Policy page for Nabhay Chits.
 *
 * What the contact form collects: name, phone, subject, message (no email is required).
 * Submission is simulated (setTimeout, no network call, no third-party, no persistence).
 * No cookies, analytics, or tracking libraries are used beyond what the hosting platform may set.
 * This page only describes what the current implementation actually does.
 */

const Privacy = () => {
  const { language } = useLanguage();
  const isKn = language === "kn";

  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e8]">
      <Header />
      <main className="flex-1">
        <section className="bg-[#123524]">
          <div className="border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] pt-32 pb-24">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#c59822] mb-8">
                {isKn ? "ಕಾನೂನು ಮಾಹಿತಿ" : "Legal Information"}
              </p>
              <h1 className="font-cormorant text-[clamp(40px,5vw,80px)] font-normal leading-[1.05] text-[#FAF5EE] max-w-xl">
                {isKn ? "ಗೌಪ್ಯತಾ ನೀತಿ" : "Privacy Policy"}
              </h1>
              <p className="text-[13px] text-[#FAF5EE]/40 mt-4">
                {isKn ? `ಕೊನೆಯ ನವೀಕರಣ: ${lastUpdated}` : `Last updated: ${lastUpdated}`}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[800px] mx-auto px-[56px] md:px-[32px] sm:px-[20px] space-y-10 text-[#1a1a1a]">

            {/* Disclaimer */}
            <div className="bg-white p-6 border border-[#1a1a1a]/10 rounded-sm">
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಈ ಗೌಪ್ಯತಾ ನೀತಿಯು ಈ ವೆಬ್‌ಸೈಟ್ ಮೂಲಕ ಯಾವ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ. ಚಿಟ್ ಒಪ್ಪಂದ ಪ್ರಕ್ರಿಯೆ, KYC ಅಥವಾ ಸದಸ್ಯತ್ವ ದಾಖಲೀಕರಣಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಡೇಟಾ ಸಂಗ್ರಹಣೆಯನ್ನು ಈ ನೀತಿ ಒಳಗೊಳ್ಳುವುದಿಲ್ಲ."
                  : "This privacy policy describes what information is collected through this website. It does not cover data collected as part of the chit agreement process, KYC, or membership documentation."}
              </p>
            </div>

            {/* Section 1 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "1. ನಾವು ಸಂಗ್ರಹಿಸುವ ಮಾಹಿತಿ" : "1. Information we collect"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಮೂಲಕ: ಹೆಸರು, ಫೋನ್ ಸಂಖ್ಯೆ, ವಿಷಯ ಮತ್ತು ಸಂದೇಶ. ಇಮೇಲ್ ಐಚ್ಛಿಕ. ಇತರ ಮಾಹಿತಿಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ."
                  : "Via the contact form: name, phone number, subject, and message. Email is optional. No other information is automatically collected by this website."}
              </p>
            </div>

            {/* Section 2 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "2. ಮಾಹಿತಿ ಹೇಗೆ ಬಳಸಲಾಗುತ್ತದೆ" : "2. How information is used"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಸಂಪರ್ಕ ಫಾರ್ಮ್ ಸಲ್ಲಿಕೆಯು ಪ್ರಸ್ತುತ ಅನುಕರಣಾತ್ಮಕ — ಡೇಟಾವನ್ನು ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ, ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ ಅಥವಾ ಮೂರನೇ ವ್ಯಕ್ತಿಗೆ ರವಾನಿಸಲಾಗುವುದಿಲ್ಲ. ನಿಮ್ಮ ವಿಚಾರಣೆಗಳಿಗೆ ನಮ್ಮ ತಂಡವು ಫೋನ್ ಮೂಲಕ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ."
                  : "The contact form submission is currently simulated — data is not transmitted over the network, stored, or passed to any third party. Our team responds to enquiries by phone."}
              </p>
            </div>

            {/* Section 3 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "3. ಕುಕೀಸ್ ಮತ್ತು ಟ್ರ್ಯಾಕಿಂಗ್" : "3. Cookies and tracking"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಈ ವೆಬ್‌ಸೈಟ್ ಭಾಷಾ ಆದ್ಯತೆ ಸಂಗ್ರಹಿಸಲು localStorage ಬಳಸುತ್ತದೆ. ಯಾವುದೇ analytics, advertising ಅಥವಾ ಟ್ರ್ಯಾಕಿಂಗ್ ಕುಕೀಗಳನ್ನು ಬಳಸಲಾಗಿಲ್ಲ."
                  : "This website uses localStorage to remember your language preference. No analytics, advertising, or tracking cookies are set by this application."}
              </p>
            </div>

            {/* Section 4 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "4. ಮೂರನೇ ವ್ಯಕ್ತಿ ಸೇವೆಗಳು" : "4. Third-party services"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಈ ವೆಬ್‌ಸೈಟ್ Google Fonts ಅನ್ನು ಬಳಸುತ್ತದೆ. ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನ ಹೋಸ್ಟಿಂಗ್ ಮತ್ತು ಅದರ ಗೌಪ್ಯತಾ ನೀತಿಗಳ ಮೂಲಕ ಮಾತ್ರ ಮಾಹಿತಿ ಸಂಗ್ರಹಿಸಲಾಗಬಹುದು."
                  : "This website loads fonts via Google Fonts. Your IP address may be processed by font servers when fonts are loaded. No personal data is shared with any other third-party service by this application."}
              </p>
            </div>

            {/* Section 5 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "5. ಡೇಟಾ ಭದ್ರತೆ" : "5. Data security"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಈ ವೆಬ್‌ಸೈಟ್ ಯಾವುದೇ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸದ ಕಾರಣ, ಡೇಟಾ ಉಲ್ಲಂಘನೆ ಅಪಾಯ ಕಡಿಮೆ. ಚಿಟ್ ಒಪ್ಪಂದ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾದ ಡೇಟಾ ಪ್ರತ್ಯೇಕ ನೀತಿಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ."
                  : "As this website does not collect or store personal data server-side, the risk of a data breach through this application is minimal. Data collected as part of the chit agreement process is subject to separate policies."}
              </p>
            </div>

            {/* Section 6 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "6. ಮಕ್ಕಳ ಗೌಪ್ಯತೆ" : "6. Children's privacy"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ಈ ವೆಬ್‌ಸೈಟ್ 18 ವರ್ಷದ ಕೆಳಗಿನ ವ್ಯಕ್ತಿಗಳಿಗೆ ಉದ್ದೇಶಿಸಲಾಗಿಲ್ಲ."
                  : "This website is not intended for persons under 18 years of age."}
              </p>
            </div>

            {/* Section 7 */}
            <div className="pb-8 border-b border-[#1a1a1a]/10">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "7. ಈ ನೀತಿಗೆ ಬದಲಾವಣೆಗಳು" : "7. Changes to this policy"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                {isKn
                  ? "ನಾವು ಈ ಗೌಪ್ಯತಾ ನೀತಿಯನ್ನು ನಿಯತಕಾಲಿಕವಾಗಿ ನವೀಕರಿಸಬಹುದು. ಬದಲಾವಣೆಗಳ ನಂತರ ಈ ವೆಬ್‌ಸೈಟ್ ಬಳಸುವುದನ್ನು ಮುಂದುವರಿಸಿದರೆ ಅದು ಹೊಸ ನೀತಿಗೆ ಸಮ್ಮತಿ ಎಂದು ಅರ್ಥ."
                  : "We may update this privacy policy from time to time. Continued use of this website after changes constitutes acceptance of the updated policy."}
              </p>
            </div>

            {/* Contact */}
            <div className="pb-8">
              <h2 className="text-xl font-semibold mb-3">
                {isKn ? "8. ಸಂಪರ್ಕ" : "8. Contact"}
              </h2>
              <p className="text-sm text-[#1a1a1a]/70 leading-relaxed mb-4">
                {isKn
                  ? "ಗೌಪ್ಯತಾ ಸಂಬಂಧಿ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ:"
                  : "For privacy-related questions, please contact us:"}
              </p>
              <address className="not-italic text-sm text-[#1a1a1a]/80 leading-relaxed">
                <strong>Nabhay Chits</strong><br />
                Opp Guru Wines Road, Behind Vijaya Motors<br />
                Maruthi Nagar, Tumkur – 572102, Karnataka<br />
                <a href="tel:+919742130555" className="text-[#123524] hover:underline">+91 9742130555</a><br />
                <a href="tel:+919538595555" className="text-[#123524] hover:underline">+91 9538595555</a>
              </address>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
