
// Enter any texts ( User input)




    console.log("Bienvenido al programa de diagramas de T")
    console.log('Luego de cada accion, se pedira una siguiente')

    // Creando un array para cada uno de los programas a definir
    let arrayOfPrograms = []
    let arrayOfInterpeters = []
    let arrayOfTranslaters = []
  

    process.stdin.on('data', data => {
    
        const dataString = (data).toString()
        const dataArray =dataString.split(" ")
        

        if(dataArray[0] == "DEFINIR") {
            console.log("Recuerda especificar que tipo de programa se debe DEFINIR")
           if(dataArray[1] == "PROGRAMA") {
            
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

                    arrayOfInterpeters.push(newInterpreter)

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

                    arrayOfTranslaters.push(newTranslater)

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

            const nombre = dataArray[1].trim()

            let arrayFiltered = arrayOfPrograms.filter(x => x.nombre == nombre)
            // Existe el nombre? 

            if( !(arrayFiltered.length > 0) ) {
                console.log(`El programa con el ${nombre} no ha sido declarado o definido`)
            } else {

            }
            
            console.log("Entro en EJECUTABLE")
            console.log("Siguiente accion: ")
        }

       
 
        // Salimos del programa
        if (dataArray[0].trim() === 'SALIR') {
            console.log('Terminando el programa ...')
            process.exit()
        }
        
    });


