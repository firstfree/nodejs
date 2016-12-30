var async = require('async');

var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

async.forEach(files, function(item, index) {
    console.log(item);
});