var http = require('http');

http.get({
    host: 'www.kma.go.kr',
    path: '/weather/forecast/mid-term-rss.jsp?stnId=108'
}, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log('Data Download');
    });
});