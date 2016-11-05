var fs = require('fs');

fs.readFile('./chapter4/textfile.txt', 'utf8', function (error, data) {
    console.log(data);
});