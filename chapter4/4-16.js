var fs = require('fs');

var data = 'Hello World .. !';

fs.writeFile('./chapter4/TextFileOtherWrite.txt', data, 'utf8', function (error) {
    console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('./chapter4/TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');