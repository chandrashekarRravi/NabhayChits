import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Language = "en" | "kn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",

    // Hero
    "hero.badge": "Since 2015",
    "hero.title1": "Our Chit...",
    "hero.titleHighlight": "Your Future",
    "hero.title2": "",
    "hero.description": "Plan • Save • Participate • Grow. Your Trust, Our Strength. Nabhay Chits has been serving customers across Karnataka since 2015 with flexible and transparent chit fund schemes.",
    "hero.exploreServices": "Explore Schemes",
    "hero.learnAbout": "Learn About Us",
    "hero.stat1Value": "10+",
    "hero.stat1Label": "Years of Experience",
    "hero.stat2Value": "25+",
    "hero.stat2Label": "Active Chit Groups",
    "hero.stat3Value": "500+",
    "hero.stat3Label": "Customers",

    // About
    "about.badge": "About Us",
    "about.title1": "Your Trust,",
    "about.titleHighlight": "Our Strength",
    "about.title2": "Since 2015",
    "about.p1": "Nabhay Chits was established with a clear commitment: to provide accessible, transparent, and professionally managed chit fund services to customers in Karnataka.",
    "about.p2": "With more than 10 years of experience, more than 25 active chit groups, and more than 500 customers, we continue to build long-term relationships based on trust, clarity, and responsible service.",
    "about.security": "Trust",
    "about.securityDesc": "We believe strong financial relationships are built on trust and integrity.",
    "about.transparency": "Transparency",
    "about.transparencyDesc": "We strive to provide clear information about schemes, payments, procedures and applicable terms.",
    "about.growth": "Professional Service",
    "about.growthDesc": "We focus on responsible processes and a customer-first approach.",
    "about.community": "Customer Support",
    "about.communityDesc": "Our team is committed to providing timely and professional assistance.",
    "about.yearsServing": "Years of Experience",

    // Services Section (Home)
    "services.badge": "Our Schemes",
    "services.title1": "Chit Fund Schemes",
    "services.titleHighlight": "For Every Need",
    "services.description": "Explore our range of chit fund schemes designed to suit different savings capacities and financial requirements, subject to applicable scheme terms.",

    "services.flexibleChits": "Flexible Chit Fund Schemes",
    "services.flexibleChitsDesc": "We offer chit fund schemes designed to suit different savings capacities and financial requirements, subject to the applicable scheme terms.",
    "services.flexibleChitsF1": "Multiple chit values available",
    "services.flexibleChitsF2": "Subject to scheme terms",
    "services.flexibleChitsF3": "Transparent process",

    "services.monthlySavings": "Monthly Savings Plans",
    "services.monthlySavingsDesc": "Plan your finances with a structured monthly contribution that encourages regular and disciplined saving.",
    "services.monthlySavingsF1": "Structured monthly contributions",
    "services.monthlySavingsF2": "Disciplined saving approach",
    "services.monthlySavingsF3": "Flexible chit values",

    "services.multipleOptions": "Multiple Chit Options",
    "services.multipleOptionsDesc": "Choose from different chit values and durations based on your financial requirements and eligibility.",
    "services.multipleOptionsF1": "₹1 Lakh — ₹5,000/month",
    "services.multipleOptionsF2": "₹2 Lakh — ₹10,000/month",
    "services.multipleOptionsF3": "₹3 Lakh — ₹15,000/month",

    "services.financialPlanning": "Financial Planning Support",
    "services.financialPlanningDesc": "Our team helps customers understand available chit schemes, contribution schedules, procedures and important terms before joining.",
    "services.financialPlanningF1": "Scheme consultation",
    "services.financialPlanningF2": "Contribution guidance",
    "services.financialPlanningF3": "Clear documentation",

    "services.learnMore": "Learn More",
    "services.viewAll": "View All Schemes",

    // Features
    "features.badge": "Why Choose Us",
    "features.title1": "Chits You Can",
    "features.titleHighlight": "Trust",
    "features.description": "We combine experience with transparency to provide you with reliable and professionally managed chit fund services.",
    "features.secureBanking": "Trust",
    "features.secureBankingDesc": "We believe strong financial relationships are built on trust and integrity.",
    "features.transparentTx": "Transparency",
    "features.transparentTxDesc": "We strive to provide clear information about schemes, payments, procedures and applicable terms.",
    "features.support": "Customer Support",
    "features.supportDesc": "Our team is committed to providing timely and professional assistance.",
    "features.privacy": "Flexible Options",
    "features.privacyDesc": "Explore chit schemes designed for different financial requirements, subject to applicable terms and eligibility.",
    "features.easyAccess": "Professional Service",
    "features.easyAccessDesc": "We focus on responsible processes and a customer-first approach.",
    "features.quickProcess": "Convenient Access",
    "features.quickProcessDesc": "We aim to make customer interactions more convenient through timely communication and accessible support channels.",

    // Why Choose Us
    "why.badge": "Service Principles",
    "why.title1": "Why Choose",
    "why.titleHighlight": "Nabhay Chits",
    "why.description": "We are committed to providing reliable, transparent, and professionally managed chit fund services.",
    "why.p1.title": "Trust & Security",
    "why.p1.desc": "Operating with integrity and responsibility for over 10 years to protect our members' interests.",
    "why.p2.title": "Complete Transparency",
    "why.p2.desc": "Clear communication of all scheme terms, auction processes, and member obligations upfront.",
    "why.p3.title": "Dedicated Support",
    "why.p3.desc": "Our professional team is always available to assist with queries, payments, and documentation.",
    "why.p4.title": "Professional Service",
    "why.p4.desc": "A structured, reliable approach to chit fund management ensuring smooth operations.",
    "why.p5.title": "Flexible Options",
    "why.p5.desc": "Multiple scheme sizes and durations designed to suit different financial capacities.",

    // How It Works
    "how.badge": "How It Works",
    "how.title1": "Your Journey With Us",
    "how.description": "A simple and transparent process to start your savings journey.",
    "how.s1.title": "Explore Schemes",
    "how.s1.desc": "Review our available chit fund schemes to find one that matches your financial goals.",
    "how.s2.title": "Contact Us",
    "how.s2.desc": "Get in touch with our team to understand the complete details, terms, and eligibility.",
    "how.s3.title": "Review Terms",
    "how.s3.desc": "Carefully read and understand the applicable Chit Agreement and all obligations.",
    "how.s4.title": "Complete Documentation",
    "how.s4.desc": "Submit the required KYC documents and complete the registration process.",
    "how.s5.title": "Participate",
    "how.s5.desc": "Start contributing and participate in auctions according to the scheme rules.",

    // CTA
    "cta.title1": "Ready to Start Your",
    "cta.titleHighlight": "Savings Journey?",
    "cta.description": "Join over 500 customers who trust Nabhay Chits. Contact us today to learn about our available chit schemes.",
    "cta.openAccount": "Join a Scheme",
    "cta.contactUs": "Contact Us",
    "cta.noHidden": "Plan • Save • Participate • Grow",

    // Footer
    "footer.tagline": "Your Trust, Our Strength. Nabhay Chits has been providing transparent and professionally managed chit fund services since 2015.",
    "footer.ourServices": "Our Schemes",
    "footer.company": "Company",
    "footer.aboutUs": "About Us",
    "footer.contactUs": "Contact Us",
    "footer.headOffice": "Office",
    "footer.rights": "All rights reserved.",
    "footer.disclaimer": "Chit fund services are subject to applicable scheme terms and regulations.",

    // Services Page
    "servicesPage.badge": "Our Schemes",
    "servicesPage.title1": "Chit Fund Schemes",
    "servicesPage.titleHighlight": "For You",
    "servicesPage.description": "Choose from our range of chit fund schemes designed for different savings capacities and financial requirements. Simple, transparent, and professionally managed.",
    "servicesPage.applyNow": "Enquire Now",
    "servicesPage.quickCalculator": "Scheme Overview",
    "servicesPage.sampleAmount": "Chit Amount:",
    "servicesPage.duration": "Monthly Payment:",
    "servicesPage.maturityAmount": "Chit Value:",
    "servicesPage.readyTitle": "Ready to Get Started?",
    "servicesPage.readyDesc": "Contact us to learn about available chit schemes and joining procedures.",

    // Scheme table labels
    "schemes.amount1": "₹1 Lakh",
    "schemes.amount2": "₹2 Lakh",
    "schemes.amount3": "₹3 Lakh",
    "schemes.amount4": "₹5 Lakh",
    "schemes.payment1": "₹5,000/month",
    "schemes.payment2": "₹10,000/month",
    "schemes.payment3": "₹15,000/month",
    "schemes.payment4": "₹25,000/month",
    "schemes.note": "Subject to applicable scheme terms and Chit Agreement. Payment options available daily, weekly, or monthly where applicable.",

    // Contact Page
    "contact.badge": "Contact Us",
    "contact.title1": "We're Here to",
    "contact.titleHighlight": "Help",
    "contact.description": "Have questions about our chit schemes? Reach out and our team will assist you.",
    "contact.sendMessage": "Send us a Message",
    "contact.fullName": "Full Name *",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number *",
    "contact.subject": "Subject *",
    "contact.message": "Message *",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.getInTouch": "Get in Touch",
    "contact.workingHours": "Working Hours",
    "contact.messageSent": "Message Sent!",
    "contact.messageSuccess": "We'll get back to you as soon as possible.",
    "contact.address": "Address",
    "contact.phone.label": "Phone",
  },
  kn: {
    // Nav
    "nav.home": "ಮುಖಪುಟ",
    "nav.services": "ಸೇವೆಗಳು",
    "nav.contact": "ಸಂಪರ್ಕಿಸಿ",
    "nav.getStarted": "ಪ್ರಾರಂಭಿಸಿ",

    // Hero
    "hero.badge": "2015 ರಿಂದ",
    "hero.title1": "ನಮ್ಮ ಚಿಟ್...",
    "hero.titleHighlight": "ನಿಮ್ಮ ಭವಿಷ್ಯ",
    "hero.title2": "",
    "hero.description": "ಯೋಜಿಸಿ • ಉಳಿಸಿ • ಭಾಗವಹಿಸಿ • ಬೆಳೆಯಿರಿ. ನಿಮ್ಮ ನಂಬಿಕೆ, ನಮ್ಮ ಶಕ್ತಿ. ನಾಭಯ್ ಚಿಟ್ಸ್ 2015 ರಿಂದ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಗ್ರಾಹಕರಿಗೆ ಸ್ಪಷ್ಟ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕ ಚಿಟ್ ಫಂಡ್ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತಿದೆ.",
    "hero.exploreServices": "ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",
    "hero.learnAbout": "ನಮ್ಮ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
    "hero.stat1Value": "10+",
    "hero.stat1Label": "ವರ್ಷಗಳ ಅನುಭವ",
    "hero.stat2Value": "25+",
    "hero.stat2Label": "ಸಕ್ರಿಯ ಚಿಟ್ ಗುಂಪುಗಳು",
    "hero.stat3Value": "500+",
    "hero.stat3Label": "ಗ್ರಾಹಕರು",

    // About
    "about.badge": "ನಮ್ಮ ಬಗ್ಗೆ",
    "about.title1": "ನಿಮ್ಮ ನಂಬಿಕೆ,",
    "about.titleHighlight": "ನಮ್ಮ ಶಕ್ತಿ",
    "about.title2": "2015 ರಿಂದ",
    "about.p1": "ನಾಭಯ್ ಚಿಟ್ಸ್ ಸ್ಪಷ್ಟ ಬದ್ಧತೆಯೊಂದಿಗೆ ಸ್ಥಾಪಿಸಲಾಗಿದೆ: ಕರ್ನಾಟಕದ ಗ್ರಾಹಕರಿಗೆ ಪ್ರವೇಶಿಸಬಹುದಾದ, ಪಾರದರ್ಶಕ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕವಾಗಿ ನಿರ್ವಹಿಸಲಾದ ಚಿಟ್ ಫಂಡ್ ಸೇವೆಗಳನ್ನು ನೀಡಲು.",
    "about.p2": "10 ವರ್ಷಗಳಿಗಿಂತ ಹೆಚ್ಚಿನ ಅನುಭವ, 25 ಕ್ಕೂ ಹೆಚ್ಚು ಸಕ್ರಿಯ ಚಿಟ್ ಗುಂಪುಗಳು ಮತ್ತು 500 ಕ್ಕೂ ಹೆಚ್ಚು ಗ್ರಾಹಕರೊಂದಿಗೆ, ನಾವು ನಂಬಿಕೆ, ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಸೇವೆಯ ಆಧಾರದ ಮೇಲೆ ದೀರ್ಘಕಾಲೀನ ಸಂಬಂಧಗಳನ್ನು ಬೆಳೆಸುತ್ತಿದ್ದೇವೆ.",
    "about.security": "ನಂಬಿಕೆ",
    "about.securityDesc": "ಬಲವಾದ ಹಣಕಾಸಿನ ಸಂಬಂಧಗಳು ನಂಬಿಕೆ ಮತ್ತು ಸಮಗ್ರತೆಯ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.",
    "about.transparency": "ಪಾರದರ್ಶಕತೆ",
    "about.transparencyDesc": "ಯೋಜನೆಗಳು, ಪಾವತಿಗಳು, ಕಾರ್ಯವಿಧಾನಗಳು ಮತ್ತು ಅನ್ವಯಿಸುವ ನಿಯಮಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟ ಮಾಹಿತಿ ನೀಡಲು ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.",
    "about.growth": "ವ್ಯಾವಸಾಯಿಕ ಸೇವೆ",
    "about.growthDesc": "ನಾವು ಜವಾಬ್ದಾರಿಯುತ ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ಗ್ರಾಹಕ-ಮೊದಲು ವಿಧಾನದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತೇವೆ.",
    "about.community": "ಗ್ರಾಹಕ ಬೆಂಬಲ",
    "about.communityDesc": "ನಮ್ಮ ತಂಡವು ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕ ಸಹಾಯ ನೀಡಲು ಬದ್ಧವಾಗಿದೆ.",
    "about.yearsServing": "ವರ್ಷಗಳ ಅನುಭವ",

    // Services Section (Home)
    "services.badge": "ನಮ್ಮ ಯೋಜನೆಗಳು",
    "services.title1": "ಚಿಟ್ ಫಂಡ್ ಯೋಜನೆಗಳು",
    "services.titleHighlight": "ಪ್ರತಿಯೊಂದು ಅಗತ್ಯಕ್ಕೂ",
    "services.description": "ಅನ್ವಯಿಸುವ ಯೋಜನೆ ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟು ವಿವಿಧ ಉಳಿತಾಯ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಹಣಕಾಸಿನ ಅಗತ್ಯಗಳಿಗೆ ಸೂಕ್ತವಾದ ನಮ್ಮ ಚಿಟ್ ಫಂಡ್ ಯೋಜನೆಗಳ ಶ್ರೇಣಿಯನ್ನು ಅನ್ವೇಷಿಸಿ.",

    "services.flexibleChits": "ಹೊಂದಿಕೊಳ್ಳುವ ಚಿಟ್ ಫಂಡ್ ಯೋಜನೆಗಳು",
    "services.flexibleChitsDesc": "ಅನ್ವಯಿಸುವ ಯೋಜನೆ ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟು ವಿವಿಧ ಉಳಿತಾಯ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಹಣಕಾಸಿನ ಅಗತ್ಯಗಳಿಗೆ ಸೂಕ್ತವಾದ ಚಿಟ್ ಫಂಡ್ ಯೋಜನೆಗಳನ್ನು ನಾವು ನೀಡುತ್ತೇವೆ.",
    "services.flexibleChitsF1": "ಬಹು ಚಿಟ್ ಮೌಲ್ಯಗಳು ಲಭ್ಯ",
    "services.flexibleChitsF2": "ಯೋಜನೆ ನಿಯಮಗಳಿಗೆ ಒಳಪಟ್ಟು",
    "services.flexibleChitsF3": "ಪಾರದರ್ಶಕ ಪ್ರಕ್ರಿಯೆ",

    "services.monthlySavings": "ಮಾಸಿಕ ಉಳಿತಾಯ ಯೋಜನೆಗಳು",
    "services.monthlySavingsDesc": "ನಿಯಮಿತ ಮತ್ತು ಶಿಸ್ತಿನ ಉಳಿತಾಯವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವ ರಚನಾತ್ಮಕ ಮಾಸಿಕ ಕೊಡುಗೆಯೊಂದಿಗೆ ನಿಮ್ಮ ಹಣಕಾಸನ್ನು ಯೋಜಿಸಿ.",
    "services.monthlySavingsF1": "ರಚನಾತ್ಮಕ ಮಾಸಿಕ ಕೊಡುಗೆಗಳು",
    "services.monthlySavingsF2": "ಶಿಸ್ತಿನ ಉಳಿತಾಯ ವಿಧಾನ",
    "services.monthlySavingsF3": "ಹೊಂದಿಕೊಳ್ಳುವ ಚಿಟ್ ಮೌಲ್ಯಗಳು",

    "services.multipleOptions": "ಬಹು ಚಿಟ್ ಆಯ್ಕೆಗಳು",
    "services.multipleOptionsDesc": "ನಿಮ್ಮ ಹಣಕಾಸಿನ ಅಗತ್ಯಗಳು ಮತ್ತು ಅರ್ಹತೆಯ ಆಧಾರದ ಮೇಲೆ ವಿವಿಧ ಚಿಟ್ ಮೌಲ್ಯಗಳು ಮತ್ತು ಅವಧಿಗಳಿಂದ ಆಯ್ಕೆ ಮಾಡಿ.",
    "services.multipleOptionsF1": "₹1 ಲಕ್ಷ — ₹5,000/ತಿಂಗಳು",
    "services.multipleOptionsF2": "₹2 ಲಕ್ಷ — ₹10,000/ತಿಂಗಳು",
    "services.multipleOptionsF3": "₹3 ಲಕ್ಷ — ₹15,000/ತಿಂಗಳು",

    "services.financialPlanning": "ಹಣಕಾಸು ಯೋಜನೆ ಬೆಂಬಲ",
    "services.financialPlanningDesc": "ನಮ್ಮ ತಂಡವು ಗ್ರಾಹಕರಿಗೆ ಲಭ್ಯವಿರುವ ಚಿಟ್ ಯೋಜನೆಗಳು, ಕೊಡುಗೆ ವೇಳಾಪಟ್ಟಿಗಳು, ಕಾರ್ಯವಿಧಾನಗಳು ಮತ್ತು ಸೇರ್ಪಡೆ ಮೊದಲು ಮುಖ್ಯ ನಿಯಮಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    "services.financialPlanningF1": "ಯೋಜನೆ ಸಮಾಲೋಚನೆ",
    "services.financialPlanningF2": "ಕೊಡುಗೆ ಮಾರ್ಗದರ್ಶನ",
    "services.financialPlanningF3": "ಸ್ಪಷ್ಟ ದಾಖಲೆ",

    "services.learnMore": "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    "services.viewAll": "ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ",

    // Features
    "features.badge": "ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು",
    "features.title1": "ನೀವು ನಂಬಬಹುದಾದ",
    "features.titleHighlight": "ಚಿಟ್ ಸೇವೆ",
    "features.description": "ನಿಖರ, ಪಾರದರ್ಶಕ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕವಾಗಿ ನಿರ್ವಹಿಸಲಾದ ಚಿಟ್ ಫಂಡ್ ಸೇವೆಗಳನ್ನು ನೀಡಲು ನಾವು ಅನುಭವ ಮತ್ತು ಪಾರದರ್ಶಕತೆಯನ್ನು ಸಂಯೋಜಿಸುತ್ತೇವೆ.",
    "features.secureBanking": "ನಂಬಿಕೆ",
    "features.secureBankingDesc": "ಬಲವಾದ ಹಣಕಾಸಿನ ಸಂಬಂಧಗಳು ನಂಬಿಕೆ ಮತ್ತು ಸಮಗ್ರತೆಯ ಮೇಲೆ ನಿರ್ಮಿಸಲಾಗಿದೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ.",
    "features.transparentTx": "ಪಾರದರ್ಶಕತೆ",
    "features.transparentTxDesc": "ಯೋಜನೆಗಳು, ಪಾವತಿಗಳು, ಕಾರ್ಯವಿಧಾನಗಳು ಮತ್ತು ಅನ್ವಯಿಸುವ ನಿಯಮಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟ ಮಾಹಿತಿ ನೀಡಲು ನಾವು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ.",
    "features.support": "ಗ್ರಾಹಕ ಬೆಂಬಲ",
    "features.supportDesc": "ನಮ್ಮ ತಂಡವು ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕ ಸಹಾಯ ನೀಡಲು ಬದ್ಧವಾಗಿದೆ.",
    "features.privacy": "ಹೊಂದಿಕೊಳ್ಳುವ ಆಯ್ಕೆಗಳು",
    "features.privacyDesc": "ಅನ್ವಯಿಸುವ ನಿಯಮಗಳು ಮತ್ತು ಅರ್ಹತೆಗೆ ಒಳಪಟ್ಟು ವಿವಿಧ ಹಣಕಾಸಿನ ಅಗತ್ಯಗಳಿಗೆ ರೂಪಿಸಲಾದ ಚಿಟ್ ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
    "features.easyAccess": "ವ್ಯಾವಸಾಯಿಕ ಸೇವೆ",
    "features.easyAccessDesc": "ನಾವು ಜವಾಬ್ದಾರಿಯುತ ಪ್ರಕ್ರಿಯೆಗಳು ಮತ್ತು ಗ್ರಾಹಕ-ಮೊದಲು ವಿಧಾನದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತೇವೆ.",
    "features.quickProcess": "ಅನುಕೂಲಕರ ಪ್ರವೇಶ",
    "features.quickProcessDesc": "ಸಮಯಕ್ಕೆ ಸರಿಯಾದ ಸಂವಹನ ಮತ್ತು ಪ್ರವೇಶಿಸಬಹುದಾದ ಬೆಂಬಲ ಚಾನೆಲ್‌ಗಳ ಮೂಲಕ ಗ್ರಾಹಕ ಸಂವಹನಗಳನ್ನು ಹೆಚ್ಚು ಅನುಕೂಲಕರವಾಗಿ ಮಾಡಲು ನಾವು ಗುರಿ ಹೊಂದಿದ್ದೇವೆ.",

    // Why Choose Us
    "why.badge": "Service Principles",
    "why.title1": "Why Choose",
    "why.titleHighlight": "Nabhay Chits",
    "why.description": "We are committed to providing reliable, transparent, and professionally managed chit fund services.",
    "why.p1.title": "Trust & Security",
    "why.p1.desc": "Operating with integrity and responsibility for over 10 years to protect our members' interests.",
    "why.p2.title": "Complete Transparency",
    "why.p2.desc": "Clear communication of all scheme terms, auction processes, and member obligations upfront.",
    "why.p3.title": "Dedicated Support",
    "why.p3.desc": "Our professional team is always available to assist with queries, payments, and documentation.",
    "why.p4.title": "Professional Service",
    "why.p4.desc": "A structured, reliable approach to chit fund management ensuring smooth operations.",
    "why.p5.title": "Flexible Options",
    "why.p5.desc": "Multiple scheme sizes and durations designed to suit different financial capacities.",

    // How It Works
    "how.badge": "How It Works",
    "how.title1": "Your Journey With Us",
    "how.description": "A simple and transparent process to start your savings journey.",
    "how.s1.title": "Explore Schemes",
    "how.s1.desc": "Review our available chit fund schemes to find one that matches your financial goals.",
    "how.s2.title": "Contact Us",
    "how.s2.desc": "Get in touch with our team to understand the complete details, terms, and eligibility.",
    "how.s3.title": "Review Terms",
    "how.s3.desc": "Carefully read and understand the applicable Chit Agreement and all obligations.",
    "how.s4.title": "Complete Documentation",
    "how.s4.desc": "Submit the required KYC documents and complete the registration process.",
    "how.s5.title": "Participate",
    "how.s5.desc": "Start contributing and participate in auctions according to the scheme rules.",

    // CTA
    "cta.title1": "ನಿಮ್ಮ",
    "cta.titleHighlight": "ಉಳಿತಾಯ ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರೇ?",
    "cta.description": "500 ಕ್ಕೂ ಹೆಚ್ಚು ಗ್ರಾಹಕರನ್ನು ಸೇರಿ, ಅವರು ನಾಭಯ್ ಚಿಟ್ಸ್ ಅನ್ನು ನಂಬುತ್ತಾರೆ. ಲಭ್ಯವಿರುವ ಚಿಟ್ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "cta.openAccount": "ಯೋಜನೆಯನ್ನು ಸೇರಿ",
    "cta.contactUs": "ಸಂಪರ್ಕಿಸಿ",
    "cta.noHidden": "ಯೋಜಿಸಿ • ಉಳಿಸಿ • ಭಾಗವಹಿಸಿ • ಬೆಳೆಯಿರಿ",

    // Footer
    "footer.tagline": "ನಿಮ್ಮ ನಂಬಿಕೆ, ನಮ್ಮ ಶಕ್ತಿ. ನಾಭಯ್ ಚಿಟ್ಸ್ 2015 ರಿಂದ ಪಾರದರ್ಶಕ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕ ಚಿಟ್ ಫಂಡ್ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತಿದೆ.",
    "footer.ourServices": "ನಮ್ಮ ಯೋಜನೆಗಳು",
    "footer.company": "ಸಂಸ್ಥೆ",
    "footer.aboutUs": "ನಮ್ಮ ಬಗ್ಗೆ",
    "footer.contactUs": "ಸಂಪರ್ಕಿಸಿ",
    "footer.headOffice": "ಕಚೇರಿ",
    "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.disclaimer": "ಚಿಟ್ ಫಂಡ್ ಸೇವೆಗಳು ಅನ್ವಯಿಸುವ ಯೋಜನೆ ನಿಯಮಗಳು ಮತ್ತು ನಿಯಂತ್ರಣಗಳಿಗೆ ಒಳಪಟ್ಟಿವೆ.",

    // Services Page
    "servicesPage.badge": "ನಮ್ಮ ಯೋಜನೆಗಳು",
    "servicesPage.title1": "ಚಿಟ್ ಫಂಡ್ ಯೋಜನೆಗಳು",
    "servicesPage.titleHighlight": "ನಿಮಗಾಗಿ",
    "servicesPage.description": "ವಿಭಿನ್ನ ಉಳಿತಾಯ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಹಣಕಾಸಿನ ಅಗತ್ಯಗಳಿಗಾಗಿ ರೂಪಿಸಲಾದ ನಮ್ಮ ಚಿಟ್ ಫಂಡ್ ಯೋಜನೆಗಳ ಶ್ರೇಣಿಯಿಂದ ಆಯ್ಕೆ ಮಾಡಿ. ಸರಳ, ಪಾರದರ್ಶಕ ಮತ್ತು ವ್ಯಾವಸಾಯಿಕವಾಗಿ ನಿರ್ವಹಿಸಲಾಗಿದೆ.",
    "servicesPage.applyNow": "ವಿಚಾರಿಸಿ",
    "servicesPage.quickCalculator": "ಯೋಜನೆ ಅವಲೋಕನ",
    "servicesPage.sampleAmount": "ಚಿಟ್ ಮೊತ್ತ:",
    "servicesPage.duration": "ಮಾಸಿಕ ಪಾವತಿ:",
    "servicesPage.maturityAmount": "ಚಿಟ್ ಮೌಲ್ಯ:",
    "servicesPage.readyTitle": "ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರೇ?",
    "servicesPage.readyDesc": "ಲಭ್ಯವಿರುವ ಚಿಟ್ ಯೋಜನೆಗಳು ಮತ್ತು ಸೇರ್ಪಡೆ ಕಾರ್ಯವಿಧಾನಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.",

    // Scheme table labels
    "schemes.amount1": "₹1 ಲಕ್ಷ",
    "schemes.amount2": "₹2 ಲಕ್ಷ",
    "schemes.amount3": "₹3 ಲಕ್ಷ",
    "schemes.amount4": "₹5 ಲಕ್ಷ",
    "schemes.payment1": "₹5,000/ತಿಂಗಳು",
    "schemes.payment2": "₹10,000/ತಿಂಗಳು",
    "schemes.payment3": "₹15,000/ತಿಂಗಳು",
    "schemes.payment4": "₹25,000/ತಿಂಗಳು",
    "schemes.note": "ಅನ್ವಯಿಸುವ ಯೋಜನೆ ನಿಯಮಗಳು ಮತ್ತು ಚಿಟ್ ಒಪ್ಪಂದಕ್ಕೆ ಒಳಪಟ್ಟು. ಅನ್ವಯವಾಗುವ ಕಡೆ ದೈನಂದಿನ, ಸಾಪ್ತಾಹಿಕ ಅಥವಾ ಮಾಸಿಕ ಪಾವತಿ ಆಯ್ಕೆಗಳು ಲಭ್ಯ.",

    // Contact Page
    "contact.badge": "ಸಂಪರ್ಕಿಸಿ",
    "contact.title1": "ನಾವು ಇಲ್ಲಿದ್ದೇವೆ",
    "contact.titleHighlight": "ಸಹಾಯ",
    "contact.description": "ನಮ್ಮ ಚಿಟ್ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ನಮ್ಮ ತಂಡವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಾಗಿದೆ.",
    "contact.sendMessage": "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    "contact.fullName": "ಪೂರ್ಣ ಹೆಸರು *",
    "contact.email": "ಇಮೇಲ್ ವಿಳಾಸ",
    "contact.phone": "ಫೋನ್ ಸಂಖ್ಯೆ *",
    "contact.subject": "ವಿಷಯ *",
    "contact.message": "ಸಂದೇಶ *",
    "contact.send": "ಸಂದೇಶ ಕಳುಹಿಸಿ",
    "contact.sending": "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...",
    "contact.getInTouch": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
    "contact.workingHours": "ಕೆಲಸದ ಸಮಯ",
    "contact.messageSent": "ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ!",
    "contact.messageSuccess": "ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
    "contact.address": "ವಿಳಾಸ",
    "contact.phone.label": "ಫೋನ್",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "kn" ? "kn" : "en") as Language;
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || translations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}


