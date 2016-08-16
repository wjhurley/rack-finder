var pedalApp = angular.module('pedalPals', ['ngMap']);


pedalApp.controller('bikeRack', ['$scope', '$http', function($scope, $http) {
  console.log('App loaded successfully')
  this.address = "Seattle";
// $scope.map = { center: { latitude: 47.6081, longitude: -122.338 }, zoom: 15 };
  $scope.zoom = 11;
  function getRacks() {
    $http.get('https://data.seattle.gov/resource/fxh3-tqdm.json?$select=rack_location', {

    })
    .then(function success(response) {
      console.log(response.data)
      $scope.racks = response.data
    }, function error(response) {
      console.log(response.data);
    });
  }
  getRacks();
  console.log('Bike rack query loaded successfully')


$scope.mapZoom = function zoomMap() {
  $scope.zoom = 17;
};

}]);