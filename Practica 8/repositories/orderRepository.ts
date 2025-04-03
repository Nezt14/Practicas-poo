import { Order } from "../models/order";
import { injectable } from "inversify";

export interface IOrderRepository{
    save(order:Order):void;
}

@injectable()
export class OrderRepository implements IOrderRepository{
    private orders: Order[]=[];
    
    save(order: Order): void {
        this.orders.push(order);
        console.log(`Pedido guardado correctamente`)
    }
}