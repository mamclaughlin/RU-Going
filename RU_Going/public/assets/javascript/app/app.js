var app = angular.module('rugoingapp',['ngRoute']);

app.controller('SchoolController', function($scope, $http) {
        $http.get('https://inventory.data.gov/api/action/datastore_search')
            .success(function(data) {
            	console.log(data)
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});

