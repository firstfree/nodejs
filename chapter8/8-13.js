var express = require('express');
var app = express();

app.get('/page/:id', function(request, response) {
    var name = request.params.id;
    response.send('<h1>' + name + ' Page</h1>')
});

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});