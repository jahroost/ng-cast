angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: 'src/templates/videoListEntry.html',
    bindings: {
      video: '<',
      handleTitleClick: '<'
    },
    controller: function() {
      this.getVideo = function(video) {
        console.log(video, 'firsttime')
        var newVideo = this.video ? `${this.video}`  : this.getVideo();
        console.log(video, 'videooooo');
        console.log(this.video)
        return newVideo;
      };
      console.log(this, 'videoListEntry');
    }
  });
