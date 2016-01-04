var planes = [];

function airport() {

airport.prototype.land = function(plane) {
  if (this.landing(plane)) {
    return [plane];
  }
  }
}

airport.prototype.landing = function(plane) {
  return (planes).push(plane);
  }

function plane() {
  }






// function FizzBuzz() {
// }
//
// FizzBuzz.prototype.play = function(number) {
//   if (this.isDivisibleBy(15, number)) {
//     return 'FizzBuzz';
//   }
//   if (this.isDivisibleBy(5, number)) {
//     return 'Buzz';
//   }
//   if (this.isDivisibleBy(3, number)) {
//     return 'Fizz';
//   }
//   return number;
// }
//
// FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
//   return number % divisor === 0;
