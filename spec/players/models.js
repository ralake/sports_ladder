'use strict';

// import the moongoose helper utilities
var utils = require('../utils');
var should = require('should');
// import our User mongoose model
var Player = require('../../app/models/player.js');

describe('Player: models', function () {

 describe('#create()', function () {
   it('should create a new Player', function (done) {
     // Create a Player object to pass to Player.create()
     var p = {
       name: "Rich" 
     };
     Player.create(p, function (err, createdPlayer) {
       // Confirm that that an error does not exist
       should.not.exist(err);
       // verify that the returned user is what we expect
       createdPlayer.name.should.equal('Rich');
       // Call done to tell mocha that we are done with this test
       done();
     });
   });
 });

});