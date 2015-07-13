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
        controller: 'StoreController',
        controllerAs: 'StoreCtrl'
      })
      .when('/store/:itemId', {
        templateUrl: 'store/views/detail.html',
        controller: 'StoreController',
        controllerAs: 'StoreCtrl'
      })
    });

})();
