/**
 * Created by yuqi on 7/19/2015.
 */
var net = require('net');
var fs = require('fs');
var server = net.createServer(function(connect){
    var log = fs.createWriteStream('eli.log');
    console.log('conn establish');
    connect.on('end',function(){
        console.log('conn end');
    });

    connect.write('listening interface\r\n');
    connect.pipe(connect).pipe(log);
});
var NET_PORT = 7777;
server.listen(NET_PORT,function(){
    console.log('server listen on port '+NET_PORT)
});