var net = require('net');

net.createServer(function(socket) {
    socket.on('data', function(data) {
        console.log(data.toString('utf8'));

        socket.write(data);
    });
}).listen(3000, function() {
    console.log('Server running at 127.0.0.1:3000');
});