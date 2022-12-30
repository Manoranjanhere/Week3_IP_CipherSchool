// Function declarations
function myFunction(b = 13, c = 18) {
  let a = b + c;
  return a;
}
console.log(myFunction(13, 18));

// Function Expressions
const mySecondFunction = function (b = 13, c = 18) {
  let a = b + c;
  return a;
};
console.log(mySecondFunction());

// Immediately Invoked Function Expression
(function () {
  let b = 13;
  let c = 18;
  let a = b + c;
  console.log("The sum is :", a);
});
