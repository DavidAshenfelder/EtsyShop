(function() {
  'use strict';
  angular
  .module('likes')
  .controller('LikesController', function ($scope, $rootScope, LikesService, $routeParams) {

    $rootScope.loadLikes = function() {
      LikesService.getLikes().success(function (likes) {
        $scope.likes = likes;
      });

      LikesService.getLike($routeParams.likeId).success(function (like) {
        $scope.like = like;
      });
    };

    var watchCallback = function () {
      LikesService.getLikes.success(function (likes) {
        $rootScope.likes = likes;
      });
    };

    $scope.addLike = function (item) {
      LikesService.addLike(item).then(function(response) {
        $rootScope.$broadcast('like:added')
      })
    };

  });
}());
