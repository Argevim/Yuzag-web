const fs = require('fs');
const readline = require('readline');

async function extract() {
  const fileStream = fs.createReadStream('/Users/sercankostence/.gemini/antigravity-ide/brain/6f6feeeb-8180-48e9-9cfa-be21346cc2fd/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let found = null;
  for await (const line of rl) {
    if (line.includes('function injectSections() {') && line.includes('custom-projects-section')) {
       found = line;
    }
  }
  
  if (found) {
      fs.writeFileSync('inject_sections_found.txt', found);
      console.log('Found injectSections!');
  } else {
      console.log('Not found.');
  }
}
extract();
