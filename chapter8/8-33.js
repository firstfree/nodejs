var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
}));

app.use(function(request, response) {
    request.session.now = new Date().toUTCString();
    response.send(request.session);
});

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});