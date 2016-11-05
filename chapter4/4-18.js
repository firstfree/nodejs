var fs = require('fs');

fs.readFile('./chapter4/textfile.txt', 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

fs.writeFile('./chapter4/textfile.txt', 'Hello World .. !', 'utf8', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('FILE WRITE COMPLETE');
    }
});