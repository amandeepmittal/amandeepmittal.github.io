var app = angular.module('myblogapp', ['ngRoute'])


// Configuration-Routing
app.config(function($routeProvider){
  $routeProvider
    .when("/",{
      templateUrl:'home.html'
    })
    .when("/about",{
      templateUrl: 'about.html'
    })
    .when("/blog", {
      templateUrl: 'blog.html'
    })
});
