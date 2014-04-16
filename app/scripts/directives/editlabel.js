'use strict';

angular.module('unkemptApp')
  .directive('editLabel', function () {
    return {
      templateUrl: 'views/directives/edit-label.html',
      restrict: 'A',
      scope: {
        value: '='
      },
      replace: true
    };
  });
