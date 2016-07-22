//Then you must add the ngRoute as a dependency in the application module

var app = angular.module("myApp", ["ngRoute"]);

// Now your application has access to the route module, which provides the $routeProvider.
// Use the $routeProvider to configure different routes in your application:

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "index.html"
        })
        .when("/school", {
            templateUrl: "school.html"
        })
});
