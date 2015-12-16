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

'use strict';

/* Controllers */

var bookStoreControllers = angular.module('bookStoreControllers', []);

bookStoreControllers.controller('BookListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('bookStore/list').success(function(data) {
      console.log("dddkk");
      console.log("watch data",data);
      $scope.books = data;
    });

    $scope.orderProp = 'age';
  }]);

bookStoreControllers.controller('BookDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.bookId = $routeParams.bookId;
  }]);


'use strict';

/* Filters */

'use strict';

/* Services */

