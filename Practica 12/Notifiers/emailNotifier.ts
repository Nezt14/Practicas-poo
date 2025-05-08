import { INotifier } from "./INotifier";

export class EmailNotifier implements INotifier{
    send(userName: string): void {
        console.log(`Bienvenido ${userName}, gracias por registrarte por Email.`)
    }
}