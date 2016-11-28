var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'nodejs',
    password: 'qwer!1234'
});

client.query('USE Company');