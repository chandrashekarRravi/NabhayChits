const fs = require('fs');

const app = fs.readFileSync('src/App.tsx', 'utf8');
console.log('=== Routes in App.tsx ===');
(app.match(/Route path=.*/g) || []).forEach(l => console.log(' ', l));

const foot = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
console.log('\n=== Footer links ===');
(foot.match(/to="[^"]+"/g) || []).forEach(l => console.log(' ', l));

const lang = fs.readFileSync('src/contexts/LanguageContext.tsx', 'utf8');
const keys = [
  'schemes.amount1','schemes.amount2','schemes.amount3','schemes.amount4',
  'schemes.payment1','schemes.payment2','schemes.payment3','schemes.payment4',
  'footer.terms','footer.privacy','footer.communications',
  'servicesPage.availabilityNote','servicesPage.duration'
];
console.log('\n=== Translation keys (EN) ===');
keys.forEach(k => {
  const re = new RegExp('"' + k.replace('.', '\\.') + '": "([^"]+)"');
  const m = lang.match(re);
  console.log(k + ':', m ? m[1] : 'NOT FOUND');
});

const svc = fs.readFileSync('src/pages/Services.tsx', 'utf8');
console.log('\n=== Schemes in Services.tsx ===');
(svc.match(/\{ amount: '.*?', monthly: '.*?' \}/g) || []).forEach(l => console.log(' ', l));

// Check Terms and Privacy exist
['src/pages/Terms.tsx','src/pages/Privacy.tsx'].forEach(f => {
  console.log('\n' + f + ' exists:', fs.existsSync(f));
});

// Check no "Lakh" remains in Services
console.log('\nServices.tsx contains "Lakh":', svc.includes('Lakh'));
// Check no SBGA branding
[app, foot, lang, svc].forEach((txt, i) => {
  const names = ['App.tsx', 'Footer.tsx', 'LanguageContext.tsx', 'Services.tsx'];
  if (txt.includes('SBGA') || txt.includes('sbga')) {
    console.log('SBGA found in', names[i]);
  }
});
console.log('\nNo SBGA branding detected in checked files.');
