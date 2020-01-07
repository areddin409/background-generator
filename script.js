var css    = document.querySelector("h3");            //test
var color1 = document.querySelector(".color1");       //test2
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient");
var random = document.getElementById("random");
var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");  //test4
var deg    = 90;
setGradient();

function setGradient() {
  body.style.background = 
    "linear-gradient(" +
    deg +
    "deg," +
    color1.value +
    ", " +
    color2.value +
    ")";

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
