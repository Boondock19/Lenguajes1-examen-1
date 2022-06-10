
// Enter any texts ( User input)

let args = process.argv.slice(2)
console.log(args[0])

    console.log("Bienvenido al programa de un buddy system")
    console.log(`Se creara una memoria con ${args[0]} bloques`)
    console.log('Luego de cada accion, se pedira una siguiente')
    process.stdin.on('data', data => {
        console.log('Siguiente accion: ')
        console.log('data sin transformar',data)
        const dataString = (data).toString()
        const dataArray =dataString.split(" ")
        console.log('data EN string transformar',dataString)
        console.log('data EN array transformar',dataArray)
        console.log('data EN posicion transformar',dataArray[2])

        if(dataArray[0] == "RESERVAR") {
            console.log(dataArray[1], parseInt(dataArray[2]))
        }

        if(dataArray[0] == "LIBERAR") {
            console.log("alocha" == dataArray[1].trim())
        }

        if(dataArray[0].trim() == "MOSTRAR") {
            console.log('Entro en mostrar')
        }

        
        // Salimos del programa
        if (dataArray[0].trim() === 'SALIR') {
            console.log('Terminando el programa ...')
            process.exit()
        }
        
    });





