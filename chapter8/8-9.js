var express = require('express');
var app = express();

app.use(function(request, response) {
    var name = request.query.name;
    var region = request.query.region;
    response.send('<h1>' + name + '-' + region + '</h1>');
});

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});