import { injectable } from "inversify";

export interface INotificationService{
    sendNotificacion(message:string):void;
}

@injectable()
export class EmailNotificationService implements INotificationService{
    sendNotificacion(message: string): void {
        console.log(`Enviando Email: ${message}`);
    }
}