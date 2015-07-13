(function() {
  'use strict';
  angular
    .module('store')
    .directive('EtsyShop', function() {
      return {
        restrict: 'E',
        templateUrl: 'store/views/listItem.html'
        scope: {
          item: '=',
        },
      };
    });
}());
