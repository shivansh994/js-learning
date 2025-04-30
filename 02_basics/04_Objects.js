// const tinderUser = new Object(); // Singleton Object
const tinderUser = {}; // Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Shivansh";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail",
    fullname: {
        firstname: "Shivansh",
        lastname: "Soni"
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj1,obj2);
console.log({...obj1, ...obj2, ...obj4}); 

console.log(Object.assign({}, obj1, obj2, obj4));

const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 2,
        email: "s2@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "Shivansh"
}
// course.courseinstructor

const {courseinstructor} = course;

console.log(courseinstructor);

// const navbar = (PaymentResponse.company) => {    //  for this u can use its alternate which is more simple
const navbar = ({company}) => {    // This is used for destructuring of objects

}

navbar(company = "hitesh")

// This is not object its json we are calling API's.

// {
//     "name"= "Shivansh",
//     "coursename"= "js in hindi",
//     "price"= "free"
// }


//   These are used for API 
// [
//     {},
//     {},
//     {}
// ]








