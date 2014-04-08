'use strict';

describe('Service: Cardmanager', function () {

  // load the service's module
  beforeEach(module('unkemptApp'));

  // instantiate service
  var Cardmanager;
  beforeEach(inject(function (_Cardmanager_) {
    Cardmanager = _Cardmanager_;
  }));

  it('should do something', function () {
    expect(!!Cardmanager).toBe(true);
  });

});
