var home = angular.module('home');

function HomeCtrl($scope) {
    $scope.homeing = 'home';
    console.log("homeing", $scope.homeing);
    $scope.message = 'Everyone come and see how good I look!';
}

home.controller('HomeCtrl', ['$scope', HomeCtrl]);
