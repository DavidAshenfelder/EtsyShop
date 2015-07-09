(function() {
  'use strict';
  angular
  .module('cart')
  .factory('CartService', function($http, $rootScope) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/etsyshopcart';
    var addItemToCart = function (item) {
      $http.post(url, item).success(function (resp) {
        $rootScope.$broadcast('cartItem:added')
      }).error(function (err) {
        console.log(err);
      });
    };
    var getCart = function () {
      return $http.get(url);
    };

    var getCartItem = function (id) {
      return $http.get(url + '/' + id)
    }

    var deleteCartItem = function (id) {
      $http.delete(url + '/' + id).success(function(response) {
        $rootScope.$broadcast('cartItem:deleted')
      })
    }


    return {
      deleteItem: deleteCartItem,
      buyItem: addItemToCart,
      getCart: getCart,
      getCartItem: getCartItem
    };
  })
}());
