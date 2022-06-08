
/**
 * La siguiente funcion manejara la potencia modulada
 * con 3 enteros no negativos
 * @param {int} a enter
 * @param {int} b 
 * @param {int} c entero que debe ser >= 2
 */

export const potenciaModulada = (a,b,c) => {
    if(a < 0 || b < 0 || c < 2 ) {
        throw Error("Los valores de a y b deben ser mayores que 0 y c debe ser mayor o igual a 2")
    }

    let result;

    if (b == 1) return 1

    /**
     * En JS
     */
    result = ((a%c)*(a**(b-1)%c)) % c

    return result
}

/* 
    Matrices hardcodeadas en la funcion de dimension NxM y MxP
    resultando en matriz NxP
*/

export const matrix = (N,M,P) => {   
    // let N = 3
    // let M = 4
    // let P = 2
    
    // Generando espacio de 1D para las matrices
    let matrix1 = Array(N)
    let matrix2 = Array(M)
    let matrixResult = Array(N)

   // Generado espacio  de 2D para las matrices
   
    for(let i = 0; i < matrix1.length ; i++) {
        matrix1[i]= Array(M) 
        matrixResult[i]= Array(P)
    }

    for(let i = 0; i < matrix2.length ; i++) {
        matrix2[i]= Array(P) 
    }


    // valores para llenar aleatoriamente las matrices
    let minimum = 1
    let maximun= 9 

    // Llenamos con valores los espacios de las matrices
    console.log('')
    console.log(`Matrix NxM / ${N}x${M}`)
    for(let i = 0; i < N ; i++) {
        let str = ""
        for(let j = 0; j < M ; j++) {
            matrix1[i][j] = getRandomIntInclusive( minimum , maximun)
            str = str + `${matrix1[i][j]}  ` 
        }
        console.log(`${str}`)    
    }
    console.log("")
    console.log(`Matrix MxP / ${M}x${P}`)
    for(let i = 0; i < M ; i++) {
        let str = ""
        for(let j = 0; j < P ; j++) {
            matrix2[i][j] = getRandomIntInclusive( minimum , maximun)
            str = str + `${matrix2[i][j]}  ` 
        }
        console.log(`${str}`)    
    }

    // Debemos llenar la martiz con 0 , de lo contrario seran undefined con numeros

    for(let i = 0; i < N ; i++) {
        for(let j = 0; j < P ; j++) {
            matrixResult[i][j] = 0
            
        }      
    }

    // Multiplicacion de las matrices , matrix1 y matrix2
    for(let i = 0; i < N ; i++) {
        let str = ""
        for(let j = 0; j < P ; j++) {
            for(let k = 0; k < M; k++){
                
                matrixResult[i][j] += (matrix1[i][k] * matrix2[k][j])
            }
        }
        console.log(`${str}`)    
    }

    console.log('')
    console.log(`Matrix resultante  NxP / ${N}x${P}`)
    for(let i = 0; i < N ; i++) {
        let str = ""
        for(let j = 0; j < P ; j++) {
            str = str + `${matrixResult[i][j]}  `     
        }
        console.log(`${str}`)    
    }
}

// Cortesia de la documentacion de JS
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}