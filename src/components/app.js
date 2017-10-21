angular.module('video-player')

  .component('app', {
    bindings: {
      name: '@'
    },
    controller: 'AppController',
    templateUrl: 'src/templates/app.html'
  })
  .controller('AppController', function() {
    this.videos = window.exampleVideoData;
    this.currentVid = this.videos[0];
    this.handleTitleClick = (video) => {
      console.log(video);
      this.currentVid = video;
      console.log(this.currentVid, 'curreentVid');
      //this.currentVid = video;
    //this.handleTitleClick = this.handleTitleClick.bind(this);
    };
  });