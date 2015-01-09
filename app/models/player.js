module.exports = function(playerRepo) {

  return {

    getPlayers: function(callback) {
       playerRepo.find().sort('rank').exec(function (err, players) {
       if (err)
         callback(err)
       callback(null, players); 
     });
    },

    addPlayer: function(request, response, callback) {
      playerRepo.find(function(err, players) {
        if (err)
          console.log(err)
        playerRepo.create({
          name : request.body.name,
          rank : (players.length + 1)
        }, function(err, player){
          if (err)
            console.log(err)
          });
      });
      callback();
    }, 

    updatePlayerRanks: function(requestWinner, requestLoser){
      this.repository.findOne({ name: requestWinner.name }, function(err, winner) {
        if (err)
          response.send(err)
        var winnerRank = winner.rank
       this.repository.findOne({ name: requestLoser.name }, function(err, loser) {
          if (err)
            response.send(err)
          var loserRank = loser.rank
          winner.rank = loserRank
          winner.save(function(err) {
            if (err)
              response.send(err)
          });
          loser.rank = winnerRank
         loser.save(function(err) {
            if (err)
              response.send(err)
            getPlayers();
          });
        });
      });
    }

  };
};
