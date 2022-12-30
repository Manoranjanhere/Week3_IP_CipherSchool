let a = 13;
let b = 13;
let c = 3.8;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

let result = a + b;
let result1 = a - b;
let result2 = a / b;
let result3 = a * b;
let result4 = (a * b) / 2;
let result5 = (a * b) / c;
let result6 = a % b;
let result7 = a ** b;
console.log("result:", result);
console.log("result1:", result1);
console.log("result2:", result2);
console.log("result3:", result3);
console.log("result4:", result4);
console.log("result5:", result5);
console.log("result6:", result6);
console.log("result7:", result7);
console.log("++a:", ++a);
console.log("--a:", --a);
console.log("++a:", ++a);

let d = 14;
let e = "18";
console.log("d+e:", d + e); //1418
console.log("d+e:", d - e); //-5
if (a > b) {
  console.log("Yes");
} else {
  console.log("No");
}
if (a >= b) {
  console.log("Yes");
} else {
  console.log("No");
}
if (a == b) {
  //Check is same, 1 and "1" --->true
  console.log("Yes");
} else {
  console.log("No");
}
if (a === b) {
  //Check is exaclty same, 1 and "1" --->false
  console.log("Yes");
} else {
  console.log("No");
}
if (a != b) {
  //1 and "1" --->false
  console.log("Yes");
} else {
  console.log("No");
}
if (a !== b) {
  //1 and "1" --->true
  console.log("Yes");
} else {
  console.log("No");
}
