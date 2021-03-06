var myApp = angular.module('page3App', ['ui.router'])

.config(function($stateProvider) { $stateProvider
		.state('learn', {
			url:'/learnlusago',
			templateUrl: 'templates/wwwlearn.html',
			controller: 'learnController',
		})
		.state('press', {
			url:'/press',
			templateUrl: 'templates/wwwpress.html',
			controller: 'pressController',
		})
		.state('photo', {
			url:'/photo',
			templateUrl: 'templates/wwwphoto.html',
			controller: 'photoController',
		})

	})

	.controller('learnController', function($scope){
	})

	.controller('pressController', function($scope, $http){
		$http.get("press.json").success(function(response){
	    	$scope.press = response;
	    });
	})
	.controller('photoController', function($scope){
	})