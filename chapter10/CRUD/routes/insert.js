var connection = require('../connection');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('insert', {
        title: 'Insert Page'
    });
});

router.post('/', function(req, res, next) {
    var body = req.body;

    connection.acquire(function(err, connection) {
        connection.query('INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)', [
            body.name, body.modelnumber, body.series
        ], function() {
            res.redirect('/');
            connection.release();
        });
    });
});

module.exports = router;