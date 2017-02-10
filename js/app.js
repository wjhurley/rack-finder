var pedalApp = angular.module('pedalPals', ['ngMap']);

pedalApp.controller('bikeRack', ['$scope', '$http', function($scope, $http) {
  console.log('App loaded successfully');
  // $scope.address = { latitude: 47.5265, longitude: -122.315, default: '' };
  // $scope.map = { center: { latitude: 47.5265, longitude: -122.315 }, zoom: 15 };
  // $scope.zoom = 11;
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.$apply(function() {
        $scope.address = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
      });
    });
  } else {
    $scope.$apply(function() {
      $scope.address = {
        default: 'Seattle'
      };
    });
  }
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
  // console.log('Bike rack query loaded successfully');
  console.log($scope);

  $scope.mapZoom = function zoomMap() {
    $scope.zoom = 17;
  };

}]);
