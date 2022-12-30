const array = ["book", "pen", "coffee", "code"];
const nestedObjects = {
  item1: {
    name: "book",
    weight: 30,
  },
  item2: {
    name: "pen",
    weight: 10,
  },
  item3: {
    name: "coffee",
    weight: 20,
  },
  item4: {
    name: "code",
    weight: 0,
  },
};
// map() method (for arrays)
const listItems = array.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

listItems.forEach((item) => {
  arrayList.append(item);
});

const arrayList = document.createElement("ul");
document.body.append(arrayList);
