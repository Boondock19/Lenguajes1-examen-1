
// Enter any texts ( User input)


let args = process.argv.slice(2)

    

    console.log("Bienvenido al programa de un buddy system")
    console.log(`Se creara una memoria con ${args[0]} bloques`)
    console.log('Luego de cada accion, se pedira una siguiente')

    // Creando un array del tamaño de bloques, lo inicializamos con 0
    // 0 sera vacio y 1 ocupado.
    let arrayBloques = Array.apply(0, Array(parseInt(args[0]))).map((x) => {return 0})
    const bloques = arrayBloques.length
   
    // Al inicio toda la lista puede ser considera un gran bloque vacio.
    let arrayBloquesLibres = [{
        'primerBloqueLibre': 0,
        'sizeOfBlock':  bloques,
        'ultimoBloqueContiguo': bloques  - 1 
    }]

    // array que se comportara como un diccionario de nombre y data asociada a ese nombre.
    let arrayNombres = []

    process.stdin.on('data', data => {
    
        const dataString = (data).toString()
        const dataArray =dataString.split(" ")
        

        if(dataArray[0] == "RESERVAR") {
            const nombre = dataArray[1]
            const cantidad = parseInt(dataArray[2])
            if(arrayNombres[nombre]) {
                console.log(`El nombre ${nombre} ya posee memoria reservada`)
                console.log('Siguiente accion: ')
            } else {
                // Hay un bloque vacio?
                if (arrayBloquesLibres.length > 0) {
                    // Hay espacio vacio
                    // retorna -1 si no consigue un bloque de espacio contiguo suficiente
                    const firstIndex = arrayBloquesLibres.findIndex(x => cantidad < x.sizeOfBlock + 1)
                    
                    
                    if (firstIndex < 0 ) {
                        // Si no hay bloques contigios suficientes 
                        console.log(`No hay bloques contiguos suficientes para ${nombre}`)
                        console.log('Siguiente accion: ')
                    } else {

                        const inicio = arrayBloquesLibres[firstIndex].primerBloqueLibre
                        const espacioDisponible = arrayBloquesLibres[firstIndex].sizeOfBlock
                        let final = arrayBloquesLibres[firstIndex].ulitmoBloqueContiguo 
                        // Insertamos desde inicio hasta que se hayan ingresado los bloques reservados.
                        let i = inicio
                        let j = cantidad
                            while(j > 0) {
                                arrayBloques[i] = 1
                                i++
                                j--
                        }

                        // Modificamos la data de espacio disponible
                        arrayBloquesLibres[firstIndex].primerBloqueLibre = i
                        arrayBloquesLibres[firstIndex].sizeOfBlock = espacioDisponible - (i) + inicio

                        // ingresamos el nombre en el diccionario

                        arrayNombres[nombre] = {
                                'inicio' : inicio,
                                'final' : i - 1
                        }
                        
                        // Debemos eliminar del registro de espacio libre los bloques que lleguen a espacio vacio 0
                        if(arrayBloquesLibres[firstIndex].sizeOfBlock === 0) arrayBloquesLibres.splice(firstIndex,1)
                            console.log('Siguiente accion: ')
                        }
                    } else {
                        console.log(`No hay bloques contiguos suficientes para ${nombre}`)
                        console.log('Siguiente accion: ')
                    }
            }
            
        }

        if(dataArray[0] == "LIBERAR") {
            const nombre = dataArray[1].trim()
            if (!arrayNombres[nombre]) {
                console.log(`${nombre} no posee memoria reservada actualmente`)
                console.log('Siguiente accion: ')
            } else {
                const inicio = arrayNombres[nombre].inicio
                const final = arrayNombres[nombre].final

                const  nuevoEspacio = {
                    'primerBloqueLibre': inicio,
                    'sizeOfBlock':  final - inicio + 1,
                    'ultimoBloqueContiguo': final 
                }

                arrayBloquesLibres.push(nuevoEspacio)

                // push antes de cambiar los 1 por 0
                let i = inicio
                while( i < final + 1) {
                    arrayBloques[i] = 0
                    i++
                }

                
                delete arrayNombres[nombre]
                
                console.log('Siguiente accion: ')
            }
        }

        if(dataArray[0].trim() == "MOSTRAR") {
            
            // Ordenamos el diccionario como un array
            let copyArray = Object.keys(arrayNombres).map((key) => [key,arrayNombres[key]])
            
            // ordenamos en orden de inicio de bloque
            copyArray.sort((a,b) => {
                return a[1].inicio - b[1].inicio
            })

            console.log('Bloques ocupados: ',copyArray)
            console.log('Bloques libres : ', arrayBloquesLibres)
            console.log('Siguiente accion: ')
        }

        
        // Salimos del programa
        if (dataArray[0].trim() === 'SALIR') {
            console.log('Terminando el programa ...')
            process.exit()
        }
        
    });


const compare  = (a,b) => {
    
    if(a.inicio < b.inicio) {
        return -1 
    }
    
    if (a.inicio > b.inicio) {
        return 1
    }

    return 0
}

