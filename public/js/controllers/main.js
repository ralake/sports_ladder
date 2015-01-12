angular.module("playerController", [])

  .controller('mainController', function($scope, $http, Players) {

    $scope.formData = {};

    Players.get()
      .success(function(data) {
        $scope.players = data;
      })

    $scope.createPlayer = function() {
      if (!$.isEmptyObject($scope.formData)) {
        $scope.formData.rank = ($scope.players.length + 1);
        Players.create($scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.players = data;
        });
      }
    };

    $scope.updateLadder = function() {
      if (!$.isEmptyObject($scope.formData)) {
        Players.update($scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.players = data;
        });
      }

    };

  });
