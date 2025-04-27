import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";

export class CreditCardPayment implements IPaymentStrategy{
    pay(amount: number): void {
        console.log(`Pago ${amount} realizado con Tarjeta de Credito`)
    }
}