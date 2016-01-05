describe("airport", function() {

  beforeEach(function() {
    airport = new airport();
    });

describe('#landing', function() {
  it('lands a plane at the airport', function() {
     expect(airport.land(plane)).toEqual([plane])
  });

  // it("lands plane with 1 argument", function() {
  //   expect(airport.land(plane)).toHaveBeenCalledWith(plane);
  // });
});
});
