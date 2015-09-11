var app = angular.module('mgr', []);
angular.module('myApp', ['ngHamburger']);

app.controller('ClientController', function($scope, $http){
  // $scope.title = "mistermgr",
  // $scope.tagLine = "An easy way to stay on task with your client",
  // //$http.get, $hhtp.post, $http.delete, $http.put
  // $scope.api = '/clients'; //url to an api!
  $scope.api = '/clients'
  $scope.fetch = function(){
    $http.get($scope.api).success(function(data) {
      $scope.clients = data;
      console.log(data);
    });
  };
$scope.createClient = function(businessName,address,neighborhood,emailAddress,phone,plan,contactName,specialInstructions,date) {
  $http.post($scope.api, {businessName : businessName, address : address, neighborhood : neighborhood, emailAddress : emailAddress, phone : phone, plan : plan, contactName : contactName, specialInstructions : specialInstructions, date : date}).success(function(data,status) {
    $scope.fetch();
  });
};

$scope.delete = function(client) {
  console.log(client);
  var confirmDelete = confirm("Are you sure you want to delete " + client['businessName'] + '?');
  if (confirmDelete == true) {
  $http.delete($scope.api + '/' + client["_id"]);
  $scope.fetch();
  }
}
  $scope.fetch();
});
