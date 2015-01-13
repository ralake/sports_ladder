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
      Player(PlayerRepository).addPlayer(request.body, function(err, player) {
        if(err)
          response.send(err)
        response.json(player)
      });
    }); 

  router.route('/search')

    .post(function(request, response) {
      Player(PlayerRepository).updatePlayerRanks(request.body.winner, request.body.loser, function (err, players) {
        if(err)
          response.send(err)
        response.json(players)
      });
    }); 
    
  router.route('/players/:id')

    .put(function(request, response) {
      Player(PlayerRepostiory).updatePlayerRank(request.body, function(err, player) {
        if(err)
          response.send(err)
        response.json(player)
      });
    });
        

  app.use('/api', router);
 
};

module.exports = routes;
