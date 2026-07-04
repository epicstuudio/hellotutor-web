const fs = require('fs');

const fixTranslations = (filePath, isArabic) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.tutorsInDubai) {
    // 1. Fix stats
    if (data.tutorsInDubai.stats && data.tutorsInDubai.stats.stat1) {
      data.tutorsInDubai.stats = {
        title: '',
        subtitle: '',
        items: [
          {
            value: "500",
            suffix: "+",
            label: isArabic ? "معلم" : "Tutors"
          },
          {
            value: "10000",
            suffix: "+",
            label: isArabic ? "حصة تم تقديمها" : "lessons delivered"
          },
          {
            value: "95",
            suffix: "%",
            label: isArabic ? "شهدوا تحسناً في درجاتهم" : "See Grade Improvement"
          }
        ]
      };
    }

    // 2. Fix testimonials
    if (data.tutorsInDubai.testimonials && data.tutorsInDubai.testimonials.items) {
      const oldItems = data.tutorsInDubai.testimonials.items;
      
      data.tutorsInDubai.testimonials = {
        title: data.tutorsInDubai.testimonials.title,
        stats: isArabic ? [
          "95% من أولياء الأمور يلاحظون تحسناً في درجات أبنائهم خلال 3 أشهر",
          "4.9/5 متوسط تقييم أولياء الأمور",
          "تم تقديم أكثر من 10,000 حصة"
        ] : [
          "95% of parents see grade improvement within 3 months",
          "4.9/5 average parent rating",
          "10,000+ lessons delivered"
        ],
        reviews: {
          "1": {
            text: `“${oldItems[0].quote}”`,
            author: `— ${oldItems[0].author}, ${oldItems[0].role}`
          },
          "2": {
            text: `“${oldItems[1].quote}”`,
            author: `— ${oldItems[1].author}, ${oldItems[1].role}`
          },
          "3": {
            text: `“${oldItems[2].quote}”`,
            author: `— ${oldItems[2].author}, ${oldItems[2].role}`
          }
        }
      };
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log('Fixed', filePath);
};

fixTranslations('messages/ae-en.json', false);
fixTranslations('messages/ae-ar.json', true);
