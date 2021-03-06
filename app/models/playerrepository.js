var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {type : String, default: ''},
  rank: {type : Number},
  gamesWon: {type : Number},
  gamesLost: {type : Number},
  gamesPlayed: {type : Number}
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;
