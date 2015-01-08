var PlayerRepository = require('./models/playerrepository');
var Player = require('./models/player');
var routes = function(app, router) {

//  var getPlayers = function(Player, response) {
//    Player.find().sort('rank').exec(function(err, players) {
//      if (err)
//        response.send(err)
//      response.json(players)
//    });
//  };

  router.route('/players')

    .get(function(request, response) {
        Player(PlayerRepository).getPlayers(response)
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
        Player(PlayerRepository).getPlayers(response)
        });
      }); 
    });

  router.route('/search')

    .post(function(request, response) {
      var player = new Player(PlayerRepository)
      player.updatePlayerRanks(request.body.winner, request.body.loser, function(err, updatedLadder) {
        response.json(updatedLadder)
        });
    });

  app.use('/api', router);
 
};

module.exports = routes;
