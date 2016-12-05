var connection = require('../connection');
var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    connection.acquire(function(err, connection) {
        connection.query('SELECT * FROM products WHERE id=?', [
            req.params.id
        ], function(err, row) {
            res.render('edit', {
                title: 'Edit Page',
                data: row[0]
            });
            connection.release();
        });
    });
});

router.post('/:id', function(req, res, next) {
    var body = req.body;

    connection.acquire(function(err, connection) {
        connection.query('UPDATE products SET name=?, modelnumber=?, series=? WHERE id=?', [
            body.name, body.modelnumber, body.series, req.params.id
        ], function() {
            res.redirect('/');
            connection.release();
        });
    });
});

module.exports = router;