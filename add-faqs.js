/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'messages', 'en.json');
const arPath = path.join(__dirname, 'messages', 'ar.json');

const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arContent = JSON.parse(fs.readFileSync(arPath, 'utf8'));

const enFaqs = {
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know before getting started.',
  cta: 'See all FAQs',
  items: {
    1: {
      q: 'What if my child has never done online tutoring before?',
      a: 'Most students get comfortable within a lesson or two. Our tutors know how to make online sessions interactive and keep things moving. It quickly starts to feel completely normal.',
    },
    2: {
      q: 'How do I know if the tutor you match is right?',
      a: "We match based on things that genuinely lead to results: subject knowledge, teaching style, curriculum experience, and your child's specific needs. That said, if it's not clicking, we'll assign someone new.",
    },
    3: {
      q: 'Can I sit in on lessons?',
      a: 'Absolutely. Parents are welcome to observe any lesson. Just let us know in advance so the tutor can plan accordingly.',
    },
    4: {
      q: 'What happens if we need to change lesson times?',
      a: "Just get in touch and we'll sort it out with the tutor. All scheduling goes through us, so you don't need to contact your tutor directly.",
    },
    5: {
      q: 'Do you match based on curriculum?',
      a: "Yes. We make sure your child's tutor knows their exact curriculum, whether that's British, IB, American, or something else.",
    },
    6: {
      q: "How do I know what's happening in my child's lessons?",
      a: "You'll receive a written summary after every lesson covering what was covered, how your child got on, and what the tutor plans to focus on next. We also do monthly progress reviews so you always have a clear picture of how things are going.",
    },
  },
};

const arFaqs = {
  title: 'الأسئلة الشائعة',
  subtitle: 'كل ما تحتاج إلى معرفته قبل البدء.',
  cta: 'رؤية جميع الأسئلة الشائعة',
  items: {
    1: {
      q: 'ماذا لو لم يسبق لطفلي تجربة التدريس عبر الإنترنت؟',
      a: 'يعتاد معظم الطلاب خلال درس أو درسين. مدرسونا يعرفون كيف يجعلون الجلسات عبر الإنترنت تفاعلية وحيوية. وسرعان ما يبدو الأمر طبيعياً تماماً.',
    },
    2: {
      q: 'كيف أعرف أن المدرس الذي تم اختياره مناسب؟',
      a: 'نحن نختار بناءً على الأمور التي تؤدي حقاً إلى نتائج: المعرفة بالمادة، أسلوب التدريس، الخبرة في المنهج، واحتياجات طفلك الخاصة. ومع ذلك، إذا لم يكن هناك توافق، فسنقوم بتعيين شخص جديد.',
    },
    3: {
      q: 'هل يمكنني حضور الدروس؟',
      a: 'بالتأكيد. يُرحب بالآباء لمراقبة أي درس. فقط أخبرنا مسبقاً حتى يتمكن المدرس من التخطيط وفقاً لذلك.',
    },
    4: {
      q: 'ماذا يحدث إذا احتجنا إلى تغيير أوقات الدروس؟',
      a: 'فقط تواصل معنا وسنقوم بترتيب ذلك مع المدرس. جميع الجدولة تتم من خلالنا، لذلك لا تحتاج إلى الاتصال بمدرسك مباشرة.',
    },
    5: {
      q: 'هل يتم اختيار المدرسين بناءً على المنهج الدراسي؟',
      a: 'نعم. نتأكد من أن مدرس طفلك يعرف منهجه الدراسي بالضبط، سواء كان بريطانيًا أو بكالوريا دولية (IB) أو أمريكيًا أو أي منهج آخر.',
    },
    6: {
      q: 'كيف أعرف ما يحدث في دروس طفلي؟',
      a: 'ستتلقى ملخصًا مكتوبًا بعد كل درس يغطي ما تم تدريسه، وكيف كان أداء طفلك، وما يخطط المدرس للتركيز عليه في المرة القادمة. نقوم أيضاً بإجراء مراجعات شهرية للتقدم حتى يكون لديك دائماً صورة واضحة عن سير الأمور.',
    },
  },
};

enContent.howItWorksFaqs = enFaqs;
arContent.howItWorksFaqs = arFaqs;

fs.writeFileSync(enPath, JSON.stringify(enContent, null, 2), 'utf8');
fs.writeFileSync(arPath, JSON.stringify(arContent, null, 2), 'utf8');

console.log('Done adding FAQs translations');
