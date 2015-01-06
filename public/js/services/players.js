angular.module("playerService", [])
  .factory('Players', function($http) {
    return {
      get : function() {
        return $http.get('/api/players');
      },
      create : function(playerData) {
        return $http.post('/api/players', playerData);
      }
    }
  });
