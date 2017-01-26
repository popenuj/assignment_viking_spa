var VikingStore  = angular.module("VikingStore", []);

VikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);
