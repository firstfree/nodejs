var fs = require('fs');

fs.readFile('TextFile1.txt', function(err, data1) {
    fs.readFile('TextFile2.txt', function(err, data2) {
        fs.readFile('TextFile3.txt', function(err, data3) {
            console.log(data1);
            console.log(data2);
            console.log(data3);
        });
    });
});