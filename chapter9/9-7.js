var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'nodejs',
    password: 'qwer!1234',
    database: 'Company'
});

client.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
    'Name Value', 'Model Number Value', 'Series Value'
], function(error, results, fields) {
});