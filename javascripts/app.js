// AngularJS. Pablo Ivan G. Soto.
var app = angular.module('principal', ['ngStorage']);
app.controller('MainCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage;
});
