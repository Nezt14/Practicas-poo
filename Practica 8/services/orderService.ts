import { inject, injectable } from "inversify";
import { TYPES } from "../types/types";
import { IOrderRepository } from "../repositories/orderRepository";
import { Order } from "../models/order";


@injectable()
export class OrderService{
    constructor(@inject(TYPES.IOrderRepository)private orderRepository: IOrderRepository){}

    placeOrder(order:Order):void{
        console.log(`procesando pedido para ${order.customer.name}...`)
        this.orderRepository.save(order);
    }
}

