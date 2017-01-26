var VikingStore = angular.module("VikingStore", ['ui.router']);

VikingStore.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('default', {
      url: '/',
      template: 'This is the Home page.',
    })
    .state('products', {
      url: '/products',
      templateUrl: '/js/templates/products.html',
      controller: 'ProductsIndexCtrl',
      resolve: {
        products: ["productService", function(productService) {
          return productService.get();
        }]
      }
    });
    // .state('product', {
    //   url: '/product',
    //   templateUrl: '/js/templates/product.html',
    //   controller: 'ProductShowCtrl',
    //   resolve: {
    //     products: function(productService) {
    //       return productService.getOne();
    //     }
    //   }
    // });
    //
    // // controller
    // VikingStore.controller('ProductsCtrl', ['$scope', 'products', function($scope, produts) {
    //   $scope.products = products;
    // }]);
    //
    // VikingStore.controller('ProductShowCtrl', ['$scope', 'product', function() {
    //   $scope.product = product;
    // }]);

});

VikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);
