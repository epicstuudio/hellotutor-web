const fs = require('fs');

const fixAbuDhabiTranslations = (filePath, isArabic) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.tutorsInAbuDhabi) {
    // Fix schools.footer
    if (data.tutorsInAbuDhabi.schools && data.tutorsInAbuDhabi.schools.disclaimer) {
      data.tutorsInAbuDhabi.schools.footer = data.tutorsInAbuDhabi.schools.disclaimer;
      delete data.tutorsInAbuDhabi.schools.disclaimer;
    }

    // Fix whatWeCover
    if (data.tutorsInAbuDhabi.whatWeCover && !data.tutorsInAbuDhabi.whatWeCover.blocks) {
      const w = data.tutorsInAbuDhabi.whatWeCover;
      const formatBlock = (blockObj, label) => {
        if (!blockObj) return null;
        return {
          title: blockObj.title,
          itemsLabel: label,
          items: blockObj.items.map(i => ({ title: i, desc: "" }))
        };
      };

      const blocks = [];
      if (w.levels) blocks.push(formatBlock(w.levels, isArabic ? "المستويات" : "Levels"));
      if (w.subjects) blocks.push(formatBlock(w.subjects, isArabic ? "المواد" : "Subjects"));
      if (w.curriculums) blocks.push(formatBlock(w.curriculums, isArabic ? "المناهج" : "Curriculums"));

      data.tutorsInAbuDhabi.whatWeCover = {
        title: w.title,
        subtitle: w.subtitle,
        blocks: blocks
      };
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log('Fixed Abu Dhabi in', filePath);
};

fixAbuDhabiTranslations('messages/ae-en.json', false);
fixAbuDhabiTranslations('messages/ae-ar.json', true);
