'use strict';

describe('Service: cardManager', function () {

  // load the service's module
  beforeEach(module('unkemptApp'));

  // instantiate service
  var cardManager;
  beforeEach(inject(function (_cardManager_) {
    cardManager = _cardManager_;
  }));

  it('should do something', function () {
    expect(!!cardManager).toBe(true);
  });

});
