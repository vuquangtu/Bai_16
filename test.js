// function Student(id, name, address) {
//   this.id = id;
//   this.name = name;
//   this.address = address;
//   this.getInfor = function () {
//     return "id=" + this.id + " name " + this.name + " Address " + this.address;
//   };
// }
// let student = new Student(1, "Nguyễn văn a", "hà nội");
// console.log(student.getInfor());

// let myInfo = {
//   name: "tuvu",
//   age: "37",
//   address: "tp hcm",
//   getInfo: function () {
//     return "tuoi là " + this.age;
//   },
// };

// console.log(typeof myInfo.getInfo());

// function User(firstName, lastName, avatar) {
//   this.Name = firstName;
//   this.lastName = lastName;
//   this.avatar = avatar;
// }
// let author = new User("tu", "vu", "avatar");
// let user = new User("son", "dang", "avatr");

// User.prototype.getClass = function () {
//   return this.avatar;
// };

// console.log(author.getClass());

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// let c = document.getElementById("myCanvas");
// let ctx = c.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(200, 100);
// ctx.stroke();

// let c = document.getElementById("myCanvas");
// let context = c.getContext("2d");
// // context.moveTo(0, 0);

// // context.lineTo(200, 100);

// // context.stroke();
// context.beginPath();
// context.arc(50, 50, 40, 0, 2 * Math.PI);
// context.stroke();

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// // ctx.beginPath();
// // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// // ctx.stroke();
// let c = document.getElementById("myCanvas");
// let context = c.getContext("2d");

// // context.beginPath();
// // context.arc(95, 50, 40, 0, 2 * Math.PI);
// // context.stroke();
// context.font = "50px sans-serif";
// context.fillText("hello", 10, 50);

let chuoi = "hello world";
console.log(chuoi.charAt(6));
