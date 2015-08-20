(function() {
  'use strict';
  angular
    .module('store')
    .directive('etsyItem', function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'store/views/listItem.html',
        scope: {
          item: '=',
        },
      };
    });
}());
