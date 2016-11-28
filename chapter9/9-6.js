var mysql = require('mysql');

var client = mysql.createConnection({
    user: 'nodejs',
    password: 'qwer!1234',
    database: 'Company'
});

client.query('USE Company');
client.query('SELECT * FROM products', function(error, result, fields) {
    if (error) {
        console.log('쿼리 문장에 오류가 있습니다.');
    } else {
        console.log(result);
    }
});