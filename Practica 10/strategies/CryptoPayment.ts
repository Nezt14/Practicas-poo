import { IPaymentStrategy } from "../interfaces/IPaymentStrategy";

export class CryptoPayment implements IPaymentStrategy{
    pay(amount: number): void {
        console.log(`Pago ${amount} realizado con Cryptomonedas`)
    }
}