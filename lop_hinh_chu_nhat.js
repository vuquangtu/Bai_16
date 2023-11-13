function Rectangle(length, width) {
  this.length = length;
  this.width = width;

  this.getArea = function () {
    return this.length * this.width;
  };

  this.getPerimeter = function () {
    return 2 * (this.length + this.width);
  };
}
let rectangle = new Rectangle(300, 200);
function drawRegtangle() {
  let context = document.getElementById("myCanvas").getContext("2d");

  context.fillStyle = "red";

  context.fillRect(100, 50, rectangle.length, rectangle.width);
}
drawRegtangle();
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
