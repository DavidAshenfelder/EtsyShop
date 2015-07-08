(function () {
  'use strict';
  angular
    .module('EtsyShop')
    .controller('MainController', function ($scope, $rootScope, ItemService, $location, $routeParams) {

      $scope.goToCart = function() {
         $location.path('/cart')
      }

      $rootScope.cart = function() {

      }

      ItemService.getItems().then(function (items) {
        $scope.items = items;
      });
      ItemService.getItem($routeParams.itemId).then(function (item) {
        $scope.item = item;
      });

    })

    .controller('LikesController', function ($scope, LikesService, $routeParams) {

      LikesService.getLikes().success(function (likes) {
        $scope.likes = likes;
        console.log(likes);
      });

      LikesService.getLike($routeParams.likeId).then(function (like) {
        $scope.like = like;
        console.log(like);
      });

      $scope.addLike = function (item) {
        LikesService.addLike(item);
      };


    });


})();
