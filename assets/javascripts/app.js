var app = angular.module('myblogapp', ['ngRoute'])

// Controllers



// Configuration-Routing
app.config(function($routeProvider){
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
    })
    // .when("/blog", {
    //   templateUrl: 'blog.html'
    // })
});
