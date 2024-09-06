const user ={
    userName : "satish" ,
    loginCount : 7 ,
    signedIn : 8 ,
    getUserDeatils : function (){
        // console.log( " Got user Details ");
         console.log( `UserName ${this.userName10_classes_oops.js

         }`);
         
    }
}
console.log( user.userName);
// console.log(user.getUserDeatils());
console.log(this);



function user ( UserName , UserLoggedIn , UserSignedIn){
    this.UserName = UserName;
    this.UserLoggedIn = UserLoggedIn;
    this.UserSignedIn = UserSignedIn;

    return this
}
 const userOne = new user("satish", 5, true);
 const userTwo = new user("Rao", 5, true);
console.log(userOne);


//object constructor 

function person (){
  this.name = name ;
  this.gender = gender;
  this.age = age;

}

const father = new person ("Rhs", "M" , 22);
const mom = new person ("Hema", "F" , 25);
