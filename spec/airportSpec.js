'use strict';

describe("Airport", function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    spyOn(airport.weather, "thunder").and.returnValue(false);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

describe('under normal conditions', function(){
    beforeEach(function(){
    });
  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
  it('can check if stormy', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
});

describe('under stormy conditions',function(){
  var airport2
  beforeEach(function(){
    airport2 = new Airport();
    spyOn(airport2.weather, "thunder").and.returnValue(true);
  });
  it('does not clear planes for takeoff', function(){
    // spyOn(weather, 'thunder').and.returnValue(true);
    expect(function(){airport2.clearForTakeOff(plane);}).toThrowError('Plane cannot take off - Weather is stormy');
  });
  it('does not clear planes for landing', function(){
    // spyOn(weather, 'thunder').and.returnValue(true);
    expect(function(){airport2.clearForLanding(plane);}).toThrowError('Plane cannot land - Weather is stormy');
  });
});
});
