const redpencilBox = {
  name: "Red pencil Box",
  color: "red",
  size: 30,
};
const BluepencilBox = {
  name: "Blue pencil Box",
  color: "blue",
  size: 24,
};
// Arrow Function
const addPencilBox = (currentPencilBox) => {
  const newSection = document.createElement("section");
  newSection.innerHTML = `
          <h1>Name: ${currentPencilBox.name}</h1>
          <ul>
              <li>Color: ${currentPencilBox.color}</li>
              <li>Size:  ${currentPencilBox.size}</li>
          </ul>
    `;
  return newSection;
};

document.body.append(addPencilBox(redpencilBox));
document.body.append(addPencilBox(BluepencilBox));

const yellowpencilBox = {
  name: "Yellow pencil Box",
  color: "Yellow",
  size: 24,
  newSize: function (size) {
    console.log(this.size);
    this.size = size;
    console.log(this.size);
    (() => {
      console.log(this.size);
    })();
  },
};
console.log(yellowpencilBox.newSize(5));
