var cheerio = require('cheerio');
var request = require('request');

var targetUrl = 'http://www.hanbit.co.kr/media/books/new_book_list.html';
request(targetUrl, function(err, res, body) {
    var $ = jQuery = cheerio.load(body);

    $('.sub_book_list').each(function() {
        var title = $(this).find('.book_tit').text().trim();
        var writer = $(this).find('.book_writer').text().trim();

        writer = writer.split(',').map(function(item) {
            return item.trim();
        });

        console.log(title);
        console.log(writer);
        console.log();
    });
});