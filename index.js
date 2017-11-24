var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var activeQrs={};

io.on('connection', function(socket){
	if(socket.handshake.query.sessionId){
		activeQrs[socket.handshake.query.sessionId]={
			socket:socket,
			timeStamp:new Date().getTime()
		};
	}
  	socket.on('disconnect', function(){
  		delete activeQrs[socket.handshake.query.sessionId];
  	});
  socket.on('session', function(msg){
    //console.log('New session: origin ' + msg.origin + '|'+ msg.sessionId);
    
  });
  	socket.on('scan',function(msg){
  		var payload=JSON.parse(msg);
  		
  		activeQrs[payload.url].socket.emit('userDetails',payload);
  		
  	});
});
/*
setInterval(function(){
	console.log("---------------------------------------------------------------------------------------");
	console.log("|Sr|id                                                                                 |");
	console.log("---------------------------------------------------------------------------------------");
	var count=0;
	for(key in activeQrs){
		++count;
		console.log("| "+count+"|"+key);
	}
	console.log("---------------------------------------------------------------------------------------");

},3000);
*/
http.listen(3000, function(){
  console.log('listening on *:3000');
});