var connection = require('../connection');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  connection.acquire(function(err, connection) {
    connection.query('SELECT * FROM products', function(err, rows) {
      res.render('index', {
        title: 'List Page',
        data: rows
      });
      connection.release();
    });
  });
});

module.exports = router;
