var async = require('async');

async.parallel([
    function(callback) {
        console.log('First Function Start');

        setTimeout(function() {
            console.log('First Function End');
            callback(null, 1);
        }, 2000);
    },
    function(callback) {
        console.log('Second Function Start');

        setTimeout(function() {
            console.log('Second Function End');
            callback(null, 2);
        }, 1000);
    }
], function(err, result) {
    console.log(result);
});