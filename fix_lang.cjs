const fs = require('fs');
let txt = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');

// Replace amounts globally
txt = txt.replace(/"schemes\.amount1": ".*?"/g, '"schemes.amount1": "₹1,00,000"');
txt = txt.replace(/"schemes\.amount2": ".*?"/g, '"schemes.amount2": "₹2,00,000"');
txt = txt.replace(/"schemes\.amount3": ".*?"/g, '"schemes.amount3": "₹3,00,000"');
txt = txt.replace(/"schemes\.amount4": ".*?"/g, '"schemes.amount4": "₹5,00,000"');

// Replace multiple options in English
txt = txt.replace(/"services\.multipleOptionsF1": "₹1 Lakh — ₹5,000\/month"/, '"services.multipleOptionsF1": "₹1,00,000 — ₹5,000/month"');
txt = txt.replace(/"services\.multipleOptionsF2": "₹2 Lakh — ₹10,000\/month"/, '"services.multipleOptionsF2": "₹2,00,000 — ₹10,000/month"');
txt = txt.replace(/"services\.multipleOptionsF3": "₹3 Lakh — ₹15,000\/month"/, '"services.multipleOptionsF3": "₹3,00,000 — ₹15,000/month"');

// Replace multiple options in Kannada
txt = txt.replace(/"services\.multipleOptionsF1": "₹1 ಲಕ್ಷ — ₹5,000\/ತಿಂಗಳು"/, '"services.multipleOptionsF1": "₹1,00,000 — ₹5,000/ತಿಂಗಳು"');
txt = txt.replace(/"services\.multipleOptionsF2": "₹2 ಲಕ್ಷ — ₹10,000\/ತಿಂಗಳು"/, '"services.multipleOptionsF2": "₹2,00,000 — ₹10,000/ತಿಂಗಳು"');
txt = txt.replace(/"services\.multipleOptionsF3": "₹3 ಲಕ್ಷ — ₹15,000\/ತಿಂಗಳು"/, '"services.multipleOptionsF3": "₹3,00,000 — ₹15,000/ತಿಂಗಳು"');

fs.writeFileSync('src/contexts/LanguageContext.tsx', txt);
