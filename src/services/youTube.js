angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (options, cb) => {
      console.log(options)
      $http.get('https://www.googleapis.com/youtube/v3/search', {params: {
        part: 'snippet',
        key: options.key,
        q: options.query,
        type: 'video',
        videoEmbeddable: 'true',
        maxResults: options.max
      }}).then(function successCallback(response) {
        console.log('success', response);
        cb(response.data.items);
      }, function errorCallback(response) {
        console.log('error');
      });
    };
  });
