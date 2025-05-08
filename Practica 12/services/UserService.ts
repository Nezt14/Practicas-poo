import { User } from "../Models/user";
import { INotifier } from "../Notifiers/INotifier";
import { UserValidator } from "../validators/UserValidator";
//validators

export class UserService{
    constructor(private notifier:INotifier){}

    register(user:User):void{
        const errors = UserValidator.validate(user);

        if (errors.length > 0 ) {
            console.log(`Errores al Registrar usuario:`)
            errors.forEach(e => console.log(`-`+e));
            return;
        }
        
        console.log(`Usuario ${user.name} Registrado correctamente`)
        this.notifier.send(user.name)
    }
}