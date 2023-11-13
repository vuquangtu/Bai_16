function Temperature(doC) {
  this.doC = doC;
  this.getDoF = function () {
    return this.doC * 1.8 + 32 + " độ F";
  };
  this.getDoK = function () {
    return this.doC + 273.15 + " độ K";
  };
}
let temperature = new Temperature(25);
document.getElementById("doF").innerText = temperature.getDoF();
document.getElementById("doK").innerText = temperature.getDoK();
