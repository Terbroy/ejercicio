//creando una variable
// asignando un valor
// declarar e inicializar
const nacimiento = 1998
//declarar
let palabra


//inicializar 
palabra = "string"


let texto = "hola"

if (texto) {


    // console.log("el texto tiene contenido");
}else{


    // console.log("el texto ESTA VACIO");
}


//arrays
//  indices  0 , 1 ,2 ,3 ,4... 76
const arr = [1 , 2, 3, 4, 5, 1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5,1 , 2, 3, 4, 5, "ultimo elemento"]

//parentesis ()
//corchetes [] --> arrays
//llaves {} --> objetos , separacion
// console.log(arr[arr.length - 1 ]);
//push y pop
arr.push("hola")
arr.pop()

//unshit y shift
arr.unshift("hola")
arr.shift()
// console.log(arr);


arr.includes()

let elementoArr =  arr[4]

// console.log(elementoArr);

//encontrar cuantos numeros 5 hay en mi arreglo
//  1, ini y dec
//2. condicion, limite 
//3. aumento


//1. acceder a cada elemento del arreglo
//2. verficar si el elemento al que accedimos es igual 5
// 3. sumar la cantidad de elementos que son igual a 5
console.log(arr.length);//77
let contador = 0

for(let i = 0; i < arr.length; i++ ){//inicia
    if (arr[i] === 1 ) {
        contador++
    }
}//termina

console.log("hay " + contador + " numeros que son 1");



















