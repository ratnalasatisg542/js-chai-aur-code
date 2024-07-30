const user = {
    username : "satish",
    price : 999,

    welcomeMessage: function () {
        // console.log(`${this.username} welcome to website`);
        // console.log(this);
    }


}
// user.welcomeMessage ()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);




// function chai(){
//   let   username = "satish"
//     console.log(this.username);
// }
// chai()


const  chai = () => {
  let   username = "satish"
    console.log(this.username);
}
// chai()

(  )=> {}

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(2,9));

// we if tale { } the we use return 

// const addTwo = (num1 , num2) =>   num1 + num2
const addTwo = (num1 , num2) =>  ( {username : "satish"})

console.log(addTwo(2,9))

//if we dont use {} in arrow function the no need of return implicit