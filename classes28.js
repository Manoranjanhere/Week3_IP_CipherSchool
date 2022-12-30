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

const content = `
    <main>
        <ul>
            <li>Name: ${newPencilBox.name}</li>
            <li>Size: ${newPencilBox.size}</li>
            <li>Color: ${newPencilBox.color}</li>
            <li>Zip Length Left: ${newPencilBox.zipLength.left}</li>
            <li>Zip Length Right: ${newPencilBox.zipLength.right}</li>
            <li>Zip Length Top: ${newPencilBox.zipLength.top}</li>
            <li>Zip Status: ${
              newPencilBox.zipOpen ? "The zip is open" : "The zip is closed"
            }</li>
        </ul>
    </main>
`;

document.body.innerHTML = content;

console.log("The Pencil box Object:", newPencilBox);
console.log("Size:", newPencilBox.size);
console.log("Date Purchased:", newPencilBox.datePurchased);
console.log("Date Purchased:", newPencilBox.pencilBoxAge());

if (pencilBox.zipOpen === true) {
  console.log("Open");
} else {
  console.log("Close");
}
// Doing the above code in line 22

if (newPencilBox.zipOpen === true && newPencilBox.size === true) {
  console.log("Yes");
} else {
  console.log("No");
}

let size = 30;
let boxSize;
switch (true) {
  case size > 30:
    boxSize = "large";
    break;
  case size <= 30 && size >= 20:
    boxSize = "medium";
    break;
  case size <= 19 && size > 10:
    boxSize = "small";
    break;
}

console.log("Box Size:", size);
console.log("Status:", boxSize);
