angular.module('video-player')

  .component('search', {
    bindings: {
      handleSearchClick: '<',
      handleInputChange: '<',
      searchInput: '<'
    },
    templateUrl: 'src/templates/search.html',
    controller: function() {
      // console.log(this, 'IN SEARCH');
      // this.handleInputChange =  _.debounce(this.handleSearchClick, 500);
    }
  });
