const user = {
    username: "Shivansh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Shivansh"
//     console.log(this.username);
    
// }

// chai();

const chai = () => {
    let username = "Shivansh"
    console.log(this);
    
}

chai()

// const addTwo =(num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  (num1 + num2 ) // No need to write return keyword because u are using parenthesis, when u use curly braces u have to right return statement

const addTwo = (num1, num2) => ({username: "Shivansh"})

console.log(addTwo(3,4));

const myArray = [2, 3, 4, 5, 6, 7]

console.log(myArray);
// myArray.forEach();
