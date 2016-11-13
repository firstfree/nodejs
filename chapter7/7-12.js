var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(request, response) {
    fs.readFile('7-18.jade', 'utf8', function(err, data) {
        var fn = jade.compile(data);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(fn())
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});