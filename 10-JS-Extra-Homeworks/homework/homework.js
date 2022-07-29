// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 let Matrizmayor = [];
 for(let clave in objeto){
  var newarray = [];
  newarray[0] = clave;
  newarray[1] = objeto[clave] ;
  Matrizmayor.push(newarray) ;
  } return Matrizmayor
 }


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
let newobject = {};
for (i=0;i<string.length;i++){
 if(newobject[string.charAt(i)] === undefined){
  newobject[string.charAt(i)] = 1 ; 
 } else {newobject[string.charAt(i)] = newobject[string.charAt(i)] + 1 }
} return newobject
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let newSMayus = '';
  let newSminus='';
  for(i=s.length-1;i>=0;i--){
  if(s.charAt(i)=== s.charAt(i).toUpperCase()){
  newSMayus = s.charAt(i) + newSMayus                                                                                                                                                                                                                   
  } else {newSminus= s.charAt(i)+newSminus}
}return newSMayus+newSminus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 let Stringnumero = String(numero);
 if (Stringnumero.charAt(0)===Stringnumero.charAt(Stringnumero.length-1)){
  if(Stringnumero.length===3 || Stringnumero.length===2 || Stringnumero.length===1){return 'Es capicua'
}  else {
    for(let i=2;i<Stringnumero.length-1;i++){
      if(Stringnumero.charAt(i) === Stringnumero.charAt(i-1)){continue
      } else {return 'No es capicua'}
      } return 'Es capicua'
  }
 } else {return 'No es capicua'}
} 
 
    


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newstr=''
for(i=0;i<cadena.length;i++){
  if (cadena.charAt(i) ==='a' || cadena.charAt(i) === 'b'|| cadena.charAt(i) === 'c') {
    newstr = newstr 
  } else {newstr=newstr+cadena.charAt(i)}
  } return newstr
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let winner= 0
 for(i=1;i<arr.length;i++){
  if(arr[winner]>arr[i]){winner=winner
  } else {winner=i}
 }
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let union=[] ;
  for(i=0;i<arreglo1.length;i++){
   for(j=0;j<arreglo2.length;j++){
   if(arreglo1[i]===arreglo2[j]){
     union.push(arreglo1[i]);
     break
   }
 }
 } return union
 }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

