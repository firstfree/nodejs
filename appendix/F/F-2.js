var mongojs = require('mongojs');
var db = mongojs('10.211.55.4:27017/node', ['products']);

db.products.find(function(err, data) {
    console.log(data);
});

db.close();