var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');

var app = express();

app.use(multipart({ uploadDir: __dirname + '/multipart' }));

app.get('/', function(request, response) {
    fs.readFile('8-26.html', 'utf8', function(err, data) {
        response.send(data);
    });
});

app.post('/', function(request, response) {
    console.log(request.body);
    console.log(request.files);

    response.redirect('/');
});

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});