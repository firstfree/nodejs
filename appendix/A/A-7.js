var net = require('net');

net.createServer(function(socket) {
    socket.write('HTTP/1.1 200 OK\n');
    socket.write('Server: RintIanTta Node.js Custom Server\n');
    socket.write('Content-Type: text/html\n');
    socket.write('Content-Length: 21\n');
    socket.write('\n');
    socket.write('<h1>Hello World!</h1>');

    socket.end();
}).listen(3000, function() {
    console.log('Server running at 127.0.0.1:3000');
});