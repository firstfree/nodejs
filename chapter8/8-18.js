var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<img src="static_test.png" width="100%"/>');
});

app.listen(3000, function() {
    console.log('Server Running at http://127.0.0.1:3000');
}); 