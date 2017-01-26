var VikingStore = angular.module("VikingStore", ['ui.router']);

VikingStore.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/products.index');

  $stateProvider
    .state('products', {
      url: '/products',
      abstract: true,
      template: '<div ui-view>here</div>'
    })
    .state('products.index', {
      url: '',
      templateUrl: '/js/templates/products/index.html',
      controller: 'ProductsIndexCtrl',
      resolve: {
        products: function(productService) {
          return productService.get();
        },
        categories: function(categoryService) {
          return categoryService.get();
        }
      }
    })
    .state('products.show', {
      url: '/:id',
      templateUrl: '/js/templates/products/show.html',
      controller: 'ProductsShowCtrl',
      resolve: {
        product: function($stateParams, productService) {
          return productService.getById($stateParams.id);
        }
      }
    });

});

VikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);
