var express = require('express');
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var seats = [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

var app = express();
var server = http.createServer(app);

app.get('/', function(req, res, next) {
    fs.readFile('HTMLPage.html', function(err, data) {
        res.send(data.toString());
    });
});

app.get('/seats', function(req, res, next) {
    res.send(seats);
});

server.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    socket.on('reserve', function(data) {
        seats[data.y][data.x] = 2;
        io.sockets.emit('reserve', data);
    });
});