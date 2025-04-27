import { IPaymentValidator } from "../interfaces/IPaymentValidator";

export class CryptoValidator implements IPaymentValidator{
    validate(amount: number): string[] {
        const errors = [];
        if (amount < 10)errors.push(`El monto minimo con Crypto: $10`);
            return errors;
    }
}