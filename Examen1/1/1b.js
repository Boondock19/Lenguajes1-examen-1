
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
