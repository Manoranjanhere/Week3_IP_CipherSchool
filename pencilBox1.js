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
      zipOpen,
      datePurchased
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
      this.datePurchased=datePurchased;
    }
    toggleZip(zipStatus){
      this.zipOpen=zipStatus;
    }
    pencilBoxAge(){
        let now = new Date();
        let Purchased = new Date(this.datePurcahsed);
        let time = now - Purchased;
        let daysSincePurchased = math.floor(time/(1000*3600*24));
        return daysSincePurchased;
    }
  }
  
  export default pencilBox;
  
  