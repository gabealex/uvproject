var my4App = angular.module("page4App", ['ui.router', 'firebase'])

.config(function($stateProvider) {
    $stateProvider
        .state('applyInternship', {
            url:'/applyInternship',
            templateUrl: 'templates/applyInternship.html',
            controller: 'HomeController',
        })
        .state('corporateInvolvement', {
            url:'/corporateInvolvement',
            templateUrl: 'templates/corporateInvolvement.html',
            controller: 'CorporateController',
        })
        .state('helpFundraise', {
            url:'/helpFundraise',
            templateUrl: 'templates/helpFundraise.html',
            controller: 'helpFundraiseController',
        })
        .state('internshipFAQ', {
            url:'/internshipFAQ',
            templateUrl: 'templates/internshipFAQ.html',
            controller: 'internshipFAQController',
        })
        .state('internshipInfo', {
            url:'/internshipInfo',
            templateUrl: 'templates/internshipInfo.html',
            controller: 'internshipInfoController',
        })
        .state('internshipTeamRoles', {
            url:'/internshipTeamRoles',
            templateUrl: 'templates/internshipTeamRoles.html',
            controller: 'internshipTeamRolesController',
        })
        .state('jobsVolunteerPositions', {
            url:'/jobsVolunteerPositions',
            templateUrl: 'templates/jobsVolunteerPositions.html',
            controller: 'jobsVolunteerPositionsController',
        })
})
    .controller("internshipFAQController", function($scope, $firebaseArray) {
        var ref = new Firebase("https://internshipfaq.firebaseio.com/0");
        $scope.answers = $firebaseArray(ref);
    }
);

