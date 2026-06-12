const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /bg-slate-50/g, to: 'bg-slate-950' },
  { from: /bg-white/g, to: 'bg-slate-900' },
  { from: /text-slate-900/g, to: 'text-white' },
  { from: /text-slate-800/g, to: 'text-slate-100' },
  { from: /text-slate-700/g, to: 'text-slate-300' },
  { from: /text-slate-600/g, to: 'text-slate-400' },
  { from: /border-slate-100/g, to: 'border-slate-800' },
  { from: /border-slate-200/g, to: 'border-slate-700' },
  { from: /border-slate-300/g, to: 'border-slate-600' },
  { from: /bg-green-50/g, to: 'bg-green-900\/20' },
  { from: /border-green-200/g, to: 'border-green-800' },
  { from: /text-green-800/g, to: 'text-green-300' },
  { from: /text-green-700/g, to: 'text-green-400' },
  { from: /bg-green-100/g, to: 'bg-green-900\/50' },
  { from: /bg-red-50/g, to: 'bg-red-900\/20' },
  { from: /border-red-200/g, to: 'border-red-800' },
  { from: /text-red-800/g, to: 'text-red-300' },
  { from: /text-red-700/g, to: 'text-red-400' },
  { from: /bg-red-100/g, to: 'bg-red-900\/50' },
  { from: /bg-yellow-50/g, to: 'bg-yellow-900\/20' },
  { from: /text-yellow-800/g, to: 'text-yellow-300' },
];

files.forEach(file => {
  if (file === 'Home.tsx') return; // Skip Home since it's already properly styled
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  
  fs.writeFileSync(filePath, content);
});

// Also update App.tsx body background
const appPath = path.join(__dirname, 'src/App.tsx');
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(/bg-slate-50/g, 'bg-slate-950');
appContent = appContent.replace(/text-slate-900/g, 'text-white');
fs.writeFileSync(appPath, appContent);

console.log("Dark theme conversion complete.");
