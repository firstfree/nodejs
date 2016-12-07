var express = require('express');
var socketio = require('socket.io');

var app = express();
var io = socketio();
var server = require('http').createServer(app);

io.attach(server);

server.listen(3000);