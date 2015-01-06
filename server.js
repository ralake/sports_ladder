var express = require('express');
var app = express();
var router = express.Router();
var server = require('http').createServer(app);
var database = require('./config/database');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.set('dbUrl', database.db[app.settings.env]);
mongoose.connect(app.get('dbUrl'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("DB connected lads");
});

app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require('./app/routes')(app, router);

app.get('*', function(request, response){
  response.sendFile('index.html');
});

server.listen(3000, function() {
  console.log('Server Listening Lads, on port :3000 Lads');
});
