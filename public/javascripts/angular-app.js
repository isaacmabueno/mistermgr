var app = angular.module('mgr', []);

app.controller('ClientController', function($scope, $http){
  // $scope.title = "mistermgr",
  // $scope.tagLine = "An easy way to stay on task with your client",
  // //$http.get, $hhtp.post, $http.delete, $http.put
  // $scope.api = '/clients'; //url to an api!
  $scope.fetch = function(){
    $http.get('/clients').success(function(data) {
      $scope.clients = data;
      console.log(data);
    });
  };
$scope.createClient = function(businessName,address,neighborhood,emailAddress,phone,plan,contactName,specialInstructions) {
  $http.post("/clients/", {businessName : businessName, address : address, neighborhood : neighborhood, emailAddress : emailAddress, phone : phone, plan : plan, contactName : contactName, specialInstructions : specialInstructions}).success(function(data,status) {
    $scope.fetch();
  });
};

$scope.delete = function(client) {
  console.log(client);
  var confirmDelete = confirm("Are you sure you want to delete " + client['name' +'?']);
  if (confirmDelete == true) {
  $http.delete($scope.api + '/' + client["_id"]);
  $scope.fetch();
  }
}
  $scope.fetch();
});
