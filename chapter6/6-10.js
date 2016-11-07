var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
    fs.readFile('Chrysanthemum.png', function(err, data) {
        response.writeHead(200, { 'Content-Type': 'image/png'});
        response.end(data);
    });
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});

http.createServer(function(request, response) {

}).listen(52274, function() {

});