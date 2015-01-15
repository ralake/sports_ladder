angular.module("SportsLadder")
  .filter('rank', function() {
    return function( items, rank ) {
      var range = items.length / 4; 
      var filtered = [];
      angular.forEach(items, function(item) {
        if(item.rank >= rank - range && item.rank <= rank + range ) {
           filtered.push(item);
        }
      });
    return filtered;
    };
  });