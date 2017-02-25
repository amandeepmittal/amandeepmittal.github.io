var app = angular.module('myWebsite', ['ngRoute']);

// Controllers



// Configuration-Routing
app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when("/",{
      templateUrl:'home.html'
    })
    .when("/about",{
      templateUrl: 'about.html'
    })
    .when("/article", {
      templateUrl: 'article.html'
    })
    .when("/project", {
      templateUrl: 'project.html'
    });
    // .when("/blog", {
    //   templateUrl: 'blog.html'
    // })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});
