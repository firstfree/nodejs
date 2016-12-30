var net = require('net');

var socket = net.connect(3000, '127.0.0.1', function() {
    console.log('Client Start');
});

socket.on('data', function(data) {
    console.log(data.toString('utf8'));
});

process.stdin.resume();
process.stdin.on('data', function(chunk) {
    socket.write('ECHO: ' + chunk);
});