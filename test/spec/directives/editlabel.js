'use strict';

describe('Directive: editLabel', function () {

  // load the directive's module
  beforeEach(module('unkemptApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<edit-label></edit-label>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editLabel directive');
  }));
});
