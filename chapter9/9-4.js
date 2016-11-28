var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'nodejs',
    password: 'qwer!1234'
});

client.query('USE Company');
client.query('SELECT * FROM products', function(error, result, fields) {
    console.log(result);
    console.log(error);
    console.log(fields);
});