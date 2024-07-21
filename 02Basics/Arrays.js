const myArr = [ 0,1,2,3,4,]

// const MyHero = ["IronMan" , "BatMan" , "SpiderMan", "ShaktiMan","Thoefin"]

// console.log(myArr);
// console.log(MyHero[2]);

//arrays methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(10)
// myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); // it dosent exixt so it show -1


// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);



//slice splice


console.log("a" , myArr);

const mynew1 = myArr.slice(1,3);

console.log(mynew1);

console.log("B" , myArr);



const mynew2 = myArr.splice(1,3);
console.log("c" , myArr);
console.log(mynew2);

// //slice() does not manupulate main array.
// => splice() manupulate original array.