import { PaymentFactory, PaymentType } from "./factorys/PaymentFactory";
import { ValidatorFactory } from "./factorys/ValidatorFactory";
import { PaymentProcessor } from "./services/PaymentProcessor";

//simulamos varios metodos

const paymentMEthods:PaymentType[]=[`credit`,`paypal`,`crypto`]

paymentMEthods.forEach(method=>{
    console.log(`_______________________________________`)
    console.log(`Metodo de pago: ${method.toLocaleUpperCase()}`);

    const strategy = PaymentFactory.createStrategy(method);
    const validator = ValidatorFactory.createValidator(method);
    const processor = new PaymentProcessor(strategy,validator)

    processor.process(8000)
})