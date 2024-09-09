// class user{
//     constructor ( userName , email , passward){
//       this.userName = userName;
//       this.email = email;
//       this.passward = passward;
//     }
//     encript (){
//         return ` user passward ${this.passward}abc`
//     }
//     changeName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }
// const chai = new user ("chai","chai@gmail",123);
// // console.log(chai.changeName());
// console.log(chai.encript());

//behind the scence

function user (username , passward , email){
   this.username = username;
   this.passward = passward;
   this.email = email;
}

user.prototype.encriptpassward = function (){
    return `${this.passward}abc`
}
user.prototype.changeName = function (){
    return `${ this.username.toUpperCase()}`
}
const tea = new user("tea",123,"abc@gmail.com")
console.log(tea.changeName());
