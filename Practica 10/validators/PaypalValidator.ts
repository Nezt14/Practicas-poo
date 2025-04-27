import { IPaymentValidator } from "../interfaces/IPaymentValidator";

export class PaypalValidator implements IPaymentValidator{
    validate(amount: number): string[] {
        const errors = [];
        if (amount <= 0)errors.push(`El monto debe ser mayor a cero`);
            return errors;
    }
}