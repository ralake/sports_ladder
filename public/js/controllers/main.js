angular.module("playerController", ["ngResource"])

  .controller('mainController', function($scope, Player) {

    $scope.formData = {};
    $scope.players = Player.query();

    $scope.createPlayer = function() {
      if (!$.isEmptyObject($scope.formData)) {
        var player = new Player();
        player.name = $scope.formData.name;
        player.rank = ($scope.players.length + 1);
        player.$save(player, function(){
          $scope.players.push(player);
        });
        $scope.formData = {}; 
      };
    };

  });
