(function() {
  'use strict';
  angular
    .module('store')
    .controller('StoreController', function ($scope, $rootScope, StoreService, $location, $routeParams) {

      StoreService.getItems().then(function (items) {
        $scope.items = items;
      });

      StoreService.getItem($routeParams.itemId).then(function (item) {
          $scope.item = item;
        });
    })
}());
