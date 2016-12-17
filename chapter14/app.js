var express = require('express');
var http = require('http');
var fs = require('fs');

var client = require('mysql').createConnection({
    host: '10.211.55.4',
    user: 'nodejs',
    password: 'qwer!1234',
    database: 'location'
});

var app = express();
var server = http.createServer(app);

app.get('/tracker', function(req, res) {
    fs.readFile('Tracker.html', 'utf8', function(err, data) {
        res.send(data);
    });
});

app.get('/observer', function(req, res) {
    fs.readFile('Observer.html', 'utf8', function(err, data) {
        res.send(data);
    });
});

app.get('/showdata', function(req, res) {
    client.query('SELECT * FROM locations WHERE name=?', [
        req.query.name
    ], function(err, data) {
        res.send(data);
    });
});

server.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    socket.on('join', function(data) {
        socket.join(data);
    });

    socket.on('location', function(data) {
        client.query('INSERT INTO locations (name, latitude, longitude, date) VALUES (?, ?, ?, NOW())', [
            data.name, data.latitude, data.longitude
        ]);

        io.sockets.in(data.name).emit('receive', {
            latitude: data.latitude,
            longitude: data.longitude,
            date: Date.now()
        });
    });
});