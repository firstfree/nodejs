var fs = require('fs');
var http = require('http');
var os = require('os');
var cluster = require('cluster');

var cpuCount = os.cpus().length;
console.log('CPU Count:', cpuCount);

if (cluster.isMaster) {
    for (var i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    cluster.on('death', function(worker) {
        console.log('worker ' + worker.pid + ' died');
    });
} else {
    http.createServer(function(req, res) {
        try {
            var data = fs.readFileSync('HTMLPage.html', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        } catch (exception) {
            console.log(exception);
        }
    }).listen(3000, function() {
        console.log('Server running at http://127.0.0.1:3000');
    });
}