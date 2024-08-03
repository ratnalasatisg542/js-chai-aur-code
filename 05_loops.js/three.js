// 
//array specific loop

const arr = [1,2,3,4,5]


for (const num of arr) {
    //  console.log(num);
     
}

const greetings = " hellow ppl!"
for (const greet of greetings) {
    
    // console.log(`each char is ${greet}`);
    
}


//   Maps

const map = new Map()
map.set('IN','india' );
map.set('USA','America' );
map.set('FC','France' );
map.set('FC','France' );

// console.log(map.get('IN'));
// console.log(map.delete('USA'));
// console.log(map.size);


// console.log(map);


//forof 
 for (const [Key, value] of map) {
    // console.log(Key, `:-` ,value);
    
    
 }


 const MyObject = {
    'game1' : "bgmi",
    'game2' : "spider_man"
 }

 for (const [key,value] of MyObject) {
    console.log(key,value);
    
 }
 
 