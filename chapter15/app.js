var socketio = require('socket.io');
var express = require('express');
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var app = express();
app.use(express.static('public'));

var server = http.createServer(app);
server.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

app.get('/', function(req, res) {
    fs.readFile('lobby.html', 'utf8', function(err, data) {
        res.send(data);
    });
});

app.get('/canvas/:room', function(req, res) {
    fs.readFile('canvas.html', 'utf8', function(err, data) {
        res.send(ejs.render(data, {
            room: req.params.room
        }));
    });
});

app.get('/room', function(req, res) {
    var rooms = Object.keys(io.sockets.adapter.rooms).filter(function(item) {
        return item.indexOf('/') < 0;
    });
    res.send(rooms);
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket) {
    var roomId = '';

    socket.on('join', function(data) {
        socket.join(data);
        roomId = data;
    });

    socket.on('draw', function(data) {
        io.sockets.in(roomId).emit('line', data);
    });

    socket.on('create_room', function(data) {
        io.sockets.emit('create_room', data.toString());
    });
});