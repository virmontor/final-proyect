//Solicitando y validando dato de ingreso
var NumberCard=prompt("Ingresa los dígitos de tu tarjeta");

//Ingresar condicional para validar dato correcto
if (typeof(NumberCard)==""){
  alert("Dato incorrrecto");
}
// Convirtiendo dato ingresado a un array
var ArrayNum=[];
  ArrayNum=Array.from(NumberCard);

//Invirtiendo array con reverse
ArrayReverse=ArrayNum.reverse();

//Ubicando números en índice impar y multiplicar por 2
var arraymultiply=[];
  for (var i=0; i<ArrayReverse.length; i++){
    if (i%2!=0){
    arraymultiply.push(ArrayReverse[i]*2);
      } else {
        arraymultiply.push(ArrayReverse[i]);
  }
}
//recorriendo con ciclo for arraymultiply
for (var i=0; i<arraymultiply.length; i++){
  if (arraymultiply[i] >=10){

  }


console.log(arraymultiply);
