var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function(req, res) {
    fs.readFile('11-6.html', 'utf8', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}).listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {

});