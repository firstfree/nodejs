var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    if (request.cookies.auth) {
        response.send('<h1>Login Success</h1>');
    } else {
        response.redirect('/login');
    }
});

app.get('/login', function(request, response) {
    fs.readFile('8-23.html', 'utf8', function(err, data) {
        response.send(data);
    });
});

app.post('/login', function(request, response) {
    var login = request.body.login;
    var password = request.body.password;

    console.log(login, password);
    console.log(request.body);

    if (login == 'rint' && password == '1234') {
        response.cookie('auth', true);
        response.redirect('/');
    } else {
        response.redirect('/login');
    }
});

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});