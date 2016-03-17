var app = angular.module("myApp", ['ngRoute'])

// app.controller('MyCtrl', function($scope){
//   $scope.expr= "Let's get in touch";
// });

app.config(function($routeProvider){
  $routeProvider
  .when('/touch', {
    templateUrl: 'touch.html'
  })
})
