// reducs in js

const MyArray = [1,2,3]
// const myTotal = MyArray.reduce( function ( acc , currvalue ){
//     console.log(` acc${acc} and currval: ${currvalue}`);
    
//     return acc + currvalue
// } ,0)


// const myTotal = MyArray.reduce((acc , currvalue) => {
//      return acc + currvalue
// } ,0)


// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 2999
    },
    {
        itemName: "data science course",
        price: 2999
    },
]

const pricetoPay = shoppingCart.reduce(  ( acc ,item) =>{
    return  acc + item.price} ,0)

console.log(pricetoPay);
