var express = require('express');
var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var counter = 0;
function Product(name, image, price, count) {
    this.index = counter++;
    this.name = name;
    this.image = image;
    this.price = price;
    this.count = count;
}

var products = [
    new Product('a', 'chrome.png', 20000, 30),
    new Product('b', 'chrome.png', 30000, 30),
    new Product('c', 'chrome.png', 40000, 30),
    new Product('d', 'chrome.png', 50000, 30),
    new Product('e', 'chrome.png', 60000, 30),
    new Product('f', 'chrome.png', 70000, 30),
    new Product('g', 'chrome.png', 80000, 30),
];

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    fs.readFile('HTMLPage.html', 'utf8', function(err, data) {
        res.send(ejs.render(data, {
            products: products
        }));
    });
});

server.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    function onReturn(index) {
        products[index].count++;

        clearTimeout(cart[index].timerID);

        delete cart[index];

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    }

    var cart = {};

    socket.on('cart', function(index) {
        products[index].count--;

        cart[index] = {};
        cart[index].index = index;
        cart[index].timerID = setTimeout(function() {
            onReturn(index);
        }, 10 * 1000);

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    socket.on('buy', function(index) {
        clearTimeout(cart[index].timerID);

        delete cart[index];

        io.sockets.emit('count', {
            index: index,
            count: products[index].count
        });
    });

    socket.on('return', function(index) {
        onReturn(index);
    });
});