class User {
    constructor(username){
     this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static  CreateId(){
     return 123;
    }
}

const harsh = new User ("harsh")
 console.log(harsh.CreateId());
 

 class Teacher extends User {
     constructor( username,email ){
     super(username)
     this.email = email;
     }

 }
 const iphone = new Teacher ("iphone", "sbhab@gmail")
 console.log(iphone.CreateId());
 