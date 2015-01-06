var express = require('express');
var app = express();
var server = require('http').createServer(app);
var database = require('./config/database');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.set('dbUrl', database.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB connected lads");
});

app.get('/', function(request, response){
  response.sendFile('index.html');
});

server.listen(3000, function() {
  console.log('Server Listening Lads, on port :3000 Lads');
});
