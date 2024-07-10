/*conversion and operations*/
/*let score = 40
let Name = "satish"

console.log(typeof (score));
console.log( typeof(Name) );*/



/*let valueInNumber = Number(Name)
console.log(typeof valueInNumber);
console.log(valueInNumber);*/


/*when your converting 30 => it's type is number
  when your converting 30abc => it's type is NAN
  when your converting NULL => it's type  is 0
  when your converting undefined => it's type  is NAN
  when your converting true => it's type  is 1
  when your converting false => it's type  is 0 */



 // let isLoggedIn = 1

  //let booleanisLogged = Boolean(isLoggedIn)
  //console.log(booleanisLogged);
  //console.log(typeof booleanisLogged);
  

  //1 => true, 0=> false 
  //"" => false
  //"abcd"=> true

//   let xnumber = 22

//   let somestring = String (xnumber)
//   console.log(somestring);
//   console.log(typeof somestring);




// operations

// let value = 7
// let negvalue = -value 
// console.log( negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2);


let str1 = "ratnala"
let str2 = " satish"

let str3 = str1 + str2 
console.log(str3);



console.log("1" + 2);
// adding string with any  number gives you string in this case it will give 12 
console.log("1" + null);
console.log("1" + 2 + 2 );
// adding string with any  number gives you string in this case it will give 122
console.log(1 + 5 + "2" );
//adding number first then string it will give 62 5+1 is 6 and 2 is string so 62


console.log((1 + 5) * 2);
console.log(1 + 5 + "2" );

//  ()
//  *,/, %
// +, -
console.log(+true);
//it qill give you 1 coz its tring to add and true is 1

let gamecounter = 100
gamecounter++
console.log(gamecounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


