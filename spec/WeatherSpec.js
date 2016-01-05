'use strict';

describe("Weather", function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    airport = jasmine.createSpy('airport');
    plane = jasmine.createSpy('plane');
    weather = new Weather();
  });

  it('gives stormy sometimes', function(){
    spyOn(weather, 'thunder').and.returnValue(true);
    expect(weather.thunder()).toBeTruthy();
  });
  it('gives stormy sometimes', function(){
    spyOn(weather, 'thunder').and.returnValue(false);
    expect(weather.thunder()).toBeFalsy();
  });

});
