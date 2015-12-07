// Create app
var page2App = angular.module('page2App', ['ui.router'])
	// Configure route provider
	.config(function($stateProvider) { $stateProvider
		.state('atwork', {
			url:'/atwork',
			templateUrl: 'templates/atwork.html',
			controller: 'atworkController',
		})
		.state('comed', {
			url:'/community_education',
			templateUrl: 'templates/comed.html',
			controller: 'ComEdController',
		})
		.state('HC', {
			url:'/healthcenters',
			templateUrl: 'templates/healthcenters.html',
			controller: 'HCController',
		})

	})

	// About page controller: define $scope.about as a string
	.controller('atworkController', function($scope){
		$scope.AtWork = "info";
	})

	// Content controller: define $scope.url as an image
	.controller('ComEdController', function($scope){
	    $scope.ComEd= "info";
	})

	.controller('HCController', function($scope){
		$scope.HC = "info";
	})


