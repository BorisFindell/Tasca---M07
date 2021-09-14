// Exercici 8

//VARIABLES

var val1 = null;
var val2 = null;
var operador = null;
var result = null;


//LISTENERS

document.getElementById("un").addEventListener("click", function(){
  addNum(1);
})
document.getElementById("dos").addEventListener("click", function(){
  addNum(2);
})
document.getElementById("tres").addEventListener("click", function(){
  addNum(3);
})
document.getElementById("quatre").addEventListener("click", function(){
  addNum(4);
})
document.getElementById("cinc").addEventListener("click", function(){
  addNum(5);
})
document.getElementById("sis").addEventListener("click", function(){
  addNum(6);
})
document.getElementById("set").addEventListener("click", function(){
  addNum(7);
})
document.getElementById("vuit").addEventListener("click", function(){
  addNum(8);
})
document.getElementById("nou").addEventListener("click", function(){
  addNum(9);
})
document.getElementById("zero").addEventListener("click", function(){
  addNum(0);
})
document.getElementById("sum").addEventListener("click", function(){
  addOp('+');
})
document.getElementById("rest").addEventListener("click", function(){
  addOp('-');
})
document.getElementById("mult").addEventListener("click", function(){
  addOp('x');
})
document.getElementById("div").addEventListener("click", function(){
  addOp('/');
})
document.getElementById("clear").addEventListener("click", function(){
  clear();
})
document.getElementById("igual").addEventListener("click", function(){
  resultat(val1, operador, val2);
  val2 = null;
  val1 = result;
})


//FUNCIÓ ADDNUMBER

function addNum(num) {
  if (val1 == null || operador == null) {
    if (val1 == null) {
      val1 = val1 + num    
      document.getElementById("usu-op").innerHTML = val1
    }
    else {
      val1 = parseInt(val1 + "" + num)
      document.getElementById("usu-op").innerHTML = val1
    }
  };
  if (val1 != null && operador != null) {
    if (val2 == null) {
      val2 = val2 + num 
      document.getElementById("usu-op").innerHTML = val1 + '' + operador + '' + val2
    }  
    else {
      val2 = parseInt(val2 + "" + num)
      document.getElementById("usu-op").innerHTML = val1 + '' + operador + '' + val2
    }
  }
};


//FUNCIÓN ADD OP

function addOp(op) {
  if (val1 != null) {
    operador = op
    document.getElementById("usu-op").innerHTML = val1 + '' + op
  }
}

//FUNCIÓ DE LA CALCULADORA

function resultat(val1, operador, val2){
    if (!isNaN(val1) && !isNaN(val2)){
      if (operador == '+'){
        result = (val1 + val2)
          document.getElementById("res").innerHTML = result
      }
      else if (operador == '-') {
        result = (val1 - val2)
        document.getElementById("res").innerHTML = result
      }
      else if (operador == 'x') {
        result = (val1 * val2)    
        document.getElementById("res").innerHTML = result
      }
          else {(operador == '/')
            if (val1 == 0 && val2 == 0) {
              console.log('¡No es posible realizar esta operación!')
              document.getElementById("res").innerHTML = '¡No es posible realizar esta operación!'
            }  
            else {
            result = (val1 / val2) 
            document.getElementById("res").innerHTML = result
            }
          }
    }
    else 
      console.log('Uno o más elementos no son válidos')
}

//FUNCIÓN CLEAR

function clear() {
  val1 = null;
  val2 = null;
  operador = null;
  document.getElementById("usu-op").innerHTML = ""
  document.getElementById("res").innerHTML = ""
}