(function() {
  'use strict';
  angular
  .module('cart')
  .controller('CartController', function ($scope, CartService, $routeParams, $rootScope, $location) {
    $rootScope.cartItems = []


    $rootScope.goToCart = function() {
       $location.path('/cart');
       CartService.getCart().success(function (cartItems) {
         $rootScope.cartItems = cartItems;
       });


       CartService.getCartItem($routeParams.cartItemId).then(function (cartItem) {
         $scope.cartItem = cartItem;
       });
    }

    $rootScope.cartNumber = function() {
      return $rootScope.cartItems.length
    }

    $scope.buyItem = function (item) {
      CartService.buyItem(item);
    };

    $scope.deleteItem = function(cartItem) {
      CartService.deleteItem(cartItem)
    };

    $scope.cartPriceTotal = function(cartItems) {

    }

    var watchCallback = function () {
      CartService.getCart().success(function (cartItems) {
        $rootScope.cartItems = cartItems;
      });
    }
    
    $scope.$on('cartItem:added', watchCallback);
    $scope.$on('cartItem:deleted', watchCallback);

  })
}());
