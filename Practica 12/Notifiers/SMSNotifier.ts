import { INotifier } from "./INotifier";

export class SMSNotifier implements INotifier{
    send(userName: string): void {
        console.log(`Bienvenido ${userName}, gracias por registrarte por SMS.`)
    }
}