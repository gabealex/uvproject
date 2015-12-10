var page1App = angular.module('page1App', ['ui.router'])

// Config route provider
.config(function($stateProvider) { $stateProvider
	.state('landing', {
		url:'/',
		templateUrl: 'templates/overview.html',
		controller: 'missionCtrl',
	})
	.state('mission', {
		url:'/mission',
		templateUrl: 'templates/ourMission.html',
		controller: 'missionCtrl',
	})
	.state('exec', {
		url:'/exec',
		templateUrl: 'templates/executiveBoard.html',
		controller: 'execCtrl',
	})
	.state('staff', {
		url:'/staff',
		templateUrl: 'templates/staff.html',
		controller: 'staffCtrl',
	})
	.state('taskForces', {
		url:'/task',
		templateUrl: 'templates/taskForces.html',
		controller: 'taskForcesCtrl',
	})
	.state('partners', {
		url:'/partners',
		templateUrl: 'templates/partners.html',
		controller: 'partnersCtrl',
	})
	.state('reports', {
		url:'/reports',
		templateUrl: 'templates/reports.html',
		controller: 'reportsCtrl',
	})
	.state('contact', {
		url:'/contact',
		templateUrl: 'templates/contact.html',
		controller: 'contactCtrl',
	})
})

.controller('missionCtrl', function($scope){
	
})
.controller('execCtrl', function($scope){
	
})
.controller('staffCtrl', function($scope){
	
})
.controller('taskForcesCtrl', function($scope){
	
})
.controller('partnersCtrl', function($scope){
	
})
.controller('reportsCtrl', function($scope){
	
})
.controller('contactCtrl', function($scope){
	
})