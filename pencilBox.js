// we can also use this method to create a class
// name = const pencilBox = {...
const pencilBox = {
    constructor(
      name,
      size,
      color,
      ziplengthLeft,
      ziplengthRight,
      ziplengthTop,
      zipOpen
     ) {
      this.name = name;
      this.size = size;
      this.color = color;
      this.zipLength = {
        left: ziplengthLeft,
        right: ziplengthRight,
        top: ziplengthTop,
      };
      this.zipOpen=zipOpen;
    }
    toggleZip(zipStatus){
      this.zipOpen=zipStatus;
    }
  }
  
  export default pencilBox;
  
  