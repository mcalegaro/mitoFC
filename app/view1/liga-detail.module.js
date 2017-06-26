angular.module('ligaDetail', [
  'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/liga/:slug', {
      templateUrl: 'view1/liga-detail.html',
      controller: 'View1Ctrl'
    });
  }])
;