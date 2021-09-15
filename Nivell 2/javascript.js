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
    
var resultat = calculadora('división', 10, 2)