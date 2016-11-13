var http = require('http');
var express = require('express');

var app = express();

http.createServer(app).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
