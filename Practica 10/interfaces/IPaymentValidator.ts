export interface IPaymentValidator{
    validate(amount:number):string[];
}