function setUserName (username){
    this.username = username
}

function createAccount (username , email , passward){
    setUserName.call(this , username)

    this.email = email
    this.passward = passsward
}

const chai = new createAccount( 'chai', 'abc@gmail', '1234')
console.log(createAccount);
