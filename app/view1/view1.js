'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.ligas'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'Liga', 'LigaInfo', function (scope, Liga, LigaInfo) {
    scope.pesquisaLigas = function () {
      if (scope.nomeLiga != '') {
        this.ligas = Liga.query({
          nomeLiga: scope.nomeLiga
        });
      }
    }
    // $scope.abrirLiga = function (slugQuery) {
    //   $scope.liga = LigaInfo.query({
    //     slug: slugQuery
    //   });
    // }
  }])
  .directive('ngLiga', function () {
    return {
      restrict: 'A',
      templateUrl: 'view1/liga-item.html'
    }
  })
  .directive('ngUpDown', function () {
    return {
      restrict: 'A',
      templateUrl: 'view1/up-down.html'
    }
  });