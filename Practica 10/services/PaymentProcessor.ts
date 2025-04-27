import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";
import { IPaymentValidator } from "../interfaces/IPaymentValidator";

export class PaymentProcessor{
    constructor(private strategy:IPaymentStrategy, private validator:IPaymentValidator){}

    process(amount:number):void{
        const errors = this.validator.validate(amount);
        if (errors.length) {
            console.log(`✖️ Error en la Validacion del pago`)
            errors.forEach(e =>console.log(`- ${e}`))
            return;
        }
        try{
            console.log(`Procesando Pago...`)
            this.strategy.pay(amount)
            console.log(`✅Pago completado con exito`)   
        }catch(error){
            console.log(`Ocurrio un error al procesar el Pago: ${error}`)
        }
    }
}