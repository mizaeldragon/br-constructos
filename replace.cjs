const fs = require('fs');

const files = [
  'src/components/Contact.jsx',
  'src/components/Footer.jsx',
  'src/components/Testimonials.jsx',
  'src/components/Gallery.jsx',
  'src/components/About.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  
  // Brand
  text = text.replace(/Barreto´s Cleaning Solutions/g, "Barreto's Construction");
  text = text.replace(/barretoscleaningsolutions@gmail\.com/g, "barretosconstruction@gmail.com");
  text = text.replace(/barre_toscleaningservices\/\?utm_source=ig_web_button_share_sheet/g, "barretosconstruction/");
  
  // Generic keywords
  text = text.replace(/professional cleaning services/g, "professional construction services");
  text = text.replace(/cleaning company/g, "construction company");
  text = text.replace(/cleaning team/g, "construction team");
  text = text.replace(/cleaning techniques/g, "construction techniques");
  text = text.replace(/quality cleaning/g, "quality construction");

  // Gallery
  text = text.replace(/'Post-Construction'/g, "'Remodeling'");
  
  // Contacts services
  text = text.replace(/value="residential">Residential Cleaning/g, 'value="residential">New Home Construction');
  text = text.replace(/value="commercial">Commercial Cleaning/g, 'value="commercial">Commercial Construction');
  text = text.replace(/value="post-construction">Post-Construction/g, 'value="post-construction">Home Remodeling');
  text = text.replace(/residential: 'Residential Cleaning'/g, "residential: 'New Home Construction'");
  text = text.replace(/commercial: 'Commercial Cleaning'/g, "commercial: 'Commercial Construction'");
  text = text.replace(/'post-construction': 'Post-Construction'/g, "'post-construction': 'Home Remodeling'");

  // Footer text
  text = text.replace(/handle the dirt while you enjoy a pristine environment/g, "handle the heavy lifting while you enjoy a pristine result");
  text = text.replace(/residential and commercial cleaning services/g, "residential and commercial construction services");
  text = text.replace(/Standard Cleaning/g, "General Contracting");
  text = text.replace(/Deep Cleaning/g, "Home Remodeling");
  text = text.replace(/Move In\/Out/g, "Commercial Builds");
  text = text.replace(/Office Cleaning/g, "Project Management");
  text = text.replace(/Custom Plans/g, "Site Assessments");

  // About text
  text = text.replace(/transforming spaces and earning/g, "building dreams and earning");
  text = text.replace(/over 2 years/g, "over 15 years");
  text = text.replace(/clean, healthy, and safe environments/g, "durable, high-quality, and safe environments");
  text = text.replace(/biodegradable and high efficiency products/g, "premium, durable, and sustainable materials");
  text = text.replace(/Quality Products/g, "Quality Materials");
  text = text.replace(/It was founded on December 8, 2023, <strong className="text-brand-darkTeal font-bold">Barreto's Construction<\/strong> was born/g, `Founded in 2009, <strong className="text-brand-darkTeal font-bold">Barreto's Construction</strong> was born`);
  text = text.replace(/a team of 1 now has over 4 dedicated professionals/g, "a small team now has over 40 dedicated professionals");
  text = text.replace(/homes, offices, condominiums, and large construction sites/g, "residential, commercial, and industrial construction projects");
  text = text.replace(/clean our office weekly/g, "renovate our office");
  text = text.replace(/always a clean environment/g, "high-quality finishes");
  text = text.replace(/after construction\. Their post-construction cleaning is exceptional — they remove everything, even the fine dust that seems impossible/g, "for new home builds. Their attention to structural integrity and architectural details is exceptional");
  text = text.replace(/all common areas/g, "all our structural maintenance");
  text = text.replace(/coming home to a perfectly clean house after a long day is priceless/g, "their craftsmanship and sturdy builds are unmatched");
  text = text.replace(/clean our spaces look/g, "structurally sound our spaces look");
  text = text.replace(/products that are safe for my pets\. The house always smells amazing after they leave/g, "sustainable building materials. The house looks amazing and structurally sound");

  fs.writeFileSync(file, text);
});
console.log('Replacements completed.');
