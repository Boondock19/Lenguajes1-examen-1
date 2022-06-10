
// Enter any texts ( User input)


let args = process.argv.slice(2)
console.log(args[0])
    

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
        'EspacioVacio':  bloques,
        'ultimoBloqueContiguo': bloques  - 1 
    }]

    // array que se comportara como un diccionario de nombre y data asociada a ese nombre.
    let arrayNombres = []

    console.log(arrayBloquesLibres)
    console.log(arrayNombres)
    console.log('alocha existe?',arrayNombres['alocha'])

    process.stdin.on('data', data => {
        
        // console.log('Siguiente accion: ')
        // console.log('data sin transformar',data)
        const dataString = (data).toString()
        const dataArray =dataString.split(" ")
        // console.log('data EN string transformar',dataString)
        // console.log('data EN array transformar',dataArray)
        // console.log('data EN posicion transformar',dataArray[2])

        if(dataArray[0] == "RESERVAR") {
            const nombre = dataArray[1]
            const cantidad = parseInt(dataArray[2])
            if(arrayNombres[nombre]) {
                console.log(`El nombre ${nombre} ya posee memoria reservada`)
            } else {
                // Hay un bloque vacio?
                if (arrayBloquesLibres.length > 0) {
                    // Hay espacio vacio
                    // retorna -1 si no consigue un bloque de espacio contiguo suficiente
                    const firstIndex = arrayBloquesLibres.findIndex(x => cantidad < x.EspacioVacio + 1)
                    
                    
                    if (firstIndex < 0 ) {
                        // Si no hay bloques contigios suficientes 
                        console.log(`No hay bloques contiguos suficientes para ${nombre}`)
                    } else {

                        const inicio = arrayBloquesLibres[firstIndex].primerBloqueLibre
                        const espacioDisponible = arrayBloquesLibres[firstIndex].EspacioVacio
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
                        arrayBloquesLibres[firstIndex].EspacioVacio = espacioDisponible - (i) + inicio

                        // ingresamos el nombre en el diccionario

                        arrayNombres[nombre] = {
                                'inicio' : inicio,
                                'final' : i - 1
                        }
                        
                        // Debemos eliminar del registro de espacio libre los bloques que lleguen a espacio vacio 0
                        if(arrayBloquesLibres[firstIndex].EspacioVacio === 0) arrayBloquesLibres.splice(firstIndex,1)
                        console.log("Array de bloques luego de insertar",arrayBloques)
                        console.log("Array de bloques libres",arrayBloquesLibres)
                        console.log("Array de nombres", arrayNombres)
                        }
                    } else {
                        console.log(`No hay bloques contiguos suficientes para ${nombre}`)
                    }
            }
            
        }

        if(dataArray[0] == "LIBERAR") {
            const nombre = dataArray[1].trim()
            if (!arrayNombres[nombre]) {
                console.log(`${nombre} no posee memoria reservada actualmente`)
            } else {
                const inicio = arrayNombres[nombre].inicio
                const final = arrayNombres[nombre].final

                const  nuevoEspacio = {
                    'primerBloqueLibre': inicio,
                    'EspacioVacio':  final - inicio + 1,
                    'ultimoBloqueContiguo': final 
                }

                arrayBloquesLibres.push(nuevoEspacio)

                // push antes de cambiar los 1 por 0
                let i = inicio
                while( i < final + 1) {
                    arrayBloques[i] = 0
                    i++
                }

                console.log(`Array de bloques luego de eliminar a ${nombre}`,arrayBloques)
                console.log("Array de bloques libres luego de eliminar",arrayBloquesLibres)
                delete arrayNombres[nombre]
                console.log("Array de nombres luego de eliminar", arrayNombres)

            }
        }

        if(dataArray[0].trim() == "MOSTRAR") {
            console.log('Entro en mostrar')
            let copyArray = Object.keys(arrayNombres).map((key) => [key,arrayNombres[key]])
            console.log('copia del dictionario como array ',copyArray)
            copyArray.sort((a,b) => {
                return a[1].inicio - b[1].inicio
            })
            console.log('luego de ordenar copyArray ',copyArray)
        }

        
        // Salimos del programa
        if (dataArray[0].trim() === 'SALIR') {
            console.log('Terminando el programa ...')
            process.exit()
        }
        
    });


const compare  = (a,b) => {
    console.log("ENTRO EN EL SORT ",a.inicio - b.inicio)
    if(a.inicio < b.inicio) {
        return -1 
    }
    
    if (a.inicio > b.inicio) {
        return 1
    }

    return 0
}

