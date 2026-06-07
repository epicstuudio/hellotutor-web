/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const files = [
  'components/home/Subjects.tsx',
  'components/home/WhyChooseUs.tsx',
  'components/home/FAQs.tsx',
  'components/home/HowItWorks.tsx',
  'components/home/Testimonials.tsx',
  'components/shared/CTASection.tsx',
  'components/home/Trust.tsx',
];

files.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/text-4xl md:text-5xl font-semibold/g, 'text-display-lg');
    content = content.replace(/text-3xl lg:text-4xl font-semibold/g, 'text-display-lg');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
