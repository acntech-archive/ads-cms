'use strict';

describe('Service: mediaplayer', function () {

  // load the service's module
  beforeEach(module('adsCmsFrontendApp'));

  // instantiate service
  var mediaplayer;
  beforeEach(inject(function (_mediaplayer_) {
    mediaplayer = _mediaplayer_;
  }));

  it('should do something', function () {
    expect(!!mediaplayer).toBe(true);
  });

});
