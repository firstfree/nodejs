var connection = require('../connection');
var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
    connection.acquire(function(err, connection) {
        connection.query('DELETE FROM products WHERE id=?', [
            req.params.id
        ], function() {
            res.redirect('/');
            connection.release();
        });
    });
});

module.exports = router;