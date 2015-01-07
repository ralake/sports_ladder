var Player = require('./models/Player');
var routes = function(app, router) {

  var getPlayers = function(Player, response) {
    Player.find(function(err, players) {
      if (err)
        response.send(err);
      response.json(players);
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

  app.use('/api', router);
 
};

module.exports = routes;
