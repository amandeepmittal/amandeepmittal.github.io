var app = angular.module('myblogapp', ['ngRoute'])


// Configuration-Routing
app.config(function($routeProvider){
  $routeProvider
    .when("/about",{
      templateUrl: 'about.html'
    })
});
