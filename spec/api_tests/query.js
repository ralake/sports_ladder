var api = require('hippie');
api.assert.showDiff = true;

// it GETs all players
api()
  .json()
  .get('http://localhost:3000/api/players')
  .expectStatus(200)
  .expectValue('[0].name', 'Nick')
  .expectValue('[0].rank', 1)
  .expectValue('[1].name', 'Ben')
  .expectValue('[1].rank', 2)
  .end(function(err, res, body) {
    if (err) {
      throw err;
    }
    else {
      console.log("API Test: GET request to all players successful. Test passed.")
    }
});
