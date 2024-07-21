const marvel_heros = ["spiderMan", "hulk","ironman"]
const dc_heros = ["BatMan", "superman","Flash"]

// marvel_heros.push(dc_heros) will not work

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  good but we usr spred 


const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);




const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("SATISH"));
console.log(Array.of("SATISH")); // converts to array


console.log(Array.from({name: "hitesh"})) // interesting


let scr1 = 100
let scr2 = 200
let src3 = 300


console.log(Array.of(scr1,scr2,src3));