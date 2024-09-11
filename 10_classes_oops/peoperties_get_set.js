 function user( email, passward){
   this._email = email;
   this._passward = passward;
 }

 Object.defineProperty(this, 'email',{
    get : function(){
       return this._email.toUpperCase()
    },
    set: function(value){
        return this._email = value;
    }
 })

 const chai = new user("chai",123)
 console.log(chai.email);
 