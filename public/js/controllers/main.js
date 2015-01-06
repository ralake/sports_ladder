angular.module("playerController", [])

  .controller('mainController', function($scope, $http, Players) {

    $scope.formData = {};

    Players.get()
      .success(function(data) {
        $scope.players = data;
      })

    $scope.createPlayer = function() {
      if (!$.isEmptyObject($scope.formData)) {
        Players.create($scope.formData)
        .success(function(data) {
          $scope.formData = {};
          $scope.players = data;
        });
      }
    };

  });
