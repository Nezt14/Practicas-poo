//clase para manejar la informacion del empleado

class Empleado {
    constructor(public nombre: string, public salarioBase: number) { }
    calcularSalario(): number {
        return this.salarioBase * 1.1;
    }
}
//clase para generar reportes de empleados
class ReporteEmpleado{
    generar(empleado:Empleado):string{
        return `Empleado: ${empleado.nombre}, salario: ${empleado.calcularSalario()} `;

         //let hola = 
         //return hola;
    }
}

const empleado = new Empleado(`Nestor Martinez`, 1000)
const reporte = new ReporteEmpleado();

console.log(reporte.generar(empleado))