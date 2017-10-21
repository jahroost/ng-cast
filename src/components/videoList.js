angular.module('video-player')
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    bindings: {
      videos: '<',
      handleTitleClick: '<'
    },
    controller: function() {
       //this.videos = $ctrl.videos;
       console.log(this, 'videoList')
    }
  });
