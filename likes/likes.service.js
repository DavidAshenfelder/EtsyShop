(function() {
  'use strict';
  angular
  .module('likes')
  .factory('LikesService', function ($http,$rootScope) {
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/etsyshop2';
    var addLike = function (item) {
      $http.post(url, item).success(function (resp) {
        console.log(resp);
      }).error(function (err) {
        console.log(err);
      });
    };
    var getLikes = function () {
      return $http.get(url);
    };

    var getLike = function (id) {
      return $http.get(url + '/' + id)
    }

    return {
      addLike: addLike,
      getLikes: getLikes,
      getLike: getLike
    };
  });
}());
