describe('filter', function() {

  beforeEach(module('playerFilter'));

  describe('rankMatch', function() {
  
    it('resitricts the range of players',
      inject(function(rankMatchFilter) {
      var players = [{name: 'Rich', rank: 1},
                     {name: 'Ed', rank: 2},
                     {name: 'Nick', rank: 3},
                     {name: 'Ben', rank: 4},
                     {name: 'Blease', rank: 5}];
      expect(rankMatchFilter(players, 3)).toEqual([{name: 'Ed', rank: 2},
                                          {name: 'Nick', rank: 3},
                                          {name: 'Ben', rank: 4},]);
    }));

  });

});