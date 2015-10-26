'use strict';

(function() {
  var app = angular.module('myApp.view2', ['ngRoute', 'ui.bootstrap']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }]);

  app.controller('View2Ctrl', [function() {


  }]);

  app.controller('mainController', function($scope) {
  
    // BUTTONS ======================
    
    // define some random object and button values
    $scope.bigData = {};
    
    $scope.bigData.breakfast = false;
    $scope.bigData.lunch = true;
    $scope.bigData.dinner = false;
    
    // COLLAPSE =====================
    $scope.isCollapsed = false;
    
  });

})();