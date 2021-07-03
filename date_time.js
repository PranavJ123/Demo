console.log("Here we learn about date and time object");

let today = new Date();
console.log(today);

let otherDate = new Date('4-19-2001 03:50:19');
console.log(otherDate);

let a;
a = otherDate.getDate();
a = otherDate.getDay();
a = otherDate.getFullYear();
a = otherDate.getHours();
a = otherDate.getMilliseconds();
a = otherDate.getMinutes();
a = otherDate.getMonth();
a = otherDate.getSeconds();
a = otherDate.getTime();
console.log(a);

otherDate.setDate(19);
otherDate.setFullYear(2002);
otherDate.setHours(4);
otherDate.setMinutes(45);
otherDate.setMonth(3);
otherDate.setSeconds(12);
console.log(otherDate);