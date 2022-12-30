// CLASS 15
// Properties are key value pairs separated by commas
const pencilbox = {
  name: "A Pencil Box",
  size: 30,
  color: "red",
  ziplength: {
    left: 12,
    right: 12,
    top: 24,
  },
  zipOpen: false,
  toggleZip: function (zipStatus) {
    this.zipOpen = zipStatus;
  },
};
// CLASS 16

console.log(pencilbox);
// Accessing properties by dot notation
console.log(pencilbox.color);
console.log(pencilbox.ziplength.left);
//Bracket notation, it's crunky but it is advance
console.log(pencilbox["size"]);

var sizeValue = "size"; //Returns value
// But if done in dot notation it will give error

// CLASS 17
console.log(pencilbox.toggleZip(true));

// We can change it inside function
