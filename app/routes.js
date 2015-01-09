var PlayerRepository = require('./models/playerrepository');
var Player = require('./models/player')
var routes = function(app, router) {

  function returnPlayers(players){ return players };

  router.route('/players')

    .get(function(request, response) {
      Player(PlayerRepository).getPlayers(function(err, players) {
        if(err)
          response.send(err)
        response.json(players)
      });
    })

    .post(function(request, response){
      PlayerRepository.find(function(err, players) {
          if (err)
            response.send(err)
      PlayerRepository.create({
        name : request.body.name,
        rank : (players.length + 1) 
      }, function(err, player) {
        if (err)
          response.send(err)
        Player(PlayerRepository).getPlayers(function(err, players) {
          if(err)
            response.send(err)
        response.json(players)
        });
        });
      }); 
    });

  router.route('/search')

    .post(function(request, response) {
      PlayerRepository.findOne({ name: request.body.winner.name }, function(err, winner) {
        if (err)
          response.send(err)
        var winnerRank = winner.rank
        PlayerRepository.findOne({ name: request.body.loser.name }, function(err, loser) {
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
            Player(PlayerRepository).getPlayers(function(err, players) {
              if(err)
                response.send(err)
              response.json(players)
            });
          });
        });
      });
    });

  app.use('/api', router);
 
};

module.exports = routes;