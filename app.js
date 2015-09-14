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
  res.sendFile(__dirname + '/admin.html');
})

app.get('/push', function(req, res){
  var now = new Date();
  var parts = url.parse(req.url,true);
  var type = parts.query.type;
  now = new Date();
  console.log(type+","+now.getTime()+","+now.toString());
  io.emit('type', type);
  res.send('<p>200 OK</p>');
})

http.listen(3000, function(){
  console.log('listening on *:3000');
})
