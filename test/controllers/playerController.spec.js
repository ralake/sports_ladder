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

  it('should initialise with an empty add player term', function() {
    expect(scope.players).toBeDefined();
  });

});
