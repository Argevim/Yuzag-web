const fs = require('fs');
const line = fs.readFileSync('transcript_matches.txt', 'utf8').trim();
if (line) {
    const parsed = JSON.parse(line);
    let code = parsed.content;
    
    // Sometimes content has "The following changes were made..." or other text.
    // We just want to find where `let projectsData = [` starts and `});` ends.
    // Or we can just save the whole content to see it.
    fs.writeFileSync('restored_custom_projects.js', code);
    console.log('Saved to restored_custom_projects.js. Length:', code.length);
}
