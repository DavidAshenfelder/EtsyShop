(function() {
  'use strict';
  angular
    .module('store')
    .controller('StoreController', function ($scope, $rootScope, StoreService, LikesService, $location, $routeParams) {
      
      StoreService.getItems().then(function (items) {
        $scope.items = items;
      });

      StoreService.getItem($routeParams.itemId).then(function (item) {
          $scope.item = item;
        });

        $scope.addLike = function (item) {
          LikesService.addLike(item).then(function(response) {
            $rootScope.$broadcast('like:added')
          })
        };
    })
}());
