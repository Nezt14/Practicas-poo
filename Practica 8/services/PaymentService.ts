import { injectable } from "inversify";

export interface IPaymentProcessor{
    processPayment(amount:number):void;

}

@injectable()
export class PaypalPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Pago procesadoc con paypal: ${amount}`)
    }
}

@injectable()
export class CreditCartPaymentProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
        console.log(`Pago procesado con tarjeta de credito ${amount}`)
    }
}