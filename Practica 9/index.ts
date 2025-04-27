import { UserService } from "./services/userService"
import { User } from "./models/User";

const userService = new UserService()

const user1 = new User(``,-5,`No-email`)
userService.addUser(user1);
console.log(`__________________________________`)

//usuario valido

const user2 = new User(`Nestor`, 23,`nestmart@gmail.com`)
userService.addUser(user2)