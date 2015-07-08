(function() {
  'use strict';

  angular
  .module('EtsyShop', [
    'ngRoute',
    'underscore',
    'moment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'MainController'
      })
      .when('/item/:id', {
        templateUrl: 'views/itemDetail.html',
        controller: 'LikesController'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'LikesController'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'MainController'
      })
      .when('/404', {
        template: '<h2>Sorry, page not found</h2>'
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
