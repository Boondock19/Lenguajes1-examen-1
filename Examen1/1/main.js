import {potenciaModulada, matrix} from "./1b.js";


// Enter any texts ( User input)

let args = process.argv.slice(2)
console.log(args[0])

if (args[0] == 'modulo') {
    let a;
    let b;
    let c;

    console.log("Por favor ingresa los valores de a,b y c para el programa potencia modulada")
    console.log("Ingreselo  separados por un espacio en blanco, por ejemplo, 21 5 6")
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
    let N;
    let M;
    let P;
    
    console.log("Por favor ingresa los valores de N, M y P que representan las dimensiones de las matrices")
    console.log("Ingreselos separados por un espacio en blanco, por ejemplo, 2 6 3")
    console.log("Los valores de la matrix seran creados aletoriamente en un rango de enteros entre 1 y 5")
    process.stdin.on('data', data => {
        
        const dataString = data.toString()
        const dataArray = dataString.split(" ")
        
        N = parseInt(dataArray[0]);
        M = parseInt(dataArray[1]);
        P = parseInt(dataArray[2]);

        console.log(`Ingresastes los valores N: ${N}, M: ${M}, P: ${P}`)
        matrix(N,M,P)
        process.exit()
    })
    
}    




