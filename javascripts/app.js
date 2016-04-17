// AngularJS. Pablo Ivan G. Soto.
  var app = angular.module('principal', ['ngStorage']);
  app.controller('MainCtrl', function($scope, $localStorage) {
    $scope.$storage = $localStorage.$default({ nombre: '', edad: '', correo: ''});
  });
//HTTPS
var host = "pablo-ivan.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
