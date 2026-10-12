import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Terms & Conditions page for Nabhay Chits.
 *
 * Legal verification status (October 2026):
 * - Permit/certificate number: NOT YET VERIFIED — omitted
 * - Regulatory authority details: NOT YET VERIFIED — omitted
 * - Penalty rates and deadlines: NOT YET VERIFIED — generic language used
 * - Chit Agreement document: NOT YET ATTACHED — referenced as governing document
 *
 * Do not alter the intended meaning of any clause without client instruction.
 */

type Clause = { id: string; en: { title: string; body: string }; kn: { title: string; body: string } };

const CLAUSES: Clause[] = [
  {
    id: "general",
    en: {
      title: "1. General terms",
      body: "By using this website or enquiring about chit fund schemes offered by Nabhay Chits, you agree to these terms. The actual rights and obligations of each member are governed by the applicable Chit Agreement and scheme documentation, not by this website. Nothing on this website constitutes a binding offer or contractual commitment.",
    },
    kn: {
      title: "1. ಸಾಮಾನ್ಯ ನಿಯಮಗಳು",
      body: "ಈ ವೆಬ್‌ಸೈಟ್ ಬಳಸುವ ಮೂಲಕ ಅಥವಾ ನಾಭಯ್ ಚಿಟ್ಸ್ ಚಿಟ್ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿಕೊಳ್ಳುವ ಮೂಲಕ ನೀವು ಈ ನಿಯಮಗಳಿಗೆ ಸಮ್ಮತಿ ನೀಡುತ್ತೀರಿ. ಪ್ರತಿ ಸದಸ್ಯರ ನಿಜವಾದ ಹಕ್ಕುಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳು ಅನ್ವಯವಾಗುವ ಚಿಟ್ ಒಪ್ಪಂದ ಮತ್ತು ಯೋಜನೆ ದಾಖಲಾತಿಯಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ, ಈ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ಅಲ್ಲ.",
    },
  },
  {
    id: "membership",
    en: {
      title: "2. Chit membership",
      body: "Membership in a chit group is subject to Nabhay Chits' acceptance and the fulfilment of all eligibility and documentation requirements. Acceptance of a membership application does not constitute a guarantee of participation. Terms and conditions of membership are set out in the Chit Agreement applicable to each scheme.",
    },
    kn: {
      title: "2. ಚಿಟ್ ಸದಸ್ಯತ್ವ",
      body: "ಚಿಟ್ ಗುಂಪಿನಲ್ಲಿ ಸದಸ್ಯತ್ವವು ನಾಭಯ್ ಚಿಟ್ಸ್‌ನ ಸ್ವೀಕೃತಿ ಮತ್ತು ಎಲ್ಲಾ ಅರ್ಹತೆ ಹಾಗೂ ದಾಖಲಾತಿ ಅವಶ್ಯಕತೆಗಳ ಪೂರ್ಣಗೊಳಿಸುವಿಕೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ. ಸದಸ್ಯತ್ವ ಅರ್ಜಿ ಸ್ವೀಕೃತಿಯು ಭಾಗವಹಿಸುವಿಕೆಗೆ ಖಾತರಿ ಅಲ್ಲ.",
    },
  },
  {
    id: "kyc",
    en: {
      title: "3. KYC and documentation",
      body: "All prospective members must complete Know Your Customer (KYC) verification and submit the required identification and address documents before joining any chit scheme. Nabhay Chits reserves the right to request additional documents at any stage.",
    },
    kn: {
      title: "3. KYC ಮತ್ತು ದಾಖಲಾತಿ",
      body: "ಎಲ್ಲಾ ಭಾವೀ ಸದಸ್ಯರು ಯಾವುದೇ ಚಿಟ್ ಯೋಜನೆಗೆ ಸೇರ್ಪಡೆ ಆಗುವ ಮೊದಲು KYC ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಳಿಸಬೇಕು ಮತ್ತು ಅಗತ್ಯ ಗುರುತಿನ ಹಾಗೂ ವಿಳಾಸ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಬೇಕು.",
    },
  },
  {
    id: "instalments",
    en: {
      title: "4. Instalment payments",
      body: "Each member is obligated to pay the monthly instalment on time throughout the entire duration of the scheme, regardless of whether they have already received the prize (chit) amount. Timely payment is a fundamental obligation under the Chit Agreement.",
    },
    kn: {
      title: "4. ಕಂತು ಪಾವತಿಗಳು",
      body: "ಪ್ರತಿ ಸದಸ್ಯರು ಯೋಜನೆಯ ಸಂಪೂರ್ಣ ಅವಧಿಯಲ್ಲಿ ಮಾಸಿಕ ಕಂತನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಪಾವತಿಸಲು ಬದ್ಧರಾಗಿರುತ್ತಾರೆ, ಅವರು ಮೊದಲೇ ಬಹುಮಾನ ಪಡೆದಿದ್ದರೂ ಸಹ.",
    },
  },
  {
    id: "payment-channels",
    en: {
      title: "5. Authorised payment channels",
      body: "Payments must be made only through channels authorised by Nabhay Chits. Members should not make payments to any individual agent or representative without receiving an official receipt. Nabhay Chits is not responsible for payments made through unauthorised channels.",
    },
    kn: {
      title: "5. ಅಧಿಕೃತ ಪಾವತಿ ಮಾರ್ಗಗಳು",
      body: "ಪಾವತಿಗಳನ್ನು ನಾಭಯ್ ಚಿಟ್ಸ್ ಅಧಿಕೃತಗೊಳಿಸಿದ ಮಾರ್ಗಗಳ ಮೂಲಕ ಮಾತ್ರ ಮಾಡಬೇಕು. ಅಧಿಕೃತ ರಶೀದಿ ಇಲ್ಲದೆ ಯಾವುದೇ ವ್ಯಕ್ತಿಗೆ ಪಾವತಿ ಮಾಡಬಾರದು.",
    },
  },
  {
    id: "draw-auction",
    en: {
      title: "6. Draw, auction and prize amount",
      body: "Auctions are conducted as per the rules specified in the applicable Chit Agreement. Members may bid at auctions. The prize amount received by the successful bidder will be the chit amount minus the auction discount and other applicable deductions as specified in the Chit Agreement. Nabhay Chits does not guarantee any specific auction outcome.",
    },
    kn: {
      title: "6. ಡ್ರಾ, ಹರಾಜು ಮತ್ತು ಬಹುಮಾನದ ಮೊತ್ತ",
      body: "ಹರಾಜುಗಳನ್ನು ಅನ್ವಯವಾಗುವ ಚಿಟ್ ಒಪ್ಪಂದದಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ನಿಯಮಗಳ ಅನ್ವಯ ನಡೆಸಲಾಗುತ್ತದೆ. ಬಹುಮಾನದ ಮೊತ್ತವು ಚಿಟ್ ಮೊತ್ತದಿಂದ ಹರಾಜು ರಿಯಾಯಿತಿ ಮತ್ತು ಇತರ ಕಡಿತಗಳನ್ನು ತೆಗೆದ ಮೊತ್ತವಾಗಿರುತ್ತದೆ.",
    },
  },
  {
    id: "security-docs",
    en: {
      title: "7. Security and required documents",
      body: "Members who receive the prize amount before completing all their instalments may be required to provide security in the form of property documents, guarantors, or other acceptable forms as specified by Nabhay Chits. All security requirements will be communicated prior to disbursement.",
    },
    kn: {
      title: "7. ಭದ್ರತೆ ಮತ್ತು ಅಗತ್ಯ ದಾಖಲೆಗಳು",
      body: "ಎಲ್ಲಾ ಕಂತುಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸುವ ಮೊದಲು ಬಹುಮಾನ ಪಡೆಯುವ ಸದಸ್ಯರು ಆಸ್ತಿ ದಾಖಲೆಗಳು, ಖಾತರಿದಾರರು ಅಥವಾ ಇತರ ಸ್ವೀಕಾರಾರ್ಹ ರೂಪದಲ್ಲಿ ಭದ್ರತೆ ಒದಗಿಸಬೇಕಾಗಬಹುದು.",
    },
  },
  {
    id: "agreements-stamp",
    en: {
      title: "8. Agreements and applicable stamp duty",
      body: "All chit fund membership agreements are executed in writing. Applicable stamp duty as per Karnataka law must be paid. Members are responsible for reviewing the Chit Agreement before signing. Signing the agreement confirms acceptance of all its terms.",
    },
    kn: {
      title: "8. ಒಪ್ಪಂದಗಳು ಮತ್ತು ಸ್ಟ್ಯಾಂಪ್ ಡ್ಯೂಟಿ",
      body: "ಎಲ್ಲಾ ಚಿಟ್ ಫಂಡ್ ಸದಸ್ಯತ್ವ ಒಪ್ಪಂದಗಳನ್ನು ಲಿಖಿತ ರೂಪದಲ್ಲಿ ಮಾಡಲಾಗುತ್ತದೆ. ಕರ್ನಾಟಕ ಕಾನೂನಿನ ಅಡಿ ಅನ್ವಯಿಸುವ ಸ್ಟ್ಯಾಂಪ್ ಡ್ಯೂಟಿ ಪಾವತಿಸಬೇಕು.",
    },
  },
  {
    id: "disbursement",
    en: {
      title: "9. Chit amount disbursement",
      body: "Disbursement of the prize amount is made after verification of all required documents and compliance with applicable procedures. Nabhay Chits reserves the right to withhold disbursement until all security requirements and documentation are satisfied.",
    },
    kn: {
      title: "9. ಚಿಟ್ ಮೊತ್ತ ವಿತರಣೆ",
      body: "ಎಲ್ಲಾ ಅಗತ್ಯ ದಾಖಲೆಗಳ ಪರಿಶೀಲನೆ ಮತ್ತು ಅನ್ವಯವಾಗುವ ಕಾರ್ಯವಿಧಾನಗಳ ಅನುಸರಣೆ ನಂತರ ಬಹುಮಾನ ಮೊತ್ತ ವಿತರಿಸಲಾಗುತ್ತದೆ.",
    },
  },
  {
    id: "continuing-obligations",
    en: {
      title: "10. Continuing instalment obligations",
      body: "Receiving the prize amount does not end a member's obligation to continue paying monthly instalments for the remainder of the scheme duration. Failure to continue paying after receiving the prize may be treated as a default.",
    },
    kn: {
      title: "10. ಕಂತು ಜವಾಬ್ದಾರಿಗಳ ಮುಂದುವರಿಕೆ",
      body: "ಬಹುಮಾನ ಮೊತ್ತ ಸ್ವೀಕರಿಸಿದ ನಂತರವೂ ಯೋಜನೆಯ ಉಳಿದ ಅವಧಿಗೆ ಮಾಸಿಕ ಕಂತು ಪಾವತಿಸುವ ಜವಾಬ್ದಾರಿ ಮುಂದುವರಿಯುತ್ತದೆ.",
    },
  },
  {
    id: "default-recovery",
    en: {
      title: "11. Default and lawful recovery procedures",
      body: "In the event of default by a member, Nabhay Chits may initiate lawful recovery procedures as permitted under applicable law. This may include recovery from guarantors, security documents, or through legal proceedings. Members are encouraged to communicate with Nabhay Chits promptly if they anticipate difficulty in making payments.",
    },
    kn: {
      title: "11. ಡೀಫಾಲ್ಟ್ ಮತ್ತು ಕಾನೂನುಬದ್ಧ ವಸೂಲಾತಿ",
      body: "ಸದಸ್ಯ ಡೀಫಾಲ್ಟ್ ಆದ ಸಂದರ್ಭದಲ್ಲಿ, ನಾಭಯ್ ಚಿಟ್ಸ್ ಅನ್ವಯವಾಗುವ ಕಾನೂನಿನ ಅಡಿ ಅನುಮತಿಸಲಾದ ಕಾನೂನುಬದ್ಧ ವಸೂಲಾತಿ ಕ್ರಮಗಳನ್ನು ಪ್ರಾರಂಭಿಸಬಹುದು.",
    },
  },
  {
    id: "discontinuation",
    en: {
      title: "12. Discontinuation of membership",
      body: "Discontinuation of membership before the end of the scheme is subject to the terms of the applicable Chit Agreement. Members who wish to exit a scheme should contact Nabhay Chits to understand the applicable conditions. Nabhay Chits does not guarantee exit on demand.",
    },
    kn: {
      title: "12. ಸದಸ್ಯತ್ವ ಸ್ಥಗಿತ",
      body: "ಯೋಜನೆ ಮುಗಿಯುವ ಮೊದಲು ಸದಸ್ಯತ್ವ ಸ್ಥಗಿತಗೊಳಿಸುವುದು ಅನ್ವಯವಾಗುವ ಚಿಟ್ ಒಪ್ಪಂದದ ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟಿರುತ್ತದೆ.",
    },
  },
  {
    id: "late-payments",
    en: {
      title: "13. Late payments",
      body: "Instalments not received by the due date may attract late payment charges as specified in the applicable Chit Agreement. Persistent late payment may be treated as default. Members should refer to their Chit Agreement for applicable rates. [Specific rate: to be confirmed per scheme documentation]",
    },
    kn: {
      title: "13. ತಡವಾದ ಪಾವತಿಗಳು",
      body: "ನಿಗದಿತ ದಿನಾಂಕದೊಳಗೆ ಸ್ವೀಕರಿಸದ ಕಂತುಗಳಿಗೆ ಅನ್ವಯವಾಗುವ ಚಿಟ್ ಒಪ್ಪಂದದಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಿದ ವಿಳಂಬ ಶುಲ್ಕ ಅನ್ವಯಿಸಬಹುದು.",
    },
  },
  {
    id: "cheques-security",
    en: {
      title: "14. Cheques and security",
      body: "Members may be required to submit post-dated cheques or other instruments as security for future instalments or as part of the conditions for prize amount disbursement. Dishonoured cheques may attract applicable legal action.",
    },
    kn: {
      title: "14. ಚೆಕ್‌ಗಳು ಮತ್ತು ಭದ್ರತೆ",
      body: "ಸದಸ್ಯರು ಭವಿಷ್ಯದ ಕಂತುಗಳ ಭದ್ರತೆಯಾಗಿ ನಂತರದ ದಿನಾಂಕದ ಚೆಕ್‌ಗಳನ್ನು ಸಲ್ಲಿಸಲು ಕೇಳಬಹುದು.",
    },
  },
  {
    id: "guarantor",
    en: {
      title: "15. Guarantor responsibilities",
      body: "Any person who acts as a guarantor for a chit fund member accepts joint responsibility for the member's outstanding obligations under the Chit Agreement. Guarantors should carefully read and understand the Chit Agreement before signing.",
    },
    kn: {
      title: "15. ಖಾತರಿದಾರರ ಜವಾಬ್ದಾರಿಗಳು",
      body: "ಚಿಟ್ ಫಂಡ್ ಸದಸ್ಯರಿಗೆ ಖಾತರಿದಾರರಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುವ ವ್ಯಕ್ತಿಯು ಚಿಟ್ ಒಪ್ಪಂದದ ಅಡಿ ಸದಸ್ಯರ ಬಾಕಿ ಜವಾಬ್ದಾರಿಗಳಿಗೆ ಜಂಟಿ ಜವಾಬ್ದಾರಿ ಸ್ವೀಕರಿಸುತ್ತಾರೆ.",
    },
  },
  {
    id: "false-docs",
    en: {
      title: "16. False or misleading documents",
      body: "Providing false, incomplete, or misleading information or documents to Nabhay Chits during membership application or at any stage of the scheme is strictly prohibited and may result in immediate termination of membership and/or legal action.",
    },
    kn: {
      title: "16. ಸುಳ್ಳು ಅಥವಾ ತಪ್ಪುದಾರಿಗೆಳೆಯುವ ದಾಖಲೆಗಳು",
      body: "ಸದಸ್ಯತ್ವ ಅರ್ಜಿ ಅಥವಾ ಯೋಜನೆಯ ಯಾವುದೇ ಹಂತದಲ್ಲಿ ನಾಭಯ್ ಚಿಟ್ಸ್‌ಗೆ ಸುಳ್ಳು, ಅಪೂರ್ಣ ಅಥವಾ ತಪ್ಪುದಾರಿ ಮಾಹಿತಿ ಅಥವಾ ದಾಖಲೆಗಳನ್ನು ಒದಗಿಸುವುದು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ನಿಷೇಧಿಸಲಾಗಿದೆ.",
    },
  },
  {
    id: "fraud-prevention",
    en: {
      title: "17. Fraud prevention",
      body: "Nabhay Chits takes fraud prevention seriously. Any member or third party found to have engaged in fraudulent activity relating to a chit scheme will be reported to the appropriate authorities and subjected to lawful proceedings.",
    },
    kn: {
      title: "17. ವಂಚನೆ ತಡೆಗಟ್ಟುವಿಕೆ",
      body: "ನಾಭಯ್ ಚಿಟ್ಸ್ ವಂಚನೆ ತಡೆಗಟ್ಟುವಿಕೆಯನ್ನು ಗಂಭೀರವಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ. ಚಿಟ್ ಯೋಜನೆಗೆ ಸಂಬಂಧಿಸಿದ ವಂಚನಾ ಚಟುವಟಿಕೆಯಲ್ಲಿ ತೊಡಗಿದ್ದಾರೆ ಎಂದು ಪತ್ತೆಯಾದ ಯಾರನ್ನಾದರೂ ಸಂಬಂಧಿತ ಅಧಿಕಾರಿಗಳಿಗೆ ವರದಿ ಮಾಡಲಾಗುತ್ತದೆ.",
    },
  },
  {
    id: "privacy-data",
    en: {
      title: "18. Privacy and personal data",
      body: "Personal data collected during KYC and membership registration is used for the purpose of administering the chit scheme and meeting applicable regulatory requirements. Nabhay Chits does not sell personal data to third parties. Please refer to our Privacy Policy for information about data collected through this website.",
    },
    kn: {
      title: "18. ಗೌಪ್ಯತೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ಡೇಟಾ",
      body: "KYC ಮತ್ತು ಸದಸ್ಯತ್ವ ನೋಂದಣಿ ಸಮಯದಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾದ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಚಿಟ್ ಯೋಜನೆಯ ಆಡಳಿತ ಮತ್ತು ಅನ್ವಯಿಸುವ ನಿಯಂತ್ರಕ ಅವಶ್ಯಕತೆಗಳ ಪೂರ್ಣಗೊಳಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.",
    },
  },
  {
    id: "website-disclaimer",
    en: {
      title: "19. Website disclaimer",
      body: "The content on this website is for general informational purposes only. It does not constitute legal, financial, or investment advice. Scheme details, terms, and procedures described on this website are indicative only. Actual terms are governed by the Chit Agreement applicable to each scheme. Nabhay Chits reserves the right to update website content without prior notice.",
    },
    kn: {
      title: "19. ವೆಬ್‌ಸೈಟ್ ಹಕ್ಕುತ್ಯಾಗ",
      body: "ಈ ವೆಬ್‌ಸೈಟ್‌ನ ವಿಷಯವು ಕೇವಲ ಸಾಮಾನ್ಯ ಮಾಹಿತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ. ಇದು ಕಾನೂನು, ಹಣಕಾಸು ಅಥವಾ ಹೂಡಿಕೆ ಸಲಹೆ ಅಲ್ಲ. ನಿಜವಾದ ನಿಯಮಗಳು ಅನ್ವಯವಾಗುವ ಚಿಟ್ ಒಪ್ಪಂದದಿಂದ ನಿಯಂತ್ರಿಸಲ್ಪಡುತ್ತದೆ.",
    },
  },
  {
    id: "no-guaranteed-return",
    en: {
      title: "20. No guaranteed investment return",
      body: "Chit funds are not fixed-deposit or guaranteed-return investment products. The amount received by a member depends on the auction outcome and applicable deductions. Members should not treat participation in a chit scheme as a guaranteed investment. Nabhay Chits does not promise or guarantee any specific financial return.",
    },
    kn: {
      title: "20. ಖಾತರಿಪಡಿಸಿದ ಹೂಡಿಕೆ ಲಾಭವಿಲ್ಲ",
      body: "ಚಿಟ್ ಫಂಡ್‌ಗಳು ಸ್ಥಿರ-ಠೇವಣಿ ಅಥವಾ ಖಾತರಿ-ಲಾಭ ಹೂಡಿಕೆ ಉತ್ಪನ್ನಗಳಲ್ಲ. ಸದಸ್ಯ ಪಡೆಯುವ ಮೊತ್ತವು ಹರಾಜಿನ ಫಲಿತಾಂಶ ಮತ್ತು ಅನ್ವಯಿಸುವ ಕಡಿತಗಳನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ನಾಭಯ್ ಚಿಟ್ಸ್ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಹಣಕಾಸಿನ ಲಾಭದ ಭರವಸೆ ನೀಡುವುದಿಲ್ಲ.",
    },
  },
  {
    id: "changes-to-terms",
    en: {
      title: "21. Changes to website terms",
      body: "Nabhay Chits may update these website terms at any time. The updated terms will be published on this page. Continued use of this website after any such changes constitutes your acceptance of the new terms.",
    },
    kn: {
      title: "21. ವೆಬ್‌ಸೈಟ್ ನಿಯಮಗಳಿಗೆ ಬದಲಾವಣೆಗಳು",
      body: "ನಾಭಯ್ ಚಿಟ್ಸ್ ಯಾವಾಗ ಬೇಕಾದರೂ ಈ ವೆಬ್‌ಸೈಟ್ ನಿಯಮಗಳನ್ನು ನವೀಕರಿಸಬಹುದು. ಬದಲಾವಣೆಗಳ ನಂತರ ಈ ವೆಬ್‌ಸೈಟ್ ಮುಂದುವರಿಸಿ ಬಳಸಿದರೆ ಹೊಸ ನಿಯಮಗಳಿಗೆ ಸಮ್ಮತಿ ಎಂದು ಅರ್ಥ.",
    },
  },
  {
    id: "fraud-alert",
    en: {
      title: "22. Fraud alert",
      body: "Beware of fraudulent individuals or entities claiming to represent Nabhay Chits. We do not solicit payments through social media, unofficial apps, or unverified agents. If you receive a suspicious communication claiming to be from Nabhay Chits, please verify directly by calling us at 9742130555 or 9538595555.",
    },
    kn: {
      title: "22. ವಂಚನೆ ಎಚ್ಚರಿಕೆ",
      body: "ನಾಭಯ್ ಚಿಟ್ಸ್ ಪ್ರತಿನಿಧಿಸುತ್ತಿದ್ದೇವೆ ಎಂದು ಹೇಳಿಕೊಳ್ಳುವ ವಂಚನೆ ವ್ಯಕ್ತಿಗಳಿಂದ ಎಚ್ಚರವಾಗಿರಿ. ಅನುಮಾನಾಸ್ಪದ ಸಂವಹನ ಸಿಕ್ಕರೆ, ನೇರವಾಗಿ 9742130555 ಅಥವಾ 9538595555 ಗೆ ಕರೆ ಮಾಡಿ ಪರಿಶೀಲಿಸಿ.",
    },
  },
  {
    id: "grievance",
    en: {
      title: "23. Grievance redressal",
      body: "Members or prospective members with grievances or complaints may contact Nabhay Chits directly at the office or by phone. We aim to resolve all complaints promptly and fairly. [A formal grievance officer designation and email contact have not yet been provided — contact us by phone until further notice.]",
    },
    kn: {
      title: "23. ಕುಂದುಕೊರತೆ ನಿವಾರಣೆ",
      body: "ಕುಂದುಕೊರತೆಗಳಿರುವ ಸದಸ್ಯರು ಅಥವಾ ಭಾವೀ ಸದಸ್ಯರು ನಾಭಯ್ ಚಿಟ್ಸ್ ಕಚೇರಿಯಲ್ಲಿ ನೇರವಾಗಿ ಅಥವಾ ಫೋನ್ ಮೂಲಕ ಸಂಪರ್ಕಿಸಬಹುದು. ಔಪಚಾರಿಕ ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿ ಮಾಹಿತಿ ಇನ್ನಷ್ಟೇ ನೀಡಲಾಗುವುದು.",
    },
  },
];

const Terms = () => {
  const { language } = useLanguage();
  const isKn = language === "kn";

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
                {isKn ? "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು" : "Terms & Conditions"}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-[800px] mx-auto px-[56px] md:px-[32px] sm:px-[20px]">

            {/* Prominent disclaimer */}
            <div className="bg-white p-6 mb-12 border-l-4 border-[#c59822]">
              <p className="text-sm text-[#1a1a1a]/80 leading-relaxed">
                {isKn
                  ? "ಈ ವೆಬ್‌ಸೈಟ್ ವಿಷಯವು ಕೇವಲ ಮಾಹಿತಿ ಉದ್ದೇಶಕ್ಕಾಗಿ. ನಿಮ್ಮ ನಿಜವಾದ ನಿಯಮಗಳು ಮತ್ತು ಜವಾಬ್ದಾರಿಗಳು ಅನ್ವಯವಾಗುವ ಚಿಟ್ ಒಪ್ಪಂದ ಮತ್ತು ಯೋಜನೆ ದಾಖಲಾತಿಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತವೆ. ಸೇರ್ಪಡೆ ಮೊದಲು ಸಂಪೂರ್ಣ ಚಿಟ್ ಒಪ್ಪಂದ ಓದಿ ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಿ."
                  : "The content on this website is for informational purposes only. Your actual rights and obligations are governed by the applicable Chit Agreement and scheme documentation. Please read and understand the complete Chit Agreement before joining any scheme."}
              </p>
            </div>

            {/* Contact box */}
            <div className="bg-[#123524] text-[#FAF5EE] p-6 mb-12">
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#c59822] mb-3">
                {isKn ? "ಸಂಪರ್ಕ ಮತ್ತು ಕಚೇರಿ" : "Contact & Office"}
              </p>
              <address className="not-italic text-sm leading-relaxed text-[#FAF5EE]/80">
                <strong className="text-[#FAF5EE]">Nabhay Chits</strong><br />
                Opp Guru Wines Road, Behind Vijaya Motors<br />
                Maruthi Nagar, Tumkur – 572102, Karnataka<br />
                <a href="tel:+919742130555" className="text-[#c59822] hover:underline">+91 9742130555</a>
                {" · "}
                <a href="tel:+919538595555" className="text-[#c59822] hover:underline">+91 9538595555</a>
              </address>
            </div>

            {/* Clauses */}
            <div className="space-y-8">
              {CLAUSES.map((c) => {
                const clause = isKn ? c.kn : c.en;
                return (
                  <div key={c.id} className="pb-8 border-b border-[#1a1a1a]/10 last:border-0">
                    <h2 className="text-lg font-semibold text-[#1a1a1a] mb-3">{clause.title}</h2>
                    <p className="text-sm text-[#1a1a1a]/70 leading-relaxed">{clause.body}</p>
                  </div>
                );
              })}
            </div>

            {/* Pending verification note */}
            <div className="mt-12 p-5 bg-white border border-[#1a1a1a]/10 text-sm text-[#1a1a1a]/60 leading-relaxed">
              <strong className="text-[#1a1a1a]">
                {isKn ? "ಪರಿಶೀಲನೆ ಬಾಕಿ:" : "Pending verification:"}
              </strong>{" "}
              {isKn
                ? "ಅಧಿಕೃತ ಅನುಮತಿ/ಪ್ರಮಾಣಪತ್ರ ಸಂಖ್ಯೆ, ನಿಯಂತ್ರಕ ಅಧಿಕಾರ ವಿವರಗಳು, ವಿಳಂಬ ಶುಲ್ಕ ದರಗಳು ಮತ್ತು ಔಪಚಾರಿಕ ಕುಂದುಕೊರತೆ ಅಧಿಕಾರಿ ನಾಮಕರಣ — ಇವು ಪ್ರಸ್ತುತ ಈ ಪುಟದಲ್ಲಿ ತೋರಿಸಲಾಗಿಲ್ಲ ಏಕೆಂದರೆ ಇನ್ನೂ ಒದಗಿಸಲಾಗಿಲ್ಲ. ಈ ಮಾಹಿತಿ ಲಭ್ಯವಾದಾಗ ಅಪ್‌ಡೇಟ್ ಮಾಡಲಾಗುವುದು."
                : "Official permit/certificate number, regulatory authority details, late payment penalty rates, and formal grievance officer designation are not currently shown on this page as they have not yet been provided. This page will be updated once that information is available."}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
