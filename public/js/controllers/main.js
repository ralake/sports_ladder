angular.module("playerController", ["ngResource"])

  .controller('mainController', function($scope, Player) {

    $scope.players = Player.query();

    $scope.createPlayer = function() {
      if ($scope.newPlayer != {}) {
        $scope._renderPlayer(function() {
          $scope._postPlayer();
        });
      };
      $scope.newPlayer = {};  
    };

    $scope.newPlayerRank = function() {
      return $scope.players.length + 1;
    };
    
    $scope._renderPlayer = function(callback) {
      $scope.players.push({
        name: $scope.newPlayer.name, 
        rank: $scope.players.length + 1
      })
      callback();
    };

    $scope._postPlayer = function() {
      var player = new Player();
      player.name = $scope.newPlayer.name;
      player.rank = $scope.players.length
      player.$save();
    };

    $scope.updateLadder = function() {
      var winnerRank = $scope.winner.rank;
      var loserRank = $scope.loser.rank;
      $scope._swapViewRanks(loserRank, winnerRank);
      $scope._swapDbRanks(loserRank, winnerRank);
    };

    $scope.evaluateResult = function() {
      if ($scope.winner.rank < $scope.loser.rank) {
      } else {
      }
    };

    $scope._swapViewRanks = function(loserRank, winnerRank) {
      $scope.winner.rank = loserRank;
      $scope.loser.rank = winnerRank;
    };

    $scope._updatePlayerRank = function(playerID, updatedRank) {
      Player.update({ id: playerID }, { newRank: updatedRank });
    };


    $scope._swapDbRanks = function(loserRank, winnerRank) {
      Player.query(function() {
        $scope._updatePlayerRank($scope.loser._id, winnerRank);
        $scope._updatePlayerRank($scope.winner._id, loserRank);
      });
    };

  });

