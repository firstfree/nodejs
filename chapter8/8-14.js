var express = require('express');
var app = express();

app.get('/index', function(request, response) {
    response.send('<h1>Index Page</h1>');
});

app.get('*', function(request, response) {
    response.status(404).send('<h1>Error - Page Not Found</h1>');
});

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});