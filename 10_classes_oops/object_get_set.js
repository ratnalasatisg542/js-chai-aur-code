const user ={
    _email : "gusvd",
    _passward : "123",

    get email (){
        return this._email.toUpperCase()  
     },
     set email (value){
        return this._email = value;
     }
}
