var _ = require("lodash");

var css = document.querySelector("h3"); //test
var color1 = document.querySelector(".color1"); //test2
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");
var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue"); //test4
var c1Range = document.getElementById("color1Range");
var c2Range = document.getElementById("color2Range");

var deg = 90;
var c1RangeValue = 25;
var c2RangeValue = 75;
setGradient();

function setGradient() {
  body.style.background =
    "linear-gradient(" +
    deg +
    "deg," +
    color1.value +
    " " +
    c1RangeValue +
    "%" +
    ", " +
    color2.value +
    " " +
    c2RangeValue +
    "%)";

  css.textContent = body.style.background + ";";
}

function generateRandomColor() {
  var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  color1.value = "#" + randomColor1;
  color2.value = "#" + randomColor2;
  setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", generateRandomColor);

slider.oninput = function() {
  deg = this.value;
  setGradient();
};

c1Range.oninput = function() {
  c1RangeValue = this.value;

  setGradient();
};
c2Range.oninput = function() {
  c2RangeValue = this.value;
  setGradient();
};
