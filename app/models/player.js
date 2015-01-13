module.exports = function(playerRepo) {

  return {

    getPlayers: function(callback) {
       playerRepo.find().sort('rank').exec(function (err, players) {
       if (err)
         callback(err)
       callback(null, players); 
     });
    },

    addPlayer: function(player, callback) {
      playerRepo.create({
        name : player.name,
        rank : player.rank 
      }, function(err, player){
        if (err)
          callback(err)
        callback(player)
      });
    }, 

    updatePlayerRanks: function(winner, loser, callback){
      var winnerRank = winner.rank
      var loserRank = loser.rank
      playerRepo.update({ _id: winner._id }, { $set: { rank: loserRank }}, function(err, player){
        if (err)
          callback(err)
        playerRepo.update({ _id: loser._id }, { $set: { rank: winnerRank }}, function(err, player){
          if (err)
            callback(err)
          playerRepo.find().sort('rank').exec(function (err, players) {
            if (err)
              callback(err)
            callback(null, players); 
          });
        });
      });
    }
  };
};
