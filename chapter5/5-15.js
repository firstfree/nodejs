var events = require('events');

exports.timer = new events.EventEmitter();

setInterval(function() {
    exports.timer.emit('tick');
}, 1000);