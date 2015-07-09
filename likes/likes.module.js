(function () {
  'use strict';
  angular
    .module('likes', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
      .when('/favorites/:id', {
        templateUrl: 'store/views/detail.html',
        controller: 'LikesController'
      })
      .when('/favorites', {
        templateUrl: 'likes/views/list.html',
        controller: 'LikesController'
      })
    });

})();
