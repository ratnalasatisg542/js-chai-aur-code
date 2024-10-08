const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//async

async function consume (){
    try {
        const responce = await promiseFive
        console.log(responce);
        
    } catch (error) {
        console.log(error);
        
    }
}
consume()

// async function allData (){
//   try {   
//      const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
//      const data =  await response.json()
//      console.log(data);
    
//   } catch (error) {
//      console.log(error);
     
//   }
 
   
// }

// allData()


fetch('https://api.github.com/users/hiteshchoudhary')
.then ((response)=> {
    return response.json()
})
.then ((data) => {
    return data
})
.catch ((error)=> {
    return error
})

// promise.all
// yes this is also available, kuch reading aap b kro.