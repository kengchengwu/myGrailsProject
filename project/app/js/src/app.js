'use strict';

/* App Module */

var phonecatApp = angular.module('bookStoreApp', [
  'ngRoute',
  'bookStoreControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/books', {
        templateUrl: 'view/book-list.html',
        controller: 'BookListCtrl'
      }).
      when('/books/:bookId', {
        templateUrl: 'view/book-detail.html',
        controller: 'BookDetailCtrl'
      }).
      otherwise({
        redirectTo: '/books'
      });
  }]);
