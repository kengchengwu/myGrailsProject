'use strict';

/* Controllers */

var bookStoreControllers = angular.module('bookStoreControllers', []);

bookStoreControllers.controller('BookListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('bookStore/list').success(function(data) {
      console.log(data);
      $scope.books = data;
    });

    $scope.orderProp = 'age';
  }]);

bookStoreControllers.controller('BookDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.bookId = $routeParams.bookId;
  }]);
