import { EmailNotifier } from "./Notifiers/emailNotifier";
import { SMSNotifier } from "./Notifiers/SMSNotifier";
import { UserService } from "./services/UserService";
import { User } from "./Models/user";

const emailNotifier= new EmailNotifier()
const userServiceEmail = new UserService(emailNotifier)

const user1 = new User(`Nestor`,`Nestmart@gmail.com`,23)
userServiceEmail.register(user1)

console.log(`_________________________----______---`)

const smsNotifier= new SMSNotifier()
const userServiceSMS = new UserService(smsNotifier)

const user2 = new User(``, `no-email`,-1)
userServiceSMS.register(user2)