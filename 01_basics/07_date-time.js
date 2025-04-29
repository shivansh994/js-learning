// Date

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString);

console.log(typeof myDate);

let myCreatedDated = new Date("04-27-2025");
console.log(myCreatedDated.toDateString());

let myTimeStamp = Date.now();

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
    era : "short"
});






