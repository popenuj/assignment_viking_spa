VikingStore.factory('productService', ['$http', function($http) {

  var _products = [];

  var _product;

  var getProducts = function getProducts() {
    return $http.get('/data/products.json').then(function(response) {
      angular.copy(response.data, _products);
      return _products;
    });
  };

  var getProductById = function getProductById(id) {
    return $http.get('/data/products.json').then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].productId === +id) {
          _product = response.data[i];
        }
      }
      return _product;
    });
  };

  return {
    get: getProducts,
    getById: getProductById
  };
}]);
