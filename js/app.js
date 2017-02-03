var pedalApp = angular.module('pedalPals', ['ngMap']);


pedalApp.controller('bikeRack', ['$scope', '$http', function($scope, $http) {
  console.log('App loaded successfully');
  this.address = "Seattle";
  // $scope.map = { center: { latitude: 47.6081, longitude: -122.338 }, zoom: 15 };
  $scope.zoom = 11;
  function getRacks() {
    var counter = 0;
    do {
      $http.get('https://data.seattle.gov/resource/fxh3-tqdm.json?$select=rack_location&$offset=' + counter + '&$$app_token=NzNXSZCVwuGsxlVKgeNTzczhe')
      .then(function success(response) {
        console.log(response.data);
        $scope.racks = response.data;
      }, function error(response) {
        console.log(response.data);
      });
      counter += 1000;
    } while(counter < 3000);
  }
  getRacks();
  console.log('Bike rack query loaded successfully');


  $scope.mapZoom = function zoomMap() {
    $scope.zoom = 17;
  };

}]);
