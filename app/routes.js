var Player = require('./models/playerrepository');
var routes = function(app, router) {

  var getPlayers = function(Player, response) {
    Player.find().sort('rank').exec(function(err, players) {
      if (err)
        response.send(err)
      response.json(players)
    });
  };

  router.route('/players')

    .get(function(request, response) {
      getPlayers(Player, response);
    })

    .post(function(request, response){
      Player.find(function(err, players) {
          if (err)
            response.send(err)
      Player.create({
        name : request.body.name,
        rank : (players.length + 1) 
      }, function(err, player) {
        if (err)
          response.send(err)
        getPlayers(Player, response);
        });
      }); 
    });

  router.route('/search')

    .post(function(request, response) {
      Player.findOne({ name: request.body.winner.name }, function(err, winner) {
        if (err)
          response.send(err)
        var winnerRank = winner.rank
        Player.findOne({ name: request.body.loser.name }, function(err, loser) {
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
            getPlayers(Player, response);
          });
        });
      });
    });

  app.use('/api', router);
 
};

module.exports = routes;