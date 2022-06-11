
from math import sqrt


class Cuaternario:
    def __init__(self,a,b,c,d):
        self.a = a
        self.b = b
        self.c = c
        self.d = d

    def __add__(self,o):
        if (type(o) is int or type(o) is float) :
            return Cuaternario((self.a + o), (self.b), (self.c) , (self.d))
        else:
            return Cuaternario((self.a + o.a), (self.b + o.b), (self.c + o.c) , (self.d + o.d))

    def __mul__(self,o):
        if (type(o) is int or type(o) is float) :
            return Cuaternario((self.a * o), (self.b), (self.c) , (self.d))
        A = self.a*o.a - (self.b*o.b) - (self.c*o.c) - (self.d*o.d)
        B = self.a*o.b + self.b*o.a + self.c*o.d - self.d*o.c
        C = self.a*o.c - self.b*o.d + self.c*o.a + self.d*o.b
        D = self.a*o.d + self.b*o.c - self.c*o.b + self.d*o.a 
        return Cuaternario(A, B, C , D)

    # ~
    def __invert__(self):
        B = -self.b
        C = -self.c
        D = -self.d
        return Cuaternario(self.a,B,C,D)

     # & , debemos cambiarlo por +(pos) porque no tenemos operador & unario en python
     # y no nos permiten cambiar la cantidad de binario a unario y viceversa.
    def __pos__(self):
        A = self.a**2
        B = self.b**2
        C = self.c**2
        D = self.d**2
        square = sqrt(A+B+C+D)
        return square

    def __str__(self):
        return "{} , {}i ,  {}j ,  {}k".format(self.a,self.b,self.c,self.d)