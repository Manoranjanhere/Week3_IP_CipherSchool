// var (Global scoped variable)
var container = 13;
// console.log(container);
var container = "Blue";
console.log(container);

var x = 13,
  y = 18,
  z = 20;
console.log(x, y, z);

var contain;
console.log(contain);

// example
varbgColor = "green";
document.querySelector(".up-container").style.bachgroundColor = bgColor;
var bgColor()="pink";
document.querySelector(".down-container").style.bachgroundColor = bgColor;
function heading() {
  var bgColor = "blue";
  document.querySelector(".heading").style.color = bgColor;
}
heading();
var bgColor="blue";

// let
// Blocked Scope
var bgColor = "green";
document.querySelector(".up-container").style.bachgroundColor = bgColor;
// var bgColor()="pink";
// document.querySelector(".down-container").style.bachgroundColor = bgColor;
let color="pink"

// const
// Blocked shaped constant (similar to let)
const bgColor = "green";
document.querySelector(".up-container").style.bachgroundColor = bgColor;
// const bgColor()="pink";
// document.querySelector(".down-container").style.bachgroundColor = bgColor;