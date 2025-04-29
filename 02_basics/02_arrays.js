const dc_heroes = new Array("superman" , "flash" , "batman");
const marvel_heroes = ["thor" , "Ironman" , "spiderman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes.concat(dc_heroes));

const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

// another_array.flat(Infinity)
// to know its array or not use .isArray()
// to make an array use .from()

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"))
console.log(Array.from ({name : "shivansh"})); // intresting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
