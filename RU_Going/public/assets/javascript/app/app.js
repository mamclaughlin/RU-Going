var app = angular.module('rugoingApp', ['ngRoute','appRoutes','ui.materialize']);

app.controller('ruGoingController', function($scope, $http) {
     $scope.sendData = function() {
     		 $http.post('/api/entries', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.entries = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
});
app.controller('schoolController', function($scope, $http) {
     
});