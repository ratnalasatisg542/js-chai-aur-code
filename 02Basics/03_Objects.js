

//object literals 
// const MySym = Symbol("Key1") // use symbole as key in object


// const jsUser ={
//     name: "satish",
//     age : 20,
//     [MySym]: "Mykey1",
//     email : "satish@gmail.com",
//     "Full-Name": "Satishh Rao",   // if you give your key and value as a string  then you cant acces the value by . dot method. only by square notation
//     location : "delhi",
//     LoggedIn : false,
//     lastLoginDay : ['Monday',"Tuesday"]
// }

// // console.log(jsUser.age); 
// console.log(jsUser["email"]);
// console.log(jsUser["Full-Name"]);
// console.log(jsUser["MySym"])





const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// to change the values
JsUser.email = "satish@gmail.com"


// freeze any object

Object.freeze(JsUser)

JsUser.email = "h@gmail.com"

// console.log(JsUser);



//we treat funcutions as variables in objects

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());