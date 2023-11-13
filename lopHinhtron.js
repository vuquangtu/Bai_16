let Circle = function (radius) {
  this.radius = radius;

  this.getRadius = function () {
    return this.radius;
  };
  this.getArea = function () {
    let are = Math.PI * radius * radius;
    return are;
  };
};
let circle = new Circle(50);
console.log(circle.getRadius());

// let Circle = function (radius) {
//   this.radius = radius;

//   this.getRadius = function () {
//     return radius;
//   };
//   this.getArea = function () {
//     return Math.PI * radius * radius;
//   };
// };
// // let circle = new Circle(2);
// let Circle = function (radius) {
//   this.radius = radius;

//   this.getRadius = function () {
//     return radius;
//   };
//   this.getArea = function () {
//     return Math.PI * radius * radius;
//   };
// };
// let circle = new Circle(2);
// console.log(circle);
