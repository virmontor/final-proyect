//Solicitando y validando dato de ingreso
var numberCard=prompt("Ingresa los dígitos de tu tarjeta");

var isValidCard = function(num){

//Ingresar condicional para validar dato correcto
if (typeof(numberCard)===""){
  alert("Dato incorrrecto");
}
// Convirtiendo dato ingresado a un array
var ArrayNum=[];
ArrayNum=Array.from(numberCard);

//Invirtiendo array con reverse
  ArrayReverse=ArrayNum.reverse();

//Ubicando números en índice impar y multiplicar por 2
var arraymultiply=[];
var ArrayResult=[];
  for (var i=0; i<ArrayReverse.length; i++){
    if (i%2!=0){
      arraymultiply.push(ArrayReverse[i]*2);
    }
        if (arraymultiply[i]>=10){
          ArrayResult.push(arraymultiply[i]-9);
       } else {
          arraymultiply.push(ArrayReverse[i]);
  }
}
//recorriendo con ciclo for arraymultiply
}

isValidCard(numberCard)
