const fs = require('fs');
let code = fs.readFileSync('/Users/alihamza/Downloads/Projects/hellotutor-web/components/how-it-works/InteractiveDashboard.tsx', 'utf8');

// 1. Remove isDarkMode state and toggle
code = code.replace(/const \[isDarkMode, setIsDarkMode\] = useState\(true\);/, '');
code = code.replace(/\{\/\* Dark Mode Toggle \*\/\}.*?<\/div>/s, '');
code = code.replace(/\$\{isDarkMode \? 'dark border-\[\#2A2D31\]' : 'border-slate-200'\}/g, 'border-[#2A2D31]');
code = code.replace(/\{isDarkMode && \(/g, '{true && (');

// 2. Hide sidebar on mobile
code = code.replace(/w-\[220px\] flex flex-col/, 'hidden md:flex w-[220px] flex-col');

// 3. Hide scrollbar
code = code.replace(/className="flex-1 p-8 overflow-y-auto"/, 'className="flex-1 p-4 md:p-8 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"');

// 4. Convert all dark: classes to base classes and remove the light mode equivalent
// Here we'll do a simple regex: find words ending with space and followed by dark:
// For example: "bg-white dark:bg-[#1C1C1D]" -> "bg-[#1C1C1D]"
// "text-slate-500 dark:text-[#97979A]" -> "text-[#97979A]"
// "hover:bg-slate-100 dark:hover:bg-[#252627]" -> "hover:bg-[#252627]"

const replacements = [
  ['bg-white dark:bg-[#1C1C1D]', 'bg-[#1C1C1D]'],
  ['bg-slate-50 dark:bg-[#0F0F11]', 'bg-[#0F0F11]'],
  ['text-slate-900 dark:text-white', 'text-white'],
  ['text-slate-600 dark:text-[#97979A]', 'text-[#97979A]'],
  ['bg-indigo-50 dark:bg-indigo-900/30', 'bg-indigo-900/30'],
  ['text-indigo-600 dark:text-indigo-400', 'text-indigo-400'],
  ['border-slate-200 dark:border-[#2A2D31]', 'border-[#2A2D31]'],
  ['bg-white dark:bg-[#090909]', 'bg-[#090909]'],
  ['text-slate-400 dark:text-[#5D6168]', 'text-[#5D6168]'],
  ['hover:bg-slate-100 dark:hover:bg-[#252627]', 'hover:bg-[#252627]'],
  ['bg-slate-100 dark:bg-[#1C1E21]', 'bg-[#1C1E21]'],
  ['bg-white/80 dark:bg-[#1C1C1D]/80', 'bg-[#1C1C1D]/80'],
  ['text-slate-500 dark:text-[#97979A]', 'text-[#97979A]'],
  ['border-slate-200 dark:border-[#1C1E21]', 'border-[#1C1E21]'],
  ['border-white dark:border-[#1C1E21]', 'border-[#1C1E21]'],
  ['text-slate-700 dark:text-[#E2E3E5]', 'text-[#E2E3E5]'],
  ['hover:bg-slate-50 dark:hover:bg-slate-800', 'hover:bg-slate-800'],
  ['bg-indigo-50 dark:bg-indigo-900/20', 'bg-indigo-900/20'],
  ['bg-slate-50 dark:bg-[#252627]', 'bg-[#252627]'],
  ['border-slate-100 dark:border-[#1C1E21]', 'border-[#1C1E21]'],
  ['bg-white dark:bg-[#1C1C1D]', 'bg-[#1C1C1D]'],
  ['border-slate-100 dark:border-[#2A2D31]', 'border-[#2A2D31]'],
  ['hover:border-orange-200 dark:hover:border-orange-900/50', 'hover:border-orange-900/50'],
  ['bg-orange-100 dark:bg-orange-500/20', 'bg-orange-500/20'],
  ['text-orange-600 dark:text-orange-400', 'text-orange-400'],
  ['hover:bg-indigo-50 dark:hover:bg-indigo-900/30', 'hover:bg-indigo-900/30'],
  ['hover:border-blue-200 dark:hover:border-blue-900/50', 'hover:border-blue-900/50'],
  ['bg-blue-100 dark:bg-blue-500/20', 'bg-blue-500/20'],
  ['text-blue-600 dark:text-blue-400', 'text-blue-400'],
  ['text-indigo-600 dark:text-indigo-400', 'text-indigo-400'],
  ['hover:border-purple-200 dark:hover:border-purple-900/50', 'hover:border-purple-900/50'],
  ['bg-purple-100 dark:bg-purple-500/20', 'bg-purple-500/20'],
  ['text-purple-600 dark:text-purple-400', 'text-purple-400'],
  ['bg-slate-100 dark:bg-slate-800', 'bg-slate-800']
];

for (const [light, dark] of replacements) {
  code = code.split(light).join(dark);
}

// Any remaining dark: classes can just have the dark: removed
code = code.replace(/dark:/g, '');

fs.writeFileSync('/Users/alihamza/Downloads/Projects/hellotutor-web/components/how-it-works/InteractiveDashboard.tsx', code);
console.log("Dashboard updated successfully");
