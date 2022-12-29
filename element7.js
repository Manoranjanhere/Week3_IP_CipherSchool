//

let attribute = document.querySelector("img").attributes;
console.log(attribute);
let hasattribute = document.querySelector("img").hasAttribute("src");
console.log(hasattribute);
let getattribute = document.querySelector("img").getAttribute("border");
console.log(getattribute);
let setattribute = document
  .querySelector("img")
  .setAttribute("src", "/assets/1-plant.png");
console.log(setattribute);
let removeattribute = document
  .querySelector("img")
  .setAttribute("src", "/assets/1-plant.png");
console.log(removeattribute);
