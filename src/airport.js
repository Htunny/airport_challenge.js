'use strict';

function Airport(){
  this.weather = new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){ return this._hangar; };
Airport.prototype.clearForLanding = function(plane) {
  if(this.weather.thunder() === true) throw new Error("Plane cannot land - Weather is stormy");
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane) {
  if(this.weather.thunder() === true) throw new Error("Plane cannot take off - Weather is stormy");
  else(this._hangar = []);
};
Airport.prototype.isStormy = function(){
  // return Math.random() >= 0.9;
  false
};
