import { UserValidation } from "./UserValidation";
import { User } from "../models/User";

export class UserService{
    addUser(user:User){
        const errors = UserValidation.validate(user);

        if (errors.length>0){
            console.error(`Errores de Validacion:`, errors.join(` | `))
            return;
        }

        console.log(`Usuario agregado correctamente: ${user.name}\nEdad: ${user.age} \nEmail: ${user.email} `)
    }
}