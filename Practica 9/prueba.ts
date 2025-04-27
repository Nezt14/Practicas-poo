//codigo sin validaciones

class User{
    constructor(public name:string, public age:number, public email:string){}

}

class UserService{
    addUsser(user:User){
        console.log(`usuario agregado correctamente: ${user.name}, ${user.age}, ${user.email}`)
    }
}

const userService = new UserService()
const user1 = new User(``,-5,`no-email`)

userService.addUsser(user1)

// esto es sin validaciones