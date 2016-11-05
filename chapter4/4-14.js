var fs = require('fs');

var text = fs.readFileSync('./chapter4/textfile.txt', 'utf8');
console.log(text);