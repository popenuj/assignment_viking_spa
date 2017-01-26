VikingStore.controller("ProductsIndexCtrl",
  ['$scope', 'products', 'categories',
    function($scope, products, categories) {
      $scope.products = products;
      $scope.categories = categories;
    }
  ]
);
