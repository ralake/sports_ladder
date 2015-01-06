var Player = require('./models/Player');
var routes = function(app, router) {

  router.route('/players')

    .get(function(request, response) {
      Player.find(function(err, players) {
        if (err)
          response.send(err)
        response.json(players);
      });
    })

    .post(function(request, response){
      Player.create({
        name : request.body.name
      }, function(err, player) {
        if (err)
          response.send(err)
        Player.find(function(err, players) {
          if (err)
            response.send(err)
          response.json(players);
        });
      }); 
    });

  app.use('/api', router);

  
}

module.exports = routes;