var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname == '/') {

    } else if (pathname == '/OtherPage') {

    }
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});