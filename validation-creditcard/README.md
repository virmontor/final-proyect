Pseudocódigo

Validación de número de tarjeta de crédito

1) Mediante un prompt, solicitar al usuario sus 16 dígitos de la
tarjeta de crédito.
Si el usuario ingresa un dato incorrecto (dato diferente a número o <> de 16 dígitos o vacío).
Indicar error mediante un alert y pedir nuevamente que ingrese el dato correcto.
Si el usuario ingresa el dato correcto, continuar el proceso.

2) Al ingresar dato correcto

```
	2.1 Convertir dato en arreglo
	2.2 Mediante una función colocar los elementos del arreglo a la inversa
	2.3 multiplicar por 2 a los números que tengan posición en número par
	2.4 Si el resultado es mayor o igual a 10, entonces sumar los dígitos del resultado
	2.5 Pero si no es mayor o igual a 10,  o su posición es impar entonces ingresar directamente el resultado dentro del arreglo
	2.6 Sumar elementos del arreglo
    2.7 Dividir resultado entre 10
	2.8 Si el residuo es igual a 0, mostrar en alert “Número de tarjeta válido”
	2.9 Si el resultado es diferente a 0 entonces mostrar alert “Número de tarjeta invalido”
```
  Fin de proceso

  ![diagrama-validacion-tc](https://fotos.subefotos.com/aace461d7f3100bff345336d0b746667o.jpg)
