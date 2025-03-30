interface Imprimible{
    imprimir():void;
}
interface Escaneable{
    escanear():void;
}
class Impresora implements Imprimible{
    imprimir(): void {
        console.log(`imprimiendo`)
    }

}

class Escanear implements Escaneable{
    escanear(): void {
        console.log(`Escaneando doc`)
    }
}

class Multifuncional implements Escaneable, Imprimible{
    escanear(): void {
        console.log(`escaneando desde clase Multifuncional doc `)
    }
    imprimir(): void {
        console.log(`Imprimiendo desde clase Multifuncional doc `)
    }
}

const impresora = new Impresora()
impresora.imprimir()

const escaner = new Escanear()
escaner.escanear()

const multi = new Multifuncional()
multi.escanear()
multi.imprimir()
