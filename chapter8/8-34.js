var express = require('express');
var bodyParser = require('body-parser');

var DummyDB = (function() {})();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/user', function(request, response) {});
app.get('/user/:id', function(request, response) {});
app.post('/user', function(request, response) {});
app.put('/user/:id', function(request, response) {});
app.delete('/user/:id', function(request, response) {});

app.listen(300, function() {
    console.log('Server running at http://127.0.0.1:3000');
});