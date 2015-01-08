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

  function returnPlayers(players){ return players };

  router.route('/players')

    .get(function(request, response) {
      Player(PlayerRepository).getPlayers(response) 
      })

    .post(function(request, response){
      Player(PlayerRepository).addPlayer(request, response, getPlayers(response))
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
