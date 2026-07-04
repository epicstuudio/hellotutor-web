const fs = require('fs');

const updateFile = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/Dubai/g, 'AbuDhabi');
  content = content.replace(/dubai/g, 'abuDhabi'); // for variable cases if any, wait, it's tutorsInDubai
  content = content.replace(/tutorsInDubai/g, 'tutorsInAbuDhabi');
  content = content.replace(/tutors-in-dubai/g, 'tutors-in-abu-dhabi');
  fs.writeFileSync(path, content);
  console.log('Updated', path);
};

updateFile('app/[locale]/tutors-in-abu-dhabi/TutorsInAbuDhabiContent.tsx');
updateFile('app/[locale]/tutors-in-abu-dhabi/page.tsx');
