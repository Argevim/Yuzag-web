const fs = require('fs');
const content = fs.readFileSync('/Users/sercankostence/Desktop/build/assets/js/custom-projects.js', 'utf8');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`, { runScripts: "dangerously" });
dom.window.eval(content);
console.log('Script executed without throwing errors.');
