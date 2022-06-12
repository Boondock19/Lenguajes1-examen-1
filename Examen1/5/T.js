
// Enter any texts ( User input)




    console.log("Bienvenido al programa de diagramas de T")
    console.log('Luego de cada accion, se pedira una siguiente')

    // Creando un array para cada uno de los programas a definir
    let arrayOfPrograms = [{
        nombre: 'LOCAL',
        lenguaje : 'LOCAL'
    }]
    let arrayOfInterpeters = []
    let arrayOfTranslaters = []


  

    process.stdin.on('data', data => {
    
        const dataString = (data).toString()
        const dataArray =dataString.split(" ")
        

        if(dataArray[0].trim() == "DEFINIR") {
            if (dataArray.length < 2) console.log("Recuerda especificar que tipo de programa se debe DEFINIR")
            
           if (dataArray[1] == "PROGRAMA") {
            
            if(dataArray.length < 4) {
                console.log('Faltan argumentos para PROGRAMA')
            } else {
                console.log("Entro en PROGRAMA")
                // Programa con nombre escrito en lenguaje 
                const nombre = dataArray[2]
                
                let arrayFiltered = arrayOfPrograms.filter(x => x.nombre == nombre)
                // Existe el nombre? 
                
                if (arrayFiltered.length > 0) {
                    console.log(`El  nombre ${nombre} ya posee un  programa asociado a el `)
                } else {
                    const lenguaje = dataArray[3].trim()
                    const newProgram = {
                        nombre,
                        lenguaje
                    }
    
    
                    arrayOfPrograms.push(newProgram)
    
                    console.log(arrayOfPrograms)
                    console.log(`Se definio el programa '${nombre}', ejecutable en '${lenguaje}' `)
                }
            }
            
                console.log("Siguiente accion: ")
           }

           if(dataArray[1] == "INTERPRETE") {
                console.log("Entro en INTERPRETE")

                if(dataArray.length < 4) {
                    console.log('Faltan argumentos para INTERPRETE')
                } else {
                    // Interprete escrito en lenguaje base para lenguaje
                    const lenguajeBase = dataArray[2]
                    const lenguaje = dataArray[3].trim()
                    const newInterpreter = {
                        lenguajeBase,
                        lenguaje
                    }

                    if (!existeInterpretador(arrayOfInterpeters,newInterpreter)) {
                        arrayOfInterpeters.push(newInterpreter)
                        console.log(`Se definio un interprete para  '${lenguaje}', escrito  en '${lenguajeBase}' `)
                        
                    }
                    

                    console.log(arrayOfInterpeters)
                }
                
                console.log("Siguiente accion: ")
            }

            if(dataArray[1] == "TRADUCTOR") {
                console.log("Entro en TRADUCTOR ")

                if(dataArray.length < 5) {
                    console.log('Faltan argumentos para TRADUCTOR ')
                } else {
                    // Interprete escrito en lenguaje base para lenguaje
                    const lenguajeBase = dataArray[2]
                    const lenguajeOrigen = dataArray[3]
                    const lenguajeDestino = dataArray[4].trim()
                    const newTranslater = {
                        lenguajeBase,
                        lenguajeOrigen,
                        lenguajeDestino
                    }

                    if (!existeTranslater(arrayOfTranslaters,newTranslater)) {
                        arrayOfTranslaters.push(newTranslater)
                        console.log(`Se definio un traductor para  '${lenguajeOrigen}' hacia '${lenguajeDestino}', escrito  en '${lenguajeBase}' `)
                    }
                    

                    console.log(arrayOfTranslaters)
                }   
               
                console.log("Siguiente accion: ")
            }
            
        }

        // Chequeo de ejcucion de un programa.
        if(dataArray[0] == "EJECUTABLE") {
            /**
             * Solo pueden ser ejecutables si tienen
             * una manera de llegar a lenguaje LOCAL bien sea 
             * a traves de varios traductores o interpretes
             */

             console.log("Entro en EJECUTABLE")
            const nombre = dataArray[1].trim()

            let arrayFiltered = arrayOfPrograms.filter(x => x.nombre == nombre)
            // Existe el nombre? 

            console.log("buscando el nombre",arrayFiltered)

            if( !(arrayFiltered.length > 0) ) {
               return console.log(`El programa con el ${nombre} no ha sido declarado o definido`)
            } else {
                
                const programaEjecutar = arrayFiltered[0]
                if (programaEjecutar.lenguaje === 'LOCAL') return console.log(`Si, es posible ejecutar el programa '${programaEjecutar.nombre}'`)
                
                //Buscamos los interpretes escritos para programaEjecutar.lenguaje
                // Array con todos los interpretadores para programaEjecutar.lenguaje
                const interpretadoresPrograma = arrayOfInterpeters.filter((interpreter) => interpreter.lenguaje === programaEjecutar.lenguaje)
                const interpretadorLocal = {
                    lenguajeBase: "LOCAL",
                    lenguaje: programaEjecutar.lenguaje
                }

                if(existeInterpretador(interpretadoresPrograma,interpretadorLocal)) return console.log(`Si, es posible ejecutar el programa '${programaEjecutar.nombre}'`)

                //Buscamos los traductores escritos para programaEjecutar.lenguaje
                // Array con todos los traductores con origen programaEjecutar.lenguaje
                const traductoresPrograma = arrayOfTranslaters.filter((trans) => trans.lenguajeOrigen === programaEjecutar.lenguaje)

                const traductorLocal =  {
                    lenguajeBase:"LOCAL",
                    lenguajeOrigen:programaEjecutar.lenguaje,
                    lenguajeDestino:"LOCAL"
                }


                if(existeTranslater(traductoresPrograma,traductorLocal)) return console.log(`Si, es posible ejecutar el programa '${programaEjecutar.nombre}'`) 

            


            }
            
            console.log(`No, es posible ejecutar el programa '${nombre}'`)
            console.log("Siguiente accion: ")
        }

       
 
        // Salimos del programa
        if (dataArray[0].trim() === 'SALIR') {
            console.log('Terminando el programa ...')
            process.exit()
        }
        
    });

/**
 * 
 * @param {Objecto que representa una instacia de un interprete} interpreter 
 * @returns true si existe y false en caso contrario.
 */
const existeInterpretador = (arr,interpreter) => {
    return arr.some(inter => (inter.lenguaje === interpreter.lenguaje 
        && inter.lenguajeBase === interpreter.lenguajeBase ))
} 

/**
 * 
 * @param {Objecto que representa una instacia de un traductor} trans
 * @returns true si existe y false en caso contrario.
 */
 const existeTranslater = (arr,translater) => {
    return arr.some(trans => (trans.lenguajeOrigen === translater.lenguajeOrigen 
        && trans.lenguajeDestino === translater.lenguajeDestino 
        && trans.lenguajeBase === translater.lenguajeBase ))
} 