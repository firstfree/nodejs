var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
    fs.readFile('Chrysanthemum.png', function(err, data) {
        response.writeHead(200, { 'Content-Type': 'image/png' });
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

http.createServer(function(request, response) {
    fs.readFile('Kalimba.mp3', function(err, data) {
        response.writeHead(200, { 'Content-Type': 'audio/mp3' });
        response.end(data);
    });
}).listen(52274, function() {
    console.log('Server Running at http://127.0.0.1:52274');
});

http.createServer(function(request, response) {
    fs.readFile('aaa.pdf', function(err, data) {
        response.writeHead(200, { 'Content-Type': 'application/pdf' });
        response.end(data);
    });
}).listen(52275, function() {
    console.log('Server Running at http://127.0.0.1:52275');
});