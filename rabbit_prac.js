/**
 * Created by yuqi on 7/19/2015.
 */
// rabbit.js：在 Node.JS 中使用 RabbitMQ 實作訊息佇列（Message Queue）
// [[ http://blogger.gtwang.org/2014/05/rabbitjs-nodejs-rabbitmq.html ]]

// rabbit.js
// [[https://github.com/squaremo/rabbit.js]]


//var context = require('rabbit.js').createContext('amqp://localhost');
//var pub = context.socket('PUBLISH');
//var sub = context.socket('SUBSCRIBE');
//
//pub.connect('alerts');
//sub.connect('alerts');
//
//sub.setEncoding('utf8');
//sub.on('data',function(note){console.log('Alert %s',note);});
//
//pub.write('Emergency!','utf8');
//
//sub.pipe(process.stdout);

// Nodejs系列文章之:将Redis作为Message Queue使用
// [[http://m.oschina.net/blog/261750]]

// 高可靠消息系统 RabbitMQ
// [[http://blog.eood.cn/tag/mq]]
//
var redis = require("redis");
var client = redis.createClient(6379, '127.0.0.1', {connect_timeout: 1});

//订阅一个频道
var sub = function(c) {
    var c = c || 'roban:test:channel';
    client.subscribe(c,function(e){
        console.log('starting subscribe channel:'+c);
    });
};

//订阅一个频道
sub();

//处理错误,如果出现错误,或者服务器断开了链接,等待恢复时,继续订阅这个频道
client.on('error', function(error) {
    console.log(error);
    sub();
});


//订阅处理函数
client.on('message',function(err,response){
    console.log(response);
});


//打开redis命令行,输入以下命令:
//
//publish roban:test:channel hello
//发布这条信息后,sub端会输出以下信息:
//
//Robans-Pro:node robanlee$ node demo.js
//starting subscribe channel:roban:test:channel
//hello