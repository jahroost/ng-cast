angular.module('video-player')

  .component('app', {
    bindings: {
      name: '@'
    },
    controller: 'AppController',
    templateUrl: 'src/templates/app.html'
  })
  .controller('AppController', function(youTube) {
    this.videos = [];
    this.currentVideo = null;
    this.searchService = youTube;
    this.handleTitleClick = (video) => {
      console.log(video);
      this.currentVideo = video;
      console.log(this.currentVideo, 'curreentVid');
      //this.currentVid = video;
    //this.handleTitleClick = this.handleTitleClick.bind(this);
    };
    this.handleSearchClick = (searchInput) => {
      console.log(searchInput, 'clicked in search');
      this.searchService.search({
        query: searchInput,
        max: 5,
        key: window.YOUTUBE_API_KEY
      }, (newVideos) => {
        this.videos = newVideos,
        this.currentVideo = newVideos[0];
      });
    };
    this.handleSearchClick('cats');
  });