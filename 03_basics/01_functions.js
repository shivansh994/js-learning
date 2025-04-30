function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("v");
    console.log("A");
    
}

// sayMyName();

function addTwoNum(num1, num2){
    // console.log(num1 + num2);

    // let result = num1 + num2
    // return result

    return num1 + num2
    
}
const result = addTwoNum(5,2);

console.log("Result: ", result);
const user = {
    username: "shivansh",
    price: "1999"
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObbject(user.username);
handleObject({
    username: "sam",
    price: 400
})


