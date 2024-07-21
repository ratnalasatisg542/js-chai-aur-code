const balance = new Number (100)
console.log (balance);

console.log (balance.toString().length);
console.log (balance.toFixed(2));


const otherNumber = 214.8956
console.log(otherNumber.toPrecision(4));

const hundred  = 100000
console.log(hundred.toLocaleString(`en-in`));


// +++++++++++++++++++ math +++++++++++++++++++++

// console.log(Math.abs(-10));  //abs converts neg values to +ve but +ve will not convert to -v

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(5.8));

// console.log(Math.min(10,9,2,1));
// console.log(Math.max(10,9,2,1));


 console.log(Math.random());  // the values comes between 0 and 1 

 console.log((Math.random() *10) +1 );

 const min = 10
 const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)