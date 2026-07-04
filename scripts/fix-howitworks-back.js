const fs = require('fs');

const fixHowItWorksBack = (filePath) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.tutorsInDubai && data.tutorsInDubai.howItWorks) {
    const howItWorks = data.tutorsInDubai.howItWorks;
    
    if (howItWorks.items) {
      howItWorks.steps = howItWorks.items;
      delete howItWorks.items;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log('Fixed howItWorks back to steps in', filePath);
};

fixHowItWorksBack('messages/ae-en.json');
fixHowItWorksBack('messages/ae-ar.json');
