var mgr = angular.module('mgr', []);

mgr.controller('clientCtrl', function($scope, $http){
  //$http.get, $hhtp.post, $http.delete, $http.put
  $scope.api = '/clients'; //url to an api!
  $scope.fetch = function(){
    $http.get($scope.api)/success
  }
})
