/**
 * Created by yuqi on 7/20/2015.
 */


// 資料爬蟲實戰－使用 node.js
// [[http://blog.infographics.tw/2015/03/crawl-data-with-nodejs/]]
var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");
request({
    url: "http://blog.infographics.tw",
    method: "GET"
}, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("li.item h2");
    for(var i=0;i<titles.length;i++) {
        result.push($(titles[i]).text());
    }
    fs.writeFileSync("result.json", JSON.stringify(result));
});