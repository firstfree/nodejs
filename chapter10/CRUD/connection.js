var mysql = require('mysql');

function Connection() {
    var pool = null;

    this.init = function() {
        pool = mysql.createPool({
            connectionLimit: 10,
            host: '10.211.55.4',
            user: 'nodejs',
            password: 'qwer!1234',
            database: 'Company'
        });
    }

    this.acquire = function(callback) {
        pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    }
}

module.exports = new Connection();