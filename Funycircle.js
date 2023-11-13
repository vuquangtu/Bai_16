function Circle(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRamdomColor() {
  let red = getRandomHex();
  let green = getRandomHex();
  let blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function CreateCircle() {
  let context = document.getElementById("myCanvas").getContext("2d");

  //   let circle = new Circle(500, 500, 80);
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  let radius = Math.random() * 100;
  let color = getRamdomColor();
  console.log(color);
  //   console.log(context);
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = color;

  context.fill();
}

function call() {
  for (i = 0; i <= 30; i++) {
    CreateCircle();
  }
}
call();
