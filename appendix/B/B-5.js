var fs = require('fs');

fs.readFile('TextFile1.txt', 'utf8', function(err, data1) {
    fs.readFile('TextFile2.txt', 'utf8', function(err, data2) {
        fs.readFile('TextFile3.txt', 'utf8', function(err, data3) {
            console.log(data1);
            console.log(data2);
            console.log(data3);
        });
    });
});