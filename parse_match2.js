const fs = require('fs');
const line = fs.readFileSync('transcript_matches.txt', 'utf8').trim();
if (line) {
    const parsed = JSON.parse(line);
    console.log(Object.keys(parsed));
    if (parsed.tool_calls) {
        console.log(JSON.stringify(parsed.tool_calls).substring(0, 500));
    }
}
