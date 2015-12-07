<<<<<<< HEAD
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
			templateUrl: '../templates/comed.html',
			controller: 'ComEdController',
		})

		$stateProvider
		.state('HC', {
			url:'/healthcenters',
			templateUrl: '../templates/healthcenters.html',
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


//initialize landing page app here
var myApp = angular.module('myApp', ['ui.router'])
=======
var myApp = angular.module('myApp', ['ui.router'])
>>>>>>> 93ea2aa93a8531a35e3bbcd318f4ed185768ef9b
