angular.module('video-player')

  .component('search', {
    bindings: {
      handleSearchClick: '<'
    },
    templateUrl: 'src/templates/search.html',
    controller: function() {
      console.log(this, 'IN SEARCH');
    }
  });
