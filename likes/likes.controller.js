(function() {
  'use strict';
  angular
  .module('likes')
  .controller('LikesController', function ($scope, LikesService, $routeParams) {

    LikesService.getLikes().success(function (likes) {
      $scope.likes = likes;
    });

    LikesService.getLike($routeParams.likeId).then(function (like) {
      $scope.like = like;
    });

    $scope.addLike = function (item) {
      LikesService.addLike(item);
    };
  });
}());
