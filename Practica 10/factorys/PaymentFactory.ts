import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";
import { IPaymentValidator } from "../interfaces/IPaymentValidator";
import {CreditCardPayment} from "../strategies/CrediCardPayment"
import {PaypalPayment} from "../strategies/PayPalPayment"
import {CryptoPayment} from "../strategies/CryptoPayment"



export type PaymentType = `credit`| `paypal` | `crypto`

export class PaymentFactory{
    static createStrategy(type:PaymentType):IPaymentStrategy{
        switch (type) {
            case `credit`: return new CreditCardPayment();
            case `paypal`: return new PaypalPayment();
            case `crypto`: return new CryptoPayment()
                
            default:
                throw new Error(`Metodo de pago no sopertado.`)
        }
    }
}