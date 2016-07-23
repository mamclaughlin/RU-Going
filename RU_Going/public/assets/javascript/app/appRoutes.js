app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/school', {
            templateUrl: '../app/javascript/school.html',
        });

       

    $locationProvider.html5Mode(true);

}]);