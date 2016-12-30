var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res) {
    res.send({
        method: req.method,
        query: req.query,
        body: req.body
    });
});

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});