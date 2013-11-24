'use strict';

var adsCmsFrontendApp = angular.module('adsCmsFrontendApp',
        [
            'ngRoute',
            'ngResource',
            'ngAnimate',
            'angularMoment',
            'blueimp.fileupload'
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
            .when('/sources/fileupload', {
                templateUrl: 'views/sources/fileupload.html',
                controller: 'FileUploadCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
