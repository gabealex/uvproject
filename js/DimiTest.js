var myTestApp = angular.module("myTestApp", ['firebase'])
    .controller("internshipFAQController", function($scope, $firebaseArray, $firebaseObject) {
        var ref = new Firebase("https://internshipfaq.firebaseio.com/");

        var answersRef = ref.child('0');
        $scope.answer = "";
        // Create a firebaseArray of your tweets, and store this as part of $scope
        $scope.answers = $firebaseArray(answersRef);
        $scope.goDown = 5;


        // Create a firebaseObject of your users, and store this as part of $scope
        $scope.answers = $firebaseArray(answersRef);


        $scope.showAnswer = function(numOfAnswer) {
            $scope.word = $scope.answers[numOfAnswer].text;

            var range = [];
            for(var i=0;i<numOfAnswer;i++) {
                range.push(i);
            }
            $scope.range = range;
            $scope.goDown = numOfAnswer;
            //$scope.answer = answers[numOfAnswer];

        }
    }
);

