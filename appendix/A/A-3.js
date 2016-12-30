var net = require('net');

var socket = net.connect(3000, '127.0.0.1', function(socket) {
    console.log('Client Start');
});

socket.on('data', function(data) {
    console.log(data.toString());
});