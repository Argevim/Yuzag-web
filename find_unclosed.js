const fs = require('fs');
const code = fs.readFileSync('/Users/sercankostence/Desktop/build/assets/js/custom-projects-new.js', 'utf8');

// Let's check balance of braces, brackets, parentheses, and backticks
let stack = [];
let lines = code.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // Simple scanner
    for (let j = 0; j < line.length; j++) {
        let char = line[j];
        if (char === '{') stack.push({ char: '{', line: i + 1 });
        else if (char === '}') {
            if (stack.length > 0 && stack[stack.length - 1].char === '{') {
                stack.pop();
            } else {
                console.log(`Unmatched '}' at line ${i + 1}`);
            }
        }
    }
}

console.log(`Remaining unclosed '{' count: ${stack.length}`);
if (stack.length > 0) {
    console.log('Unclosed braces at lines:', stack.map(s => s.line).slice(-10));
}
