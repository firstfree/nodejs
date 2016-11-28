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

app.get('/delete/:id', function(request, response) {
    client.query('DELETE FROM products WHERE id=?', [
        request.params.id
    ], function() {
        response.redirect('/');
    });
});

app.get('/insert', function(request, response) {
    fs.readFile('9-13.html', 'utf8', function(err, data) {
        response.send(data);
    });
});

app.post('/insert', function(request, response) {
    var body = request.body;

    client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
        body.name, body.modelnumber, body.series
    ], function() {
        response.redirect('/');
    });
});

app.get('/edit/:id', function(request, response) {
    fs.readFile('9-16.html', 'utf8', function(err, data) {
        client.query('SELECT * FROM products WHERE id=?', [
            request.params.id
        ], function(err, result) {
            response.send(ejs.render(data, {
                data: result[0]
            }));
        });
    });
});

app.post('/edit/:id', function(request, response) {
    var body = request.body;

    client.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [
        body.name, body.modelnumber, body.series, request.params.id
    ], function() {
        response.redirect('/');
    });
});