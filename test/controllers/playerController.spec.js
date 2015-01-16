describe('playerController', function() {

  beforeEach(module('SportsLadder'));

  var scope, factory, ctrl;

  beforeEach(inject(function($rootScope, $controller, Player) {
    factory = Player;
    scope = $rootScope.$new();
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
    expect(scope.players).toEqual([{ name: 'Rich', 
                                     rank: 1, 
                                     gamesWon: 0, 
                                     gamesLost: 0, 
                                     gamesPlayed: 0, 
                                     _id: 0}]);
    expect(scope.newPlayer).toEqual({});
  });

  it('can update players ranks in the ladder in the view', function(){
    scope.loser = {name: 'Rich', rank: 2};
    scope.winner = {name: 'Nick', rank: 1};
    scope.updateLadder();
    expect(scope._updateDb()).toHaveBeenCalled;
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
    expect(scope.players).toEqual([{name: 'Rich', rank: 1, gamesWon: 0, gamesLost: 0, gamesPlayed: 0, _id: 0},
                                   {name: 'Ed', rank: 3, gamesWon: 0, gamesLost: 1, gamesPlayed: 1, _id: 0},
                                   {name: 'Nick', rank: 4, gamesWon: 0, gamesLost: 0,  gamesPlayed: 0, _id: 0},
                                   {name: 'Ben', rank: 2, gamesWon: 1, gamesLost: 0, gamesPlayed: 1, _id: 0},
                                   {name: 'Blease', rank: 5, gamesWon: 0, gamesLost: 0, gamesPlayed: 0, _id: 0}]);
  });

  describe('When recording a match', function() {

    it('displays statistics about Games played', function(){
      players = [{name: 'Rich'}, {name:'Ed'}, {name: 'Nick'}, {name: 'Ben'}, {name: 'Blease'}];
      players.forEach(function(player) {
        scope.newPlayer = player
        scope.createPlayer();
      });
      scope.winner = scope.players[3];
      scope.loser = scope.players[1];
      scope.updateLadder();
      expect(scope.winner.gamesPlayed).toEqual(1); 
      expect(scope.loser.gamesPlayed).toEqual(1); 
    });

    it('displays games won and lost for games played', function() {
      players = [{name: 'Rich'}, {name:'Ed'}, {name: 'Nick'}, {name: 'Ben'}, {name: 'Blease'}];
      players.forEach(function(player) {
        scope.newPlayer = player
        scope.createPlayer();
      });
      scope.winner = scope.players[3];
      scope.loser = scope.players[1];
      scope.updateLadder();
      expect(scope.winner.gamesWon).toEqual(1); 
      expect(scope.loser.gamesLost).toEqual(1); 
    });

  });

});
