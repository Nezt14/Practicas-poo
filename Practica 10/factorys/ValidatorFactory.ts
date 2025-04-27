import { PaymentType } from "./PaymentFactory";
import { IPaymentValidator } from "../interfaces/IPaymentValidator";
import { CreditCardValidator } from "../validators/CredidCardValidator";
import { PaypalValidator } from "../validators/PaypalValidator";
import { CryptoValidator } from "../validators/CryptoValidator";


export class ValidatorFactory{
    static createValidator(type:PaymentType):IPaymentValidator{
        switch (type) {
            case `credit`: return new CreditCardValidator();
            case `paypal`: return new PaypalValidator();
            case `crypto`: return new CryptoValidator()
                
            default:
                throw new Error(`Metodo de pago no sopertado.`)
        }
    }
}