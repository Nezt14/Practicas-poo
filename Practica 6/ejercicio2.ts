interface Operacion{
    calcular(num1:number, num2:number):number;
}

class Suma implements Operacion{
    calcular(num1: number, num2: number): number {
        return num1 + num2
    }
}

class Restar implements Operacion{
    calcular(num1: number, num2: number): number {
        return num1 - num2
    }
}

class Dividir implements Operacion{
    calcular(num1: number, num2: number): number {
        if (num2 !=0) {
            return num1 / num2
        }else{
            return -1
        }
    }
}

class Multiplciar implements Operacion {
    calcular(num1: number, num2: number): number {
        return num1 * num2
    }
}
// aqui se piden tres cosas la operacion a hacer y los numeros
function operar(operacion:Operacion, a:number,b:number){
    return operacion.calcular(a,b);
}

console.log(operar(new Suma(),5,3))
console.log(operar(new Restar(),5,3))
console.log(operar(new Multiplciar(),5,3))
console.log(operar(new Dividir(),10,2))

const multi = new Multiplciar()
console.log(multi.calcular(4,4))