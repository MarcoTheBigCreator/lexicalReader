import fs from 'fs';

function getStringsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const charList = Array.from(content);
  return charList;
}

// Example usage
const filePath = 'words.txt';
const result = getStringsFromFile(filePath);
console.log(result);