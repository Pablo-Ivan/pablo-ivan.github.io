/* 
AngularJS. Pablo Ivan G. Soto.
Likely to be removed in future versions where Web Components allow me the same functionality.
*/
  var app = angular.module('principal', ['ngStorage']);
  app.controller('MainCtrl', function($scope, $localStorage) {
    $scope.$storage = $localStorage.$default({ nombre: '', edad: '', correo: ''});
    $scope.visitas = 1;
    $scope.visitors = function() {
      $scope.visitas += 1;
    }
  });
//HTTPS
var host = "pablo-ivan.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
