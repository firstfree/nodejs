var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var client = mysql.createConnection({
    user: 'nodejs',
    password: 'qwer!1234',
    database: 'Company'
});

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

app.get('/', function(request, response) {
    fs.readFile('9-10.html', 'utf8', function(err, data) {
        client.query('SELECT * FROM products', function(err, results) {
            response.send(ejs.render(data, {
                data: results
            }));
        });
    });
});

app.get('/delete/:id', function(request, response) {});
app.get('/insert', function(request, response) {});
app.post('/insert', function(request, response) {});
app.get('/edit/:id', function(request, response) {});
app.post('/edit/:id', function(request, response) {});