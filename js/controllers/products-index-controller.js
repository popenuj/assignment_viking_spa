VikingStore.controller("ProductsIndexCtrl",
  ['$scope', 'products',
    function($scope, products) {
      $scope.products = products;
    }
  ]
);
