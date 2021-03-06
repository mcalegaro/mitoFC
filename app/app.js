'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.ligas',
  'ligaDetail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/liga/:slug', {
    template: '<liga-detail></liga-detail>'
  })
  .otherwise({redirectTo: '/view1'});
}]);
