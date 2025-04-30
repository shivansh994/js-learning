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

console.log(a);
// console.log(b);
console.log(c);


