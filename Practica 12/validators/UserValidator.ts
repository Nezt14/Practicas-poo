import { User } from "../Models/user";

export class UserValidator{
    static validate(user:User):string[]{
        const errors:string[]=[];

        if(!user.name.trim()){
            errors.push(`El nomvre no puede estar vacio`)
        }

        const emailRegex = /^[^\@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(user.email)){
            errors.push(`El email no es valido. `)
        }

        if(user.age<=0){
            errors.push(`La edad debe ser positiva.`)
        }

        if (user.registrationDate > new Date()){
            errors.push(`la fecha de registro no puede ser futura.`)
        }
        return errors;
    }
}