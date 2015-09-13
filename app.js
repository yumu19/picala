var express = require('express');
var app = express();
var http = require('http').Server(app);
var url  = require('url');
var io = require('socket.io')(http);
app.use(express.static(__dirname +'/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/admin', function(req, res){
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.sendFile(__dirname + '/admin.html');
})

app.get('/push', function(req, res){
  var now = new Date();
  var parts = url.parse(req.url,true);
  var type = parts.query.type;
  console.log(type);

  switch(type) {
      case 'hee': //orange
//              io.emit(ほげほげ);
              break;
      default:
              break;
  }
  j = 0;
  now = new Date();
  console.log(j+","+type+","+now.getTime()+","+now.toString());
  io.emit('type', type);
  res.send('<p>200 OK</p>');
})

http.listen(3000, function(){
  console.log('listening on *:3000');
})

//
//
//
//
//
//
//
// var exec = require('child_process').exec;
// var i = 0;
// var j = 1; 1
// var command = "";
// var ipaddr = "localhost";
//
// http.createServer(function (req, res) {
//     var now = new Date();
//     var parts = url.parse(req.url,true);
//     var type = parts.query.type;
//     switch(type) {
//         case 'hee': //orange
//                 command = "./hue.sh "+j+" 255 255 10000"
//                 exec(command, function(err, stdout, stderr) {});
//                 now = new Date();
//                 console.log(j+",hee,"+now.getTime()+","+now.toString());
//                 break;
//         case 'great': //red
//                 command = "./hue.sh "+j+" 255 255 65535"
//                 exec(command, function(err, stdout, stderr) {});
//                 console.log(j+",great,"+now.getTime()+","+now.toString());
//                 break;
//         case 'www': //green
//                 command = "./hue.sh "+j+" 255 255 25500"
//                         exec(command, function(err, stdout, stderr) {});
//                 console.log(j+",www,"+now.getTime()+","+now.toString());
//                 break;
//         case 'question': //blue
//                 command = "./hue.sh "+j+" 255 255 47000"
//                         exec(command, function(err, stdout, stderr) {});
//                 console.log(j+",question,"+now.getTime()+","+now.toString());
//                 break;
//         default:
//                 break;
//     }
//     i++;
//     if(i>2) {
//         i=0;
//     }
//     j = i+1
//     res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//     res.end('<h1>OK</h1>');
// //}).listen(1337, "10.1.100.100");
// // }).listen(1337, "192.168.3.7");
// }).listen(1337, ipaddr);
