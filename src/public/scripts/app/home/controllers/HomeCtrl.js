var home = angular.module('home');

function HomeCtrl($scope) {
    $scope.homeing = 'home';
    console.log("homeing", $scope.homeing);
    $scope.message = 'This is a very important message!';
}

home.controller('HomeCtrl', ['$scope', HomeCtrl]);
