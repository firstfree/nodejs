var async = require('async');

async.series({
    first: function(callback) {
        console.log('First Function');
        callback(null, 1);
    },
    second: function(callback) {
        console.log('Second Function');
        callback(null, 2);
    },
    third: function(callback) {
        console.log('Third Function');
        callback(null, 3);
    }
}, function(err, result) {
    console.log(result);
});