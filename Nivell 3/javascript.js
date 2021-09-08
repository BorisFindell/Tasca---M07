// Exercici 8

function calculadora(op, x, y){
    if (!isNaN(x) && !isNaN(y)) {
      if (op == 'suma')
          console.log(x + y)
      else if (op == 'resta')
          console.log(x - y)
      else if (op == 'multiplicacion' || op == 'multiplicacion')
          console.log(x * y)
      else {(op == 'división' || op == 'division')
            if (x === 0 && y === 0)
               console.log('¡No es posible realizar esta operación!')
            else console.log(x / y)
           }
    }
  else {
    console.log('Uno o más elementos no son válidos')
  }
}
    
var resultat = calculadora('resta', 9, 8)


(function () {
  var numbers = document.getElementByClass("numbers");
  var operators = document.getElementByClass("operators");
  var igual = document.getElementByClass("igual");

  numbers.addEventListener("click", asignarValor, false);
  operators.addEventListener("click", asignarOperador, false);
  igual.addEventListener("click", calcular, false);