var fs = require('fs');
var async = require('async');

var files = ['TextFile1.txt', 'TextFile2.txt', 'TextFile3.txt'];

async.map(files, fs.readFile, function(err, results) {
    console.log(results);
});