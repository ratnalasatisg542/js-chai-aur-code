// single ton object
// const tinderUser = new Object{}

const tinderUser = {

}


tinderUser.id = "1234abd"
tinderUser.name = "hap"
tinderUser.isLoggedin = false

// console.log(tinderUser);


const regularUser = {
    email : "satish@gmail.com",
    fullName: {
        userFullName:{
            firstName: "satish",
            lastName: "Rao"
        }
    }
}
console.log(regularUser.fullName?.userFullName.firstName);







