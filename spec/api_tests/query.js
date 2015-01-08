var api = require('hippie');
api.assert.showDiff = true;

// it GETs all players
api()
  .json()
  .get('http://localhost:3000/api/players')
  .expectStatus(200)
  .end(function(err, res, body) {
    if (err) {
      throw err;
    }
    else {
      console.log("GET request to all players successful. Test passed.")
    }
});
