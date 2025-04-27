import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";

export class PaypalPayment implements IPaymentStrategy{
    pay(amount: number): void {
        console.log(`Pago ${amount} realizado con PayPal`)
    }
}