describe('playerController', function() {

  beforeEach(module('SportsLadder'));

  var scope, factory, filter, ctrl;

  beforeEach(inject(function($rootScope, $controller, Player, rankFilter) {
    factory = Player;
    scope = $rootScope.$new();
    filter = rankFilter;
    ctrl = $controller('mainController', {
      $scope: scope,
      Player: factory
    });

  }));

  it('should initialise with an empty players resource', function() {
    expect(scope.players).toEqual([]);
  });

  it('it can create a new player rank ', function() {
    expect(scope.newPlayerRank()).toEqual(1); 
  });

  it('creates a new player to render in the view', function(){
    scope.newPlayer = { name: 'Rich', rank: 1 };
    scope.createPlayer();
    expect(scope._postPlayer()).toHaveBeenCalled;
    expect(scope.players).toEqual([{ name: 'Rich', rank: 1 }]);
    expect(scope.newPlayer).toEqual({});
  });

  it('can update players ranks in the ladder in the view', function(){
    scope.loser = {name: 'Rich', rank: 2};
    scope.winner = {name: 'Nick', rank: 1};
    scope.updateLadder();
    expect(scope._updateDbRanks()).toHaveBeenCalled;
    expect(scope.winner.rank).toEqual(1);
    expect(scope.loser.rank).toEqual(2);
  });

  it('when the challenger loses, the ranks will not change', function(){
    scope.players = [{name: 'Rich', rank: 1},
                     {name: 'Ed', rank: 2},
                     {name: 'Nick', rank: 3},
                     {name: 'Ben', rank: 4},
                     {name: 'Blease', rank: 5}];
    scope.winner = {name: 'Ed', rank: 2};
    scope.loser = {name: 'Nick', rank: 3};
    scope.updateLadder();
    expect(scope.winner.rank).toEqual(2);
    expect(scope.loser.rank).toEqual(3);
  });

  it('when the challenger wins, the ranks will change incrementally', function(){
    players = [{name: 'Rich'}, {name:'Ed'}, {name: 'Nick'}, {name: 'Ben'}, {name: 'Blease'}];
    players.forEach(function(player) {
      scope.newPlayer = player
      scope.createPlayer();
    });
    scope.winner = scope.players[3];
    scope.loser = scope.players[1];
    scope.updateLadder();
    expect(scope.players).toEqual([{name: 'Rich', rank: 1},
                                   {name: 'Ed', rank: 3},
                                   {name: 'Nick', rank: 4},
                                   {name: 'Ben', rank: 2},
                                   {name: 'Blease', rank: 5}]);
  });

  describe('When recording a match', function() {

    it('resitricts the range of players', function() {
      var players = [{name: 'Rich', rank: 1},
                     {name: 'Ed', rank: 2},
                     {name: 'Nick', rank: 3},
                     {name: 'Ben', rank: 4},
                     {name: 'Blease', rank: 5}];
      expect(filter(players, 3)).toEqual([{name: 'Ed', rank: 2},
                                       {name: 'Nick', rank: 3},
                                       {name: 'Ben', rank: 4},]);
    });

  });

});
