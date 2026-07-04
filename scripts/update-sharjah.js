const fs = require('fs');

const updateFile = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/AbuDhabi/g, 'Sharjah');
  content = content.replace(/abuDhabi/g, 'sharjah');
  content = content.replace(/tutors-in-abu-dhabi/g, 'tutors-in-sharjah');
  fs.writeFileSync(path, content);
  console.log('Updated', path);
};

updateFile('app/[locale]/tutors-in-sharjah/TutorsInSharjahContent.tsx');
updateFile('app/[locale]/tutors-in-sharjah/page.tsx');
