VikingStore.factory("categoryService",
  ["$http",
    function($http) {
      var _categories = [];

      var getCategories = function getCategories() {
        return $http.get('/data/categories.json').then(function(response) {
          angular.copy(response.data, _categories);
          return _categories;
        });
      };

      return {
        get: getCategories
      }
    }
  ]
)
