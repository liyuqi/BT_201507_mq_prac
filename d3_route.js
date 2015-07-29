/**
 * Created by yuqi on 7/19/2015.
 */
var express = require('express');

var app = express();

var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3007);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/d3_prac', function(req,res){
    res.render('', {
        //fortune: fortune.getFortune(),
        //pageTestScript: '/qa/tests-about.js'
    //} );
});

// custom 404 page
app.use(function(req, res){
    res.status(404).render('400');
});
// custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).render('500');
});
app.listen(app.get('port'), function(){
    console.log( 'Express listen on'+ app.get('port'));
});





// 視覺化的夢幻組合 － D3.js 、 Adobe Illustrator 與 NodeJS
// [[http://blog.infographics.tw/2015/04/d3js-adobe-illustrator-nodejs/]]
var d3 = require("d3");
var jsdom = require("jsdom");

//jsdom.env({
//    html: "<body><div></div></body>",
//    done: (error, window){
//    console.log("我們拿到 window 了!");
//}
//});

//var root = window.document.querySelector("div");
//
//svg = d3.select(root).append("svg").attr({width:"800",height:"600"});
//svg.selectAll("path").data();
//
//var data = {children: d3.range(0,100,1)
//    .map(function() { return {value:Math.random()};})};
///* 使用 Pack Layout */
//var nodes = d3.layout.pack().size([800,400]).sort(null).nodes(data)
//    .filter(function(it){return it.depth==1;});
//var color = d3.scale.category20();
///* 繪出 */
//svg.selectAll("circle").data(nodes).enter().append("circle")
//    .attr({
//        cx: function(it) { return it.x; },
//        cy: function(it) { return it.y; },
//        r: function(it) { return it.r; },
//        fill: function(it) { return color(it.value); }
//    });
//
//
//svg_string = root.innerHTML;
//fs.writeFileSync("output.svg", svg_string);
//
//var canvg = require("canvg");
//var cvs = window.document.querySelector("body").appendChild(window.document.createElement("canvas"));
//canvg(cvs, svg_string);
//img_base64 = cvs.toDataURL().replace(/^[^,]+,/, "");
//fs.writeFileSync("output.png", new Buffer(img_base64, "base64"));