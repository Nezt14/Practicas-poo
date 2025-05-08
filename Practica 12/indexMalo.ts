class User{
    name:string;
    email:string;
    age:number;
    registrationDate:Date

    constructor(name:string,email:string,age:number){
        this.name = name
        this.email=email
        this.age=age
        this.registrationDate=new Date()
    }
}

class UserManager {
    registrer(user:User, notificationType:string){
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
        if (errors.length > 0 ) {
            console.log(`Errores al Registrar usuario:`)
            errors.forEach(e => console.log(`-`+e));
            return;
        }
        console.log(`Usuario ${user.name} Registrado correctamente`)

        if(notificationType === `email`){
            console.log(`Enviando Notificacion por email a ${user.name}...`)
            console.log(`Bienvenido ${user.name}, gracias por registrarte`)
        }else if(notificationType === `sms`){
            console.log(`Enviando notificacion por SMS al numero (simulado).`)
            console.log(`Bienvenido ${user.name}, gracias por registrarte`)
        }else{
            console.log(`Tipo de notificacion no soportado`)
        }
    }
}


// const userManager = new UserManager()
// const user1 = new User(`Nestor`,`Nestmart@gmail.com`,23)
// userManager.registrer(user1,`sms`);
// console.log(`_________________`)
// const user2 = new User(``, `no-email`,-1)
// userManager.registrer(user2,`sms`);