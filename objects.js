// CLASS 15

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
console.log(pencilbox);
