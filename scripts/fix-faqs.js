const fs = require('fs');

const fixFaqs = (filePath, isArabic) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.tutorsInDubai && data.tutorsInDubai.faqs) {
    const faqs = data.tutorsInDubai.faqs;
    
    // Add subtitle and cta if they don't exist
    if (!faqs.subtitle) {
      faqs.subtitle = isArabic 
        ? 'كل ما تحتاج لمعرفته حول التدريس في دبي'
        : 'Everything you need to know about tutoring in Dubai';
    }
    
    if (!faqs.cta) {
      faqs.cta = isArabic ? 'عرض جميع الأسئلة الشائعة' : 'View all FAQs';
    }
    
    // Also check if we need to rename any keys for the items.
    // The SubjectFAQs usually expects 'items' array with 'question' and 'answer'
    if (faqs.items) {
      faqs.items = faqs.items.map(item => ({
        question: item.question || item.q,
        answer: item.answer || item.a
      }));
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log('Fixed faqs in', filePath);
};

fixFaqs('messages/ae-en.json', false);
fixFaqs('messages/ae-ar.json', true);
