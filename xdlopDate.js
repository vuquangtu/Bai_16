let myDate = function (day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.getDay = function () {
    return this.day;
  };
  this.getMoth = function () {
    return this.month;
  };
  this.getYear = function () {
    return this.year;
  };
  this.setDay = function (day) {
    return (this.day = day);
  };
  this.setMonth = function (month) {
    return this.month;
  };
  this.setYear = function (year) {
    return (this.year = year);
  };
};
let a = new myDate(2, 8, 2023);
console.log(a);
let b = a.setDay(10);
console.log(b);
