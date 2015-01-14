describe('playerController', function() {
  beforeEach(module('SportsLadder'));

  var scope, factory, ctrl;

  beforeEach(inject(function($rootScope, $injector, $controller, Player) {
    factory = Player;
    $httpBackend = $injector.get('$httpBackend');
    scope = $rootScope.$new();
    ctrl = $controller('mainController', {
      $scope: scope,
      Player: factory
    });

  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }); 
  
  it('should get players from the db on initialisation', function() {
    $httpBackend.expectGET('/api/players');
    $httpBackend.flush();
  });

  it('should initialise with an empty players resource', function() {
    expect(scope.players).toEqual([]);
  });

  it('it can create a new player rank ', function() {
    expect(scope.newPlayerRank()).toEqual(1); 
  });

  it('creates a new player in the view', function(){
    scope.newPlayer = { name: 'Rich', rank: 1 };
    scope.createPlayer();
    expect(scope.players).toEqual([{ name: 'Rich', rank: 1 }]);
    expect(scope.newPlayer).toEqual({});
  });

  it('can swap players ranks in the ladder in the view', function(){
    scope.winner = {name: 'Rich', rank: 2};
    scope.loser = {name: 'Nick', rank: 1};
    scope.updateLadder();
    expect(scope.winner.rank).toEqual(1);
    expect(scope.loser.rank).toEqual(2);
  });

  it('creates a new player in the db', function(){
    $httpBackend.flush();
    $httpBackend.expectPOST('/api/players', { name: 'Rich', rank: 1 }).respond(404);
    scope.newPlayer = { name: 'Rich', rank: 1 };
    scope.createPlayer();
    expect(scope.players).toEqual([{ name: 'Rich', rank: 2 }]);
    expect(scope.newPlayer).toEqual({});
  });


});
