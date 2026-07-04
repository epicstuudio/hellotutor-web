const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'components/pricing/Hero.tsx',
  'components/become-a-tutor/TutorHero.tsx',
  'components/layout/MobileMenu.tsx',
  'components/shared/CommitmentBanner.tsx',
  'components/shared/BaseHero.tsx',
  'components/shared/AboutHero.tsx',
  'components/shared/CTASection.tsx',
  'components/how-it-works/Hero.tsx',
  'components/ui/FloatingCTA.tsx',
  'components/contact/ContactHero.tsx',
  'components/home/Hero.tsx'
];

const basePath = '/Users/alihamza/Downloads/Projects/hellotutor-web';

filesToProcess.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Replace the hoverChildren string
  if (content.includes('hoverChildren="+971 585989768"')) {
    content = content.replace(/hoverChildren="\+971 585989768"/g, 'hoverChildren={siteConfig.whatsappFormatted}');
    hasChanges = true;
  } else if (content.includes('585989768')) {
      // Just in case it's in a different format
      content = content.replace(/585989768/g, '${siteConfig.whatsappFormatted}');
      hasChanges = true;
  }
  
  if (hasChanges) {
    // Add import if not exists
    if (!content.includes("import { siteConfig }")) {
      const importStatement = "import { siteConfig } from '@/config/site';\n";
      // Find the last import statement or 'use client';
      const lines = content.split('\n');
      let insertIndex = 0;
      for (let i = lines.length - 1; i >= 0; i--) {
          if (lines[i].startsWith('import ') || lines[i].includes('use client')) {
              insertIndex = i + 1;
              break;
          }
      }
      lines.splice(insertIndex, 0, importStatement);
      content = lines.join('\n');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${file}`);
  }
});
