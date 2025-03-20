//clase generica para vehiculos

abstract class Vehiculos{
    constructor(public modelo:string){}

    abstract acelerar():void;
}
// subclase para vehiculos de conbustion

class VehiculoCombustion extends Vehiculos{
    acelerar(): void {
        console.log(`${this.modelo} acelera usando gasolina`)
    }
}

//subclase para vehiculos electricos

class VehiculoElectrico extends Vehiculos{
    acelerar(): void {
        console.log(`${this.modelo} acelera con bateria`);
    }
}



const electrico = new VehiculoElectrico(`toyota`)

console.log(new VehiculoElectrico(`toyota`))

electrico.acelerar()

//otra forma de hacerlo

function tipoVehiculo(vehiculo:Vehiculos){
    return vehiculo.acelerar()
}

tipoVehiculo(new VehiculoElectrico(`toyota`))