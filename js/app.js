
// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
		$stateProvider
		.state('atwork', {
			url:'../templates/atwork',
			templateUrl: '../templates/atwork.html',
			controller: 'atworkController',
		})

		$stateProvider
		.state('comed', {
			url:'/community_education',
			templateUrl: '../templates/HV/comed.html',
			controller: 'ComEdController',
		})

		$stateProvider
		.state('HC', {
			url:'/healthcenters',
			templateUrl: '../templates/HV/healthcenters.html',
			controller: 'HCController',
		})

})

	// About page controller: define $scope.about as a string

		myApp.controller('atworkController', function($scope){
			$scope.AtWork = "info"
		})

	// Content controller: define $scope.url as an image
		myApp.controller('ComEdController', function($scope){
		    $scope.ComEd= "info"
		})

		myApp.controller('HCController', function($scope){
			$scope.HC = "info"
		})


