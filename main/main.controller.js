(function () {
  'use strict';
  angular
    .module('EtsyShop')
    .controller('MainController', function ($scope, $routeParams, LikesService, $rootScope, CartService, $location) {

      CartService.getCart().success(function (cartItems) {
        $rootScope.cartItems = cartItems;
      });


      CartService.getCartItem($routeParams.cartItemId).then(function (cartItem) {
        $scope.cartItem = cartItem;
      });

      LikesService.getLikes().success(function (likes) {
        $scope.likes = likes;
      });

      LikesService.getLike($routeParams.likeId).success(function (like) {
        $scope.like = like;
      });

  })
})();
