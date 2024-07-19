const name = "Satish"
const repoCount = 50

// console.log(name + repoCount + " Value"); wrong approch

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String (`satish-hc`)

console.log(gameName[2]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   satish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('hitesh%20', 'satish'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));