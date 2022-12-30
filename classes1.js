import pencilBox from ".pencilBox1.js";
const newPencilBox = new pencilBox(
  "Pencil Box",
  30,
  "red",
  12,
  12,
  24,
  false,
  "2020-05,1 00:00:00"
);

console.log("The Pencil box Object:", newPencilBox);
console.log("Size:", newPencilBox.size);
console.log("Date Purchased:", newPencilBox.datePurchased);
console.log("Date Purchased:", newPencilBox.pencilBoxAge());
