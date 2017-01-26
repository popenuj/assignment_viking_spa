VikingStore.controller("ProductsShowCtrl",
  ['$scope', 'product',
    function($scope, product) {
      $scope.product = product;
    }
  ]
);
