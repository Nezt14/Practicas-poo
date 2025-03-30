// interface Worke {
//     work(): void;
//     eat(): void;
// }
// class Developer implements Worke {
//     work(): void {
//         console.log(`Escribiendo codigo...`)
//     }
//     eat(): void {
//         console.log(`Comiendo almuerzo`)
//     }
// }

// class Robot implements Worke {
//     work(): void {
//         console.log(`El robot esta trabajando...`)
//     }
//     eat(): void {
//         throw new Error(`error r`)
//     }
// }

interface Work{
    work():void;
}

interface Eatable{
    eat():void;
}

class Developer implements Work, Eatable{
    work(): void {
        console.log(`Escribiendo codigo...`)
    }
    eat(): void {
        console.log(`Almorzando...`)
    }
}

class Robot implements Work{
    work(): void {
        console.log(`El robot esta trabajando`)
    }
}