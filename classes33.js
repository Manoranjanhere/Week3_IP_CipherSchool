document.body.innerHTML = content;

/*Add Event Listeners*/
const button = document.querySelector("button");
const status = document.querySelector(".ststus");

button.addEventListner("click", () => {
  status.innerText === "The zip is open"
    ? (status.innerText = "The zip is closed")
    : (status.innerText = "the zip is open");

  button.innerText === "open the zip"
    ? (button.innerText = "close the zip")
    : (button.innerText = "open the zip");
});

console.log("The Pencil Box object:", newPencilBox);
console.log("Size:", newPencilBox.size);

console.log("Date Purchased:", newPencilBox.datePurchased);
console.log("Date Purchased:", newPencilBox.pencilBoxAge());
