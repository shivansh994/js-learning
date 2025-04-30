// global scope
let a = 20;

if(true){                 // Block Scope
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a);
    
}

for(let i = 0; i < Array.length; i++){
    const element = Array[i];
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Shivansh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two();
    
}

// one();

if(true){
    const username = "Shivansh"
    if(username === "Shivansh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++++++++++++ intresting  +++++++++++++++++++++++++++++++

// if u are declaring in a function then no matters from where u call before declaring the function or after declaring the function it will work.
// But when u declare const then make sure u are calling that after declaratoin only.


console.log(addone(5));


function addone(num){
    return num + 1
}



const addTwo = function(num){
    return num + 2
}

addTwo(5);

// console.log();
