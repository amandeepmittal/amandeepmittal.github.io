var app = angular.module('myblogapp', ['ngRoute'])


// Congiguration-Routing
app.config(function($routeProvider){
  $routeProvider
    .when("/about",{
      templateUrl: 'about.html'
    })
});
