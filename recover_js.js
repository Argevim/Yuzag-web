const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('/Users/sercankostence/.gemini/antigravity-ide/brain/6f6feeeb-8180-48e9-9cfa-be21346cc2fd/.system_generated/logs/transcript_full.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let latestContent = null;
  for await (const line of rl) {
    try {
      const parsed = JSON.parse(line);
      // Check if it's a RUN_COMMAND response that might contain the file, or a view_file response
      if (parsed.type === 'RUN_COMMAND' && parsed.content && parsed.content.includes('function initProjectsPlugin() {') && parsed.content.includes('function injectCustomFooter() {')) {
          // It might be a grep output or cat output
      }
      // Check if user input contains the file contents in a diff block
      if (parsed.type === 'USER_INPUT' && parsed.content && parsed.content.includes('The following changes were made by the USER to: /Users/sercankostence/Desktop/build/assets/js/custom-projects.js')) {
          // This has diff blocks, not full file.
      }
      
      // Let's just find any large content containing "const teamData" and "function initProjectsPlugin()"
      if (parsed.content && parsed.content.includes('const teamData =') && parsed.content.includes('function injectCustomViews() {')) {
          latestContent = parsed.content;
      }
    } catch (e) {}
  }
  
  if (latestContent) {
      fs.writeFileSync('recovered_content.txt', latestContent);
      console.log('Found a potential match!');
  } else {
      console.log('No match found.');
  }
}

processLineByLine();
