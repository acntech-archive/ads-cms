'use strict';

var adsCmsFrontendApp = angular.module('adsCmsFrontendApp',
  [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/mediaplayer', {
        templateUrl: 'views/mediaplayer.html',
        controller: 'MediaplayerCtrl'
      })
      .when('/twitter', {
        templateUrl: 'views/twitter.html',
        controller: 'TwitterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
