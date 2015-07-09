(function() {
  'use strict';
  angular
    .module('store')
    .controller('StoreController', function ($scope, $rootScope, StoreService, $location, $routeParams) {


      StoreService.getItems().then(function (items) {
        $scope.items = items;
      });
      if ($routeParams.itemId) {
        StoreService.getItem($routeParams.itemId).then(function (item) {
          $scope.item = item;
          console.log($routeParams.itemId);
        });
      }

      $scope.expandItem = function(item) {
        console.log(this.item.id);
      }
    })
}());
