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
// console.log(UserLogginMessage());



function CalculateCartItems(...item1) {  //rest opertaor ...item1
    
return item1
} 
// console.log(CalculateCartItems(20,200,400));  



function CalculateCartItems(val1,val2,...item1) {  //rest opertaor ...item1
    
    return item1
    } 
    console.log(CalculateCartItems(20,200,400));  



    const user = {

        username : "satish",
        price : 999

    }
    function handleobject (anyobject) {
        console.log(`user name ${anyobject.username} and price is ${anyobject.price}`);
    }
    // handleobject(user)

    handleobject({
        username : "sam",
        price : 199

    })
    
    const mynewarray = [200,300,400,100]

    function returnsecondvalue (getArray){
        return getArray[1]
    }
    // console.log(returnsecondvalue(mynewarray));
    console.log(returnsecondvalue([200,400,600,900]));