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

const arrayList = document.createElement("ul");

// for loop (for arrays)
for (let i = 0; i < arrayList.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = array[i];
  arrayList.append(listItem);
}
// for of loop (for arrays)
for (const item of array) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  arrayList.append(listItem);
}
// for each loop (for arrays)
array.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  arrayList.append(listItem);
});
// for in loop for (objects)
for (const singleObject in nestedObjects) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `"Name:"${nestedObjects[singleObject].name}`;
  arrayList.append(listItem);
}
document.body.append(arrayList);
