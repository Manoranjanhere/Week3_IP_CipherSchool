const button = document.querySelection("button");
const container = document.querySelection(".container");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("Button is Clicked");
});

container.addEventListner("mouseenter", () => {
  container.classList.add("purple");
});

container.addEventListner("mouseleaave", () => {
  container.classList.remove("purple");
});
