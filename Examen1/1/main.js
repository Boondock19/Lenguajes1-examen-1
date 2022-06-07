import {potenciaModulada} from "./1b.js";


// Enter any texts ( User input)

let args = process.argv.slice(2)
console.log(args[0])

if (args[0] == 'modulo') {
    let a;
    let b;
    let c;

    console.log("Por favor ingresa los valores de a,b y c para el prgrama potencia modulada")
    console.log("Ingresalos separados por un espacio en blanco por favor, por ejemplo, 21 5 6")
    process.stdin.on('data', data => {
        
        const dataString = data.toString()
        const dataArray = dataString.split(" ")
        
        a = parseInt(dataArray[0])
        b = parseInt(dataArray[1])
        c = parseInt(dataArray[2])
        console.log(`Ingresastes los valores a: ${a}, b: ${b}, c: ${c}`)
        console.log("El resultado de la potencia modulada es :",potenciaModulada(a,b,c))
        process.exit();
    });
}

if(args[0] == 'matrix') {
    console.log("Entro en matrix")
}    




