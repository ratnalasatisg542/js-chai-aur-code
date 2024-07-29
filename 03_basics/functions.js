// console.log("s");
// console.log("a");
// console.log("t");
// console.log("i");
// console.log("s");
// console.log("h");

function saymyname() {
    console.log("s");
console.log("a");
console.log("t");
console.log("i");
console.log("s");
console.log("h");
}
// saymyname // reference
// saymyname() // execution


// function addTwoNumbers ( Number1 , Number2) {
//     console.log(Number1+Number2);
// }  


// addEventListener(10,5)



function addTwoNumbers ( Number1 , Number2) {
//    let result = Number1 +Number2
//    return result

return Number1 + Number2
}  


const result = addTwoNumbers(10,2)
// console.log(result);




function UserLogginMessage (username = "sam") {
   if ( username === undefined){
console.log("please enter a username");
   }
   
   
    return `${username} just logged in`
}
// console.log(UserLogginMessage("satish"));
console.log(UserLogginMessage());
