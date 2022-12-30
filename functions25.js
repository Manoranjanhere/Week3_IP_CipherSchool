// Standard Functions
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

const addPencilBox = function (currentPencilBox) {
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

document.body.append(addPencilBox(redPencilBox));
