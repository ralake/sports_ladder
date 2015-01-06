var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
  name: {type : String, default: ''}
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;