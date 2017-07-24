console.log('client js sourced');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/message', {
    controller: 'MessageController as mc',
    templateUrl: 'views/templates/message.html'
  });
});
