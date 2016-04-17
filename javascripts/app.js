// AngularJS. Pablo Ivan G. Soto. 2016.
var app = angular.module('principal', []);
app.controller('MainCtrl', function($scope) {
  $scope.nombre = '';
  $scope.edad = '';
  $scope.correo = '';
  localStorage.setItem("name", $scope.nombre);
  localStorage.setItem("lastname", $scope.edad);
  localStorage.getItem("name");
  localStorage.getItem("lastname");
});

//HTTPS
var host = "pablo-ivan.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
    window.location.protocol = "https";
}
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
