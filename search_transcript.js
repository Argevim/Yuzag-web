const fs = require('fs');
const readline = require('readline');

async function search() {
  const fileStream = fs.createReadStream('/Users/sercankostence/.gemini/antigravity-ide/brain/6f6feeeb-8180-48e9-9cfa-be21346cc2fd/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let chunks = [];
  for await (const line of rl) {
    if (line.includes('function injectCustomFooter() {') && line.includes('function handleRouting() {')) {
       chunks.push(line);
    }
  }
  
  fs.writeFileSync('transcript_matches.txt', chunks.join('\n'));
  console.log('Done searching transcript! Matches:', chunks.length);
}
search();
