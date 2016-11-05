var fs = require('fs');

try {
    var data = fs.readFileSync('./chapter4/textfile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

try {
    fs.writeFileSync('./chapter4/textfile.txt', 'Hello World .. !', 'utf8');
    console.log('FILE WRITE COMPLETE');
} catch (e) {
    console.log(e);
}