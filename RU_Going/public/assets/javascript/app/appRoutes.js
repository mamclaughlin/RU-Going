angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/school', {
            templateUrl: 'school.html',
            controller: 'SchoolController'
        });

    $locationProvider.html5Mode(true);

}]);
