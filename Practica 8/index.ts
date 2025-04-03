import "reflect-metadata";
import { Product } from "./models/product";
import { Customer } from "./models/Customer";
import { Order } from "./models/order";
import { container } from "./config/inversify.config";
import { OrderService } from "./services/orderService";
import { TYPES } from "./types/types";
import { IPaymentProcessor } from "./services/PaymentService";
import { INotificationService } from "./services/emailService";


//crear intancias de productos
const producto1 = new Product(1,`Laptop`, 1200);
const producto2 = new Product(2, `mouse`,40);

//creamos cliente
const customer1 = new Customer(1,`Nestor Martinez`, `nestmart@gmail.com`)

//crear pedido
const order1 = new Order(1,customer1,[producto1,producto2],
    producto1.price + producto2.price)


    //obtener instancias desde contenedor de inversify

    const orderService = container.get<OrderService>(TYPES.OrderService)
    const paymnetProcessor = container.get<IPaymentProcessor>(TYPES.IPaymentProcessor)
    const notificationService = container.get<INotificationService>(TYPES.INotificationService)

    //procesar pedido
    orderService.placeOrder(order1)
    paymnetProcessor.processPayment(order1.total)
    notificationService.sendNotificacion(`pedido #${order1.id} confirmado para ${customer1.name}`)