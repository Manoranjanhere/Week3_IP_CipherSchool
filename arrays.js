// Arrays in JS

let arrayItem = "book";

const books = ["pens", arrayItem, 4, true];

books[books.length] = "pencil";
books[13] = 3.8;

console.log(books[5]); //undefined

console.log(books);
console.log(books.length);
console.log(books[1]);

// Array Methods
let pencilBoxContents = ["pen", "pencil", "eraser"];

pencilBoxContents.push("sharpner"); //Add in Last of an array
pencilBoxContents.unshift("sharpner"); //Add in front of an array
pencilBoxContents.pop("sharpner"); //Last item of list popped out
pencilBoxContents.shift("sharpner"); //First item of list popped out

pencilBoxContents.foreach(function (item) {
  item = `<li>${item}</li>`;
  consolr.log(item);
});

let shortItems = pencilBoxContents.find(funtion (item){
    if(item.length <= 5){
        return item;
    }
});
console.log(shortItems);
console.log(pencilBoxContents.join("  |  "));
