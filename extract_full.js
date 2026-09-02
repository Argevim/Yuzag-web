const fs = require('fs');
const readline = require('readline');

async function extract() {
  const fileStream = fs.createReadStream('/Users/sercankostence/.gemini/antigravity-ide/brain/6f6feeeb-8180-48e9-9cfa-be21346cc2fd/.system_generated/logs/transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let foundContent = null;
  for await (const line of rl) {
    try {
      const parsed = JSON.parse(line);
      if (parsed.content && parsed.content.includes('function injectCustomViews() {') && parsed.content.includes('function handleRouting() {') && parsed.content.includes('function injectCustomFooter() {')) {
         // Could be the full file from a command output!
         foundContent = parsed.content;
      }
    } catch (e) {}
  }
  
  if (foundContent) {
      fs.writeFileSync('full_backup.txt', foundContent);
      console.log('Saved to full_backup.txt!');
  } else {
      console.log('Not found.');
  }
}
extract();
