var cheerio = require('cheerio');
var request = require('request');

var targetUrl = 'http://www.hanbit.co.kr/media/books/new_book_list.html';
request(targetUrl, function(err, res, body) {
    var $ = jQuery = cheerio.load(body);
});