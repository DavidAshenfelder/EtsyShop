(function () {
  'use strict';
  angular
    .module('cart', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/cart', {
        templateUrl: 'cart/views/list.html',
        controller: 'CartController'
      })
    });

})();
