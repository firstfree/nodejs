var http = require('http');

http.createServer(function(request, response) {
    var cookie = request.headers.cookie;

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['name = RintIanTta', 'region = Seoul']
    });

    response.end('<h1>' + JSON.stringify(cookie) + '</h1>')
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});