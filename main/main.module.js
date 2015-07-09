(function () {
  'use strict';
  angular
    .module('EtsyShop', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('', {
          templateUrl: '',
          controller: ''
        });
    });

})();
