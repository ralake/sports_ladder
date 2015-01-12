angular.module("playerService", [])
  .factory('Player', function($resource) {
    return $resource('/api/players/:id', {}, {'save': {method: 'POST', isArray: true}} );
  });
