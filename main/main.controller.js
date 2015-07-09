(function () {
  'use strict';
  angular
    .module('EtsyShop')
    .controller('MainController', function ($scope, $routeParams, $rootScope, $location) {
      $rootScope.newSearch = function(){
        $rootScope.search = $scope.search
      }
      $rootScope.goToCart = function() {
         $location.path('/cart')
      }
  })
})();
