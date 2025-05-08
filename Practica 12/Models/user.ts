export class User {

    constructor(public name: string, public email: string, public age: number, public registrationDate: Date = new Date()
    ) { }
}