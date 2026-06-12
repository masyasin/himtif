const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace pt-24 with pt-40 to give proportional spacing below the fixed navbar
  content = content.replace(/pt-24/g, 'pt-40');
  
  fs.writeFileSync(filePath, content);
});

console.log("Spacing fixed.");
