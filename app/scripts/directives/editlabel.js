(function() { 'use strict';
  angular.module('unkemptApp')
    .directive('editLabel', function () {
      return {
        templateUrl: 'views/directives/edit-label.html',
        restrict: 'E',
        scope: {
          value: '='
        },
        link: function(scope, element, attrs) {
          scope.editing = true;
          console.log('link being called');
          console.log(attrs);
          //scope.value = attrs.value;
        }
      };
    });
}());


