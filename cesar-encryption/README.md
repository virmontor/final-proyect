#Pseudocódigo

Cifrado cesar

1) Crear un programa que pida por medio de un prompt una frase al usuario y
devuelva el mismo mensaje encriptado segun el algoritmo de cesar, con el
parametro de desplazamiento de 33 espacios hacia la derecha

Consideraciones Específicas

Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
El usuario no debe poder ingresar un campo vacío o que contenga números

1. Solicitar una respuesta por medio de un prompt
 1.2 Avanzar sólo si el usuario ingresa string sin espacios en mayúsculas y minúsculas,
 mediante TolowerCase.
 1.3 Si ingresa otro caracter, return alert "¡Ingresa sólo letras sin espacios!"
 1.4 Preguntar por medio de un prompt si requiere cifrar o descifrar ...?

 ya habiendo validado los requisitos, si elige cifrar continuamos con el siguiente proceso:

   1. mediante un ciclo for recorremos la longitud del string ingresado para obtener su codiGO ASCII  

2. Devolver la misma respuesta del usuario pero encriptado al algoritmo de cesar,
con el parametro de desplazamiento de 33 espacios a la derecha.

  2.1 Crear función cipher
