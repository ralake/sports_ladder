'use strict';

var utils = require('../utils');
var should = require('should');
var Player = require('../../app/models/playerrepository.js');

describe('Player: models', function () {

 describe('#create()', function () {
  
   it('should create a new Player', function (done) {
     var player = {name: "Rich"};
     Player.create(player, function (err, createdPlayer) {
       should.not.exist(err);
       createdPlayer.name.should.equal('Rich');
       done();
     });
   });
 });

});
