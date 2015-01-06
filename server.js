var express = require('express');
var app = express();

var server = require('http').createServer(app);

server.listen(3000, function() {
  console.log('Server Listening Lads, on port :3000 Lads')
});
