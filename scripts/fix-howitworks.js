const fs = require('fs');

const fixHowItWorks = (filePath, isArabic) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.tutorsInDubai && data.tutorsInDubai.howItWorks) {
    const howItWorks = data.tutorsInDubai.howItWorks;
    
    // Add stepLabel
    howItWorks.stepLabel = isArabic ? 'الخطوة' : 'Step';

    // Rename steps to items and description to desc
    if (howItWorks.steps) {
      howItWorks.items = howItWorks.steps.map(step => ({
        title: step.title,
        desc: step.description || step.desc
      }));
      delete howItWorks.steps;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log('Fixed howItWorks in', filePath);
};

fixHowItWorks('messages/ae-en.json', false);
fixHowItWorks('messages/ae-ar.json', true);
