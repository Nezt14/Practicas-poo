import { User } from "../models/User";
export class UserValidation{
    static isValidName(name:string):boolean{
        return name.trim().length > 0;//que el nombre n este vacio
    }

    static isValidAge(age:number):boolean{
        return age > 0 && Number.isInteger(age)//busca un numero entero
    }

    static isValidEmail(email:string):boolean{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    static validate(user:User):string[]{
        const errors:string[]=[];
        if (!this.isValidName(user.name)){
            errors.push(`el Nombre es invalido`)
        }
        if (!this.isValidAge(user.age)) {
            errors.push(`la edad debe ser un numero positivo`)
        }
        if (!this.isValidEmail(user.email)){
            errors.push(`El email no es valido`)
        }
        return errors;
    }
}