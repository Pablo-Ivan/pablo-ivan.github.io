var websiteApp = angular.module('principal', ['ngStorage']);
websiteApp.controller('MainCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage.$default({ nombre: '', edad: '', correo: ''});
});

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
