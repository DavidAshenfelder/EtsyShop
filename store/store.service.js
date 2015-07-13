(function() {
  'use strict';
  angular
  .module('store')
  .factory('StoreService', function ($http, _, moment, $rootScope, $q, $cacheFactory) {
      var cacheEngine = $cacheFactory('AwesomeItems')
      var urlOpts = {
        baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=Images&fields=listing_id,title,price,views,url,materials,tags,currency_code,description',
        apiKey: '0jkgdw94ddo75o3hfkoi7stk',
        callback: '&callback=JSON_CALLBACK',
        format: "jsonp",
        // keywords: $rootScope.search, '&keywords=' + this.keywords +
        buildUrl: function () {
          //https://openapi.etsy.com/v2/listings/active.js?includes=Images:1:0&fields=listing_id,title,price,views,url,materials,tags,currency_code,description&callback=JSON_CALLBACK&api_key=0jkgdw94ddo75o3hfkoi7stk
          //GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}
          // url example
          return this.baseUrl + "&format=" + this.format + '&keywords=wood' + '&api_key=' + this.apiKey + this.callback;
        }
      };

      var getItems = function () {
        var deferred = $q.defer();
        var cache = cacheEngine.get('items')
        if (cache) {
          console.log('we are in cache');
          deferred.resolve(cache)
        } else {
           $http.jsonp(urlOpts.buildUrl()).then(function (items) {
             var etsyArray = items.data.results;
             console.log('in http method');
             cacheEngine.put('items', etsyArray);
              deferred.resolve(etsyArray);
         })
        }
        return deferred.promise;
      };

      var getItem = function (id) {
        var deferred = $q.defer()
        var cache = cacheEngine.get('item')
        if (cache) {
          console.log("we're in the cache!");
          defered.resolve(cache)
        } else {
          $http.jsonp(urlOpts.buildUrl()).then(function (items) {
            console.log("http method");
           var narrowedDownArr = _.where(items.data.results, {listing_id:Number(id)});
             deferred.resolve(narrowedDownArr[0]);
         });
        }
        return deferred.promise;
      };

      return {
        getItems: getItems,
        getItem: getItem
      };
  })
}());
