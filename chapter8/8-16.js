var express = require('express');
var app = express();

app.use('/a', require('./8-16A').router);
app.use('/b', require('./8-16B').router);
app.use('/c', require('./8-16C').router);

app.listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});