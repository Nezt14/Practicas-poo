//incorrecto, terminar despues tengo la foto

// class Notificador{
//     private correo: correo;
//     private sms: sms;
//     constructor(){
//         this.correo = new correo
//         this.sms = new this.sms()
//     }
//     enviarNotificacionPorCorreo(mensaje: string)
// }


//correcto

interface Notificacion{
    enviar (mensaje:string):void;
}

class Correo implements Notificacion{
    enviar(mensaje: string): void {
        console.log(`Enviando correo ${mensaje}`)
    }
}

class SMS implements Notificacion{
    enviar(mensaje: string): void {
        console.log(`Enviando mensaje ${mensaje}`)
    }
}
class WhatsAPP implements Notificacion{
    enviar(mensaje: string): void {
        console.log(`Enviando WhatsAPP ${mensaje}`)
    }
}
//clase de alto nivel que depende de la abstaccion
class Notificador{
    private servicioNotificacion: Notificacion;
    constructor(servicioNotificacion: Notificacion){
        this.servicioNotificacion = servicioNotificacion
    }
    enviarNotificacion(mensaje:string):void{
        this.servicioNotificacion.enviar(mensaje)
    }
}


const correo = new Correo()
const sms = new SMS()
const whatsapp = new WhatsAPP()

const notificacionCorreo = new Notificador(correo)
const notificadorSms = new Notificador(sms)
const notificadorWhatsapp = new Notificador(whatsapp)

notificacionCorreo.enviarNotificacion(`Hola este es un correo `)
notificadorSms.enviarNotificacion(`Hola desde mensaje de texto`)
notificadorWhatsapp.enviarNotificacion(`Hola desde whatsapp`)