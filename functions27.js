// Callback Functions
// A callback function is passsed as an argument to other function
function resultCalculator(result) {
  document.querySelector("main").innerHTML = result;
}

function calculation(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

calculation(5, 8, resultCalculator);
