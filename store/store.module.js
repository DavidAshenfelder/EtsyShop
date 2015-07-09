(function () {
  'use strict';
  angular
    .module('store', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/store', {
        templateUrl: 'store/views/list.html',
        controller: 'StoreController'
      })
      .when('/store/:itemId', {
        templateUrl: 'store/views/detail.html',
        controller: 'StoreController'
      })
    });

})();
