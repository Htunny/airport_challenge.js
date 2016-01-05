'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    spyOn(airport.weather, "thunder").and.returnValue(false);
  });

describe('under normal conditions', function(){
      beforeEach(function(){
      })
  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('planes can be instructed to takeoff', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
});

describe('under stormy conditions',function(){
  var airport2
  beforeEach(function(){
    airport2 = new Airport();
    spyOn(airport2.weather, "thunder").and.returnValue(true);
  });
});

  it('stops a plane taking off in stormy weather', function(){
    expect(function(){airport.clearForTakeOff(plane);}).toThrowError("Plane cannot take off - Weather is stormy");
  });
  it('stops a plane landing in stormy weather', function(){
    expect(function(){airport.clearForLanding(plane);}).toThrowError("Plane cannot land - Weather is stormy");
  });
});
});
