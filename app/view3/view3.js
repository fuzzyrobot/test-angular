'use strict';


(function() {
  var app = angular.module('myApp.view3', ['ngRoute', 'uiGmapgoogle-maps', 'n3-line-chart']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl'
    });
  }]);

  app.controller('View3Ctrl',[function(){
    this.tab=1;

    this.setTab = function(tabNum) {
      this.tab=tabNum;
    };
  
    this.plusTab = function() {
      this.tab++;
    };
  }]);

  app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  });

  app.controller("mapsAPI", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []
    $scope.map = { center: { latitude: 51.5033273, longitude: -0.1217317 }, zoom: 15 };
    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
  });

  app.controller("n3Chart", function($scope){

    $scope.data = [
      {x: 0, value: 4, otherValue: 14},
      {x: 1, value: 8, otherValue: 1},
      {x: 2, value: 15, otherValue: 11},
      {x: 3, value: 16, otherValue: 147},
      {x: 4, value: 23, otherValue: 87},
      {x: 5, value: 42, otherValue: 45}
    ];

    $scope.options = {
      axes: {
        x: {key: 'x', ticksFormat: '.2f', type: 'linear', min: 0, max: 5, ticks: 2},
        y: {type: 'linear', min: 0, max: 50, ticks: 5, innerTicks: true, grid: true},
        y2: {type: 'linear', min: 0, max: 150, ticks: 10}
      },
      margin: {
        left: 100
      },
      series: [
        {y: 'value', color: 'steelblue', thickness: '2px', type: 'area', striped: true, label: 'Pouet'},
        {y: 'otherValue', axis: 'y2', thickness: '3px', color: 'lightsteelblue', visible: true, drawDots: true, dotSize: 8}
      ],
      lineMode: 'linear',
      tension: 0.7,
      tooltip: {mode: 'scrubber', formatter: function(x, y, series) {return 'pouet';}},
      drawLegend: true,
      drawDots: true,
      hideOverflow: false,
      columnsHGap: 5
    };

  });

})();