(function() {
  'use strict';

  angular
  .module('EtsyShop', [
    'ngRoute',
    'underscore',
    'moment',
    'cart',
    'likes',
    'store',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/views/homeSearch.html',
        controller: 'MainController'
      })
      .when('/404', {
        templateUrl: 'main/views/error.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });

  angular
   .module('underscore', [])
   .factory('_', function ($window) {
     return $window._;
   });

 angular
   .module('moment', [])
   .factory('moment', function ($window) {
     return $window.moment;
   });
}());
