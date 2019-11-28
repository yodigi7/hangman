var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var socketUtils = require('./socketUtils');
// socketUtils = new socketUtils();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection', socketUtils.onConnection);
io.on('disconnect', socketUtils.onDisconnect);