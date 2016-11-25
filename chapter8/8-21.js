var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('short'));
app.use(function(request, response) {
    response.send('<h1>express Basic</h1>');
});

app.listen(3000, function() {
    console.log('Server Running at http://127.0.0.1:3000');
});