var http = require('http');
var fs = require('fs');

http.get({
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function(res) {
    var result = '';

    res.setEncoding('utf8');
    res.on('end', function() {
        fs.writeFile("XMLFile.xml", result);
    }).on('data', function(data) {
        result += data;
    });
});