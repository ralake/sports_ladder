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
    expect(scope.players).toEqual([{ name: 'Rich', rank: 1 }]);
    expect(scope.newPlayer).toEqual({});
  });

  it('can swap players ranks in the ladder in the view', function(){
    scope.winner = {name: 'Rich', rank: 2};
    scope.loser = {name: 'Nick', rank: 1};
    scope.updateLadder();
    expect(scope._swapDbRanks()).toHaveBeenCalled;
    expect(scope.winner.rank).toEqual(1);
    expect(scope.loser.rank).toEqual(2);
  });

});
