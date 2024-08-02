 const userEmail = [] //"satish@ai" // if its "" dont have email , [] got user email

if (userEmail) {
    console.log('got user email');
}
else {
console.log("user Dont have user email");

}
//falsy valuse , false ,0 = false , -0, BigInt 0n , "" , null, undefined,NaN"

//truthy valuse
//"0", "false","  ", {}, [], finction(){}


// if (userEmail.length === 0){
//     console.log("Array is emprty");
    
// }  // if get a array an empty array 


//if you get a empty object

const emptyObject = {}
    if (Object.keys(emptyObject).length ===0 ) {
        console.log("object is empty");
        
    }


    // Nullish Coalescing Operator (??): null undefined

    let val1 ;
    // val1 = 5 ?? 10

    // val1 = null ?? 10

    //val1 = undefined ?? 15

    val1 = null ?? 10 ?? 300
console.log(val1);

// Terniary Operator

//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
