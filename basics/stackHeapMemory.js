// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack and heap to store memory in js

//datatypes are based on memory allocation

// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declar


//heap
let UserOne = {

    UserName : "satish",
    uid : "satish@gmail.com"
}

let UserTwo = UserOne 

UserTwo.uid = "harsh.gmail.com"

console.log(UserTwo);
console.log(UserOne);


// stack

let RealName = "satish"

let SeconName = RealName
 SeconName = "orewa"
console.log(SeconName);
console.log(RealName);
