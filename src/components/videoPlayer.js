angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      autoPlayString: '<'
    },
    controller: 'VideoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html'
  })
  .controller('VideoPlayerController', function () {
    //console.log(this, 'in videoPlayerjs');
    console.log('video', this);

    this.getUrl = function () {
      var url = this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` + this.autoPlayString : '';
      console.log(url, 'url in videoPlayer');
      return url;
    };
  });

