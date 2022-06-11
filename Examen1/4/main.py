from cuaternarios import Cuaternario


print("Por favor ingresa el valor del cuarternario (a,b,c,d) y decimales separados por . (Ejemplo 25.4)")
print("Ingresalos separados por un espacio en blanco , a b c d  ")
strCuaternario1 = input("Primer cuaternario ")

strArray1 = strCuaternario1.split(" ")


cuar = Cuaternario(float(strArray1[0]),float(strArray1[1]),float(strArray1[2]),float(strArray1[3]))
print(cuar)

strCuaternario2 = input("Segundo cuaternario ")

strArray2 = strCuaternario2.split(" ")


cuar2 = Cuaternario(float(strArray2[0]),float(strArray2[1]),float(strArray2[2]),float(strArray2[3]))
print(cuar2)

cuar3 = cuar + cuar2
cuar3Negate = ~cuar3

print("Cuaternario resultante de la suma :  \n", cuar3)

print("Cuaternario resultante de la conjugada de {}  es {} \n".format(cuar3,cuar3Negate))

cuar4 = Cuaternario(0.0,1.0,2.0,3.0)
cuar4Cuadrado = cuar4*cuar4
modulo = +cuar4Cuadrado

print('El doble de {0} es :   {1} \n'.format(cuar4,cuar4Cuadrado))
print('El modulo de {0} es :   {1} \n'.format(cuar4Cuadrado,modulo))

print("Probando operaciones : ")

print("Multiplicacion {0} * {1} + {2}  \n".format(cuar2,cuar3,cuar))
mult = cuar2 * cuar3
print("Resultado de solo mult  " , mult)
suma = cuar2 * cuar3 + cuar
print("Resultado :  ",suma)

print("(b+b) * (c + ~a) \n")

print("Resultado primera suma , ",cuar2 + cuar3)

print("Resultado segunda suma con negado , ",(cuar + ~cuar3))

resul = (cuar2 + cuar3) * (cuar + ~cuar3)

print("Resultado :   ",resul)

print("MODULO de un producto : ")

print("Multiplicacion : ", cuar2 * cuar3)

print("Modulo = : ", )

print("Confirmacion Modulo : ", +Cuaternario(-36.0,6.0,12.0,12.0))

print("Pruebas de cuaternianos con int o floats : \n")

sumaDeModulo = mult + +(cuar2 * cuar3)

print("Resultado de suma normal :  \n", sumaDeModulo)

print("Multipliquemos por 5  \n", sumaDeModulo*5)

print("Suma cuaternario con floats: ", cuar + 3.0 + 7.0)

print("Suma cuaternario con ints:", cuar + 3 + 7)

print("Suma de dos cuaterniones , multiplicado por un modulo de cuaternario: \n ")

print("Suma de dos cuaterniones : ",cuar2+cuar3)

print("Modulo cuaterniones : ",+cuar3)

print("Modulo cuaterniones : ", (cuar2+cuar3) * +cuar3)