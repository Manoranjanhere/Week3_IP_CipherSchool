var date = new Date();

console.log(date);
console.log(date.getTime()); //It is in milliseconds
console.log(date.getFullYear());
console.log(date.getMonth());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months[date.getMonth() + 1]);
