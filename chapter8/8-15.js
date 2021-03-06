var express = require('express');
var app = express();

var routerA = express.Router();
var routerB = express.Router();

routerA.get('/index', function(request, response) {
    response.send('<h1>Index Page A</h1>');
});

routerB.get('/index', function(request, response) {
    response.send('<h1>Index Page B</h1>');
});

app.use('/a', routerA);
app.use('/b', routerB);

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});