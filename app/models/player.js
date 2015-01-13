module.exports = function(playerRepo) {

  return {

    getPlayers: function(callback) {
       playerRepo.find(function (err, players) {
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
        callback(null, player)
      });
    }, 

    updatePlayerRank: function(player, newRank, callback){
      playerRepo.update({ _id: player._id }, { $set: { rank: newRank }}, function(err, player){
        if (err)
          callback(err)
        callback(null, player); 
      });
    }
  };
};
