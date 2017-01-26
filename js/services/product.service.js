VikingStore.factory('productService', ['$http', function($http) {

  var _products = [];

  var getProducts = function getProducts() {
    return $http.get('/data/products.json').then(function(response) {
      angular.copy(response.data, _products);
      return _products;
    });
  };

  return {
    get: getProducts
  };
}]);
