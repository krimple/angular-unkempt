(function () {
  'use strict';

  angular.module('underscore', [])
    .factory('_', function() {
      return window._;
    });

  angular.module('unkemptApp', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'uuid4',
      'ui.bootstrap',
      'underscore'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

}());


