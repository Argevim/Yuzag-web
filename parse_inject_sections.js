const fs = require('fs');
const line = fs.readFileSync('inject_sections_found.txt', 'utf8').trim();
if (line) {
    const parsed = JSON.parse(line);
    let content = "";
    if (parsed.content) content = parsed.content;
    else if (parsed.tool_calls) {
        content = JSON.stringify(parsed.tool_calls);
    }
    
    // We want to extract just the function injectSections() { ... }
    const startIndex = content.indexOf('function injectSections() {');
    if (startIndex !== -1) {
        // Find where it ends
        // It ends before `function injectCustomFooter()` or `function fetchDatabaseData()`
        let endIndex = content.indexOf('function fetchDatabaseData()', startIndex);
        if (endIndex === -1) endIndex = content.indexOf('function injectCustomFooter()', startIndex);
        
        let funcCode = content.substring(startIndex, endIndex !== -1 ? endIndex : content.length);
        
        // Remove extra escaping if it's inside JSON string
        funcCode = funcCode.replace(/\\n/g, '\n').replace(/\\"/g, '"');
        fs.writeFileSync('injectSections.js', funcCode);
        console.log('Successfully saved to injectSections.js!');
    }
}
