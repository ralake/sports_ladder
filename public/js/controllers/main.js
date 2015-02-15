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
        rank: $scope.players.length + 1,
        gamesWon: 0,
        gamesLost: 0, 
        gamesPlayed: 0, 
        _id: 0
      })
      callback();
    };

    $scope._postPlayer = function() {
      var player = new Player();
      player.name = $scope.newPlayer.name;
      player.rank = $scope.players.length;
      player.gamesWon = 0;
      player.gamesLost = 0;
      player.gamesPlayed = 0;
      player.$save(function(player){
        $scope.players[$scope.players.length - 1]._id = player._id
      });
    };

    $scope.updateLadder = function() {
      var winnerRank = $scope.winner.rank;
      var loserRank = $scope.loser.rank;
      $scope._evaluateResult(loserRank, winnerRank);
      $scope._updateDb(loserRank, winnerRank);
    };

    $scope._evaluateResult = function(loserRank, winnerRank) {
      $scope.winner.gamesWon++
      $scope.loser.gamesLost++
      $scope.winner.gamesPlayed++
      $scope.loser.gamesPlayed++
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

    $scope._updateDb = function(loserRank, winnerRank) {
      $scope.players.forEach(function(player) {
        if (player.rank >= loserRank && player.rank <= winnerRank) {
          $scope._updateDbPlayer(player);
        }
      });
    }

      $scope._updateDbPlayer = function(player) {
        Player.update({ id: player._id }, { newRank: player.rank,
                                            gamesWon: player.gamesWon,
                                            gamesLost: player.gamesLost,
                                            gamesPlayed: player.gamesPlayed});
      };


  })






