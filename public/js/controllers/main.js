angular.module("playerController", ["ngResource"])

  .controller('mainController', function($scope, Player) {

    $scope.players = Player.query();

    $scope.createPlayer = function() {
      $scope._postPlayer();
      $scope._clearForm();
    };

    $scope.newPlayerRank = function() {
      return $scope.players.length + 1;
    };

    $scope._postPlayer = function() {
      if (!$.isEmptyObject($scope.newPlayer)) {
        var player = new Player();
        player.name = $scope.newPlayer.name;
        player.rank = $scope.newPlayerRank();
        player.$save(function(player){
          $scope.players.push(player);
        });
      }
    };

    $scope._clearForm = function() {
      $scope.newPlayer = {};  
      $scope.addPlayer.$setPristine();
    };

  });

