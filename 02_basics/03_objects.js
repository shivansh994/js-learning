// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Shivansh",
    "full name" : "Shivansh Soni",
    [mySym] : "myKey1",
    age : 18,
    location : "Jaipur",
    email : "shiv@google.com"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);





