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
      $scope._evaluateResult(loserRank, winnerRank);
      $scope._updateDbRanks(loserRank, winnerRank);
    };

    $scope._evaluateResult = function(loserRank, winnerRank) {
      if (winnerRank < loserRank) {
        
      } else {
        $scope.players.forEach(function(player) {
          if (player.rank >= loserRank && player.rank < winnerRank) {
            player.rank++
             
          }
        });
        $scope.winner.rank = loserRank
      }
    };

    $scope._swapViewRanks = function(loserRank, winnerRank) {
      $scope.winner.rank = loserRank;
      $scope.loser.rank = winnerRank;
    };

    $scope._updatePlayerRank = function(playerID, updatedRank) {
      Player.update({ id: playerID }, { newRank: updatedRank });
    };


    $scope._updateDbRanks = function(loserRank, winnerRank) {
      Player.query(function() {
        $scope.players.forEach(function(player) {
          if (player.rank >= loserRank && player.rank <= winnerRank) {
            $scope._updatePlayerRank(player._id, player.rank);           
          }
        });
      })
    }

  })






