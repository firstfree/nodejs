var fs = require('fs');

fs.readFile('./chapter4/textfile.txt', 'utf8', function (error, data) {
    if (error) { 
        return console.log(error);
    }

    console.log(data);
});

fs.writeFile('./chapter4/textfile.txt', 'Hello World .. !', 'utf8', function (error) {
    if (error) {
        return console.log(error);
    }

    console.log('FILE WRITE COMPLETE');
});