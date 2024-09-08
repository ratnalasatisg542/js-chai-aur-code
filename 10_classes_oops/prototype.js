// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
      //   console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
   //  console.log(`hitesh is present in all objects`);
}

// heroPower.hitesh()
// myHeros.hitesh()

Array.prototype.heyHitesh = function (){
   //  console.log(`hi hitesg say hello`);
      
}

// myHeros.heyHitesh()
// heroPower.heyHitesh()


//inheritance

const user = {
   name: 'satish',
 };
 
 const Teacher = {
   makeVideos: true,
 };
 
 const TeachingSupport = {
   inAvailable: false,
 };
 
 const TaSupport = {
   makeAssignments: 'js Assignments',
   FullTime: true,
   __proto__: TeachingSupport,
 };
 
 Teacher.__proto__ = user;
 console.log(TaSupport);
 

 //modern syntax

 Object.setPrototypeOf(TeachingSupport, Teacher)

 let anotherUsername = "ChaiAurCode     "
 
 String.prototype.trueLength = function(){
     console.log(`${this}`);
     console.log(`True length is: ${this.trim().length}`);
 }
 
 anotherUsername.trueLength()
 "hitesh".trueLength()
 "iceTea".trueLength()