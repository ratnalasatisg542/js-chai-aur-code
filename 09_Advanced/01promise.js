// walk the dog
//clean the kitchen 
// throw the trash 


function go_for_dog_walk (){
     


    return  new Promise (( resolve , reject) => {
      
        setTimeout (() => {

            const dogWalk = true;
            if (dogWalk = true){
              resolve(  console.log( " you have gone to dog walk"))
            }
            else{
              reject(  console.log("you dint go for dog walk"));
                
            }

          
        }, 15000)
    })
}


function CleanKitchen (){
     


    return  new Promise (( resolve , reject) => {
      
        setTimeout (() => {

            const cleankitchen = true;
            if (cleankitchen){
               resolve (console.log( " clean the kitchen"));
            }
            else{
               reject( console.log("you didnt clean"));
                
            }
          
        }, 10000)
    })
}


function TakeTrash (){
     


    return  new Promise (( resolve , reject) => {
      
        setTimeout (() => {
            const trashThrow = false

            if( trashThrow){
              resolve(  console.log( " take away the trash "))
            }
            else{
              reject( console.log("you dint take the trash"));
               
            }
          
        }, 500)
    })
}

go_for_dog_walk().then( (value) =>{ console.log(value); return CleanKitchen()})
                 .then( (value) => { console.log(value); return TakeTrash()})
                 .then( (value) => {console.log(value); console.log("ypu have finished all the task");
                 })
                 .catch(error => { console.error(error);
                 })
                 
                 
