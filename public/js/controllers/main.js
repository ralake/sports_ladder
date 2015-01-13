angular.module("playerController", ["ngResource"])

  .controller('mainController', function($scope, Player) {

    $scope.players = Player.query();

    $scope.createPlayer = function() {
      $scope._renderPlayer();
      $scope._postPlayer();
      $scope.newPlayer = {};  
    };

    $scope.newPlayerRank = function() {
      return $scope.players.length + 1;
    };
    
    $scope._renderPlayer = function() {
        $scope.players.push({
          name: $scope.newPlayer.name, 
          rank: $scope.players.length + 1
        })
    };

    $scope._postPlayer = function() {
      if (!$.isEmptyObject($scope.newPlayer)) {
        var player = new Player();
        player.name = $scope.newPlayer.name;
        player.rank = $scope.players.length
        player.$save();
      }
    };

    $scope.updateLadder = function() {
      console.log($scope.formData.winner)
      console.log($scope.formData.loser)
    };




  });

