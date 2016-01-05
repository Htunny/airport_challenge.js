'use strict';

function Weather(){
  Weather.prototype.thunder = function(){
    return Math.random() >= 0.9;
  };
};
