var app = angular.module('myblogapp', ['ngRoute'])

// Controllers



// Configuration-Routing
app.config(function($routeProvider){
  $routeProvider
    .when("public/",{
      templateUrl:'home.html'
    })
    .when("public/about",{
      templateUrl: 'about.html'
    })
    .when("/public/article", {
      templateUrl: 'article.html'
    })
    // .when("/blog", {
    //   templateUrl: 'blog.html'
    // })
});
