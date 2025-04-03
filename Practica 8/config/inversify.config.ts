import "reflect-metadata"
import { Container } from "inversify"
import { TYPES } from "../types/types"
import { IOrderRepository, OrderRepository } from "../repositories/orderRepository"
import { OrderService } from "../services/orderService"
import { IPaymentProcessor, PaypalPaymentProcessor } from "../services/PaymentService"
import { EmailNotificationService, INotificationService } from "../services/emailService"

const container = new Container()

//vinculamos interfaces con implementaciones
container.bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository);
container.bind<OrderService>(TYPES.OrderService).to(OrderService);
container.bind<IPaymentProcessor>(TYPES.IPaymentProcessor).to(PaypalPaymentProcessor);
container.bind<INotificationService>(TYPES.INotificationService).to(EmailNotificationService);

export {container}