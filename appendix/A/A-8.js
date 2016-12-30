var net = require('net');
var crypto = require('crypto');

var guid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

net.createServer(function(socket) {
    socket.on('data', function(data) {

    });
}).listen(3000, function() {
    console.log('Server running 127.0.0.1:3000');
});