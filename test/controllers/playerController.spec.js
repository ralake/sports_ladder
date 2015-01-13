describe('playerController', function() {
  beforeEach(module('SportsLadder'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller, Player) {
    factory = Player;
    scope = $rootScope.$new();
    ctrl = $controller('mainController', {
      $scope: scope,
      Player: factory
    });
  }));

  it('should initialise with an empty players resource', function() {
    expect(scope.players).toBeDefined();
  });

  it('it can create a new player rank ', function() {
   expect(scope.newPlayerRank()).toEqual(3); 
  });

  it('new test', function(){
  });

});
