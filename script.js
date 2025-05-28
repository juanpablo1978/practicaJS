///////////////////////VARIABLES////////////////////////////////////////////

let nombre = 'Juan';
let apellido = 'Andrujovich';

let saludo = "Hola, mi nombre es " + nombre + " " + apellido
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`

let numero = 7.3456

//ARREGLOS
let arreglo = ['hola', 1, 0, [2,3,4]]

arreglo.push(100)

//////////////OBJETOS//////////////////////////////////////
const Juan ={
    apellido: 'andrujovich',
    edad: 46,
    signo: 'leo',
    nacionalidad: 'argentino',
    contacto:{
        tel:32443665,
        mail: 'shshsh@hotmail.com'
    },

}

///////////MODULO//////////////////////////////////////////////////////////////

let modulo = 5 % 2  //cuantas veces entra el 2 en 5... 2 veces, el resto o sobrante es 1, ese es el modulo
let modulo2 = 6 % 2  //cuantas veces entra el 2 en 6... 3 veces, el resto o sobrante es 0, ese es el modulo


///////////////////////PERADOR UNARIO ++ --/////////////////////////////////////////////////
let num = 3;
num++ // el operador unario sumao resta de a una unidad, en este caso el resultado es 4

///////////////////////*OPERADOR LOGICO///////////////////////////////////////////
/*
! NIEGA
|| O ---> EL ENUNCIADO ES VERDADERO SI UNA DE LAS CONDICIONES ES VERDADERA
&& Y ---> EL ENUNCIADO ES VERDADERO ES VERDADERO SOLO SI LAS 2 CONDICIONES SON VERDADERAS
*/


////////////////CONDICIONALES (ESTRUCTURAS DE CONTROL) TOMAR CIERTAS ACCIONES SEGUN CONDICIONES///////////////////////

//if else para comparar o decidir entre 2 opciones

/*const edad = 17;

if (edad >= 17) {
    console.log("puede comprar cerveza");
    
} else {
    console.log('no puede comprar cerveza');
    
}*/

//if else anidados , para decidir segun varias opciones


/*
dejame dormir : 0 hs a 5 hs
buenos dias : 06 h 11 hs
buenas tardes: 12 hs a 18hs
buenas noche : 19 a 23 hs

const hora = 20;

if (hora >= 0 && hora <= 5) {
    console.log('dejame dormir');
    
} else if (hora >= 6 && hora <= 11) {
    console.log('buenos dias');
} else if (hora >= 12 && hora <= 18) {
    console.log('buenas tardes');
} else{
    console.log('buenas noches')
}
*/

////////////////////////////*OPERADOR TERNARIO///////////////////////////////////////////////////////

 /*(CONDICION)? LINEA DE CODIGO QUE SE EJECUTA SI ES VERDADERO : LINEA DE CODIGO SI ES FALSO
 ES UN if else PERO EN UNA SOLA LINEA

const edad = 17;

(edad >= 17) ? console.log('mayor de edad') : console.log('menor de edad');
*/

/////////////////////////////////////SWITCH!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
javascript, amarillo
html, anaranjado
typescript, celeste
css, violeta


let language = 'HTML';

if (language === 'javascript' ) {
    console.log('amarillo');
} else if (language === 'HTML' ) {
    console.log('anaranjado');
} else if (language === 'typescript' ) {
    console.log('celeste');
} else if (language === 'css' ) {
    console.log('violeta');
}
*/

/////////////////////////////CICLO in ---> para recorrer objetos///////////////////////////////////////////

/*const yo = {
    nombre: 'Juan',
    edad: 47
}

for (const propiedad in yo) {
    console.log(propiedad);
    
    
}
 */


///////////////*TRY CATCH PARA MANEJO DE ERROR: TRY VA EL CODIGO A SER EVALUADO, CATCH CAPTURA EL ERROR//////////////////

/*
try {
    soyVariable
    
} catch (error) {
  console.log( `Error en la consola: ${error}`);
  
} finally{
    console.log('siempre se ejecuta');
    
}
 */ 

//////////////////BREAK: ESTIPUILAMOS LA CONDICION Y UTILIZAMOS break PARA CORTAR LA EJECUCION DEL CODIGO.//////////////

/*
const numeros = [1,2,3,4,5,6,7]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
     if (numeros[i] === 5) {
        break
     } 
}
*/

//////////////////////OPERADOR SPREAD//////////////////////////////////////////////////////

/*  (...) en JavaScript (y TypeScript) sirve para expandir
 o copiar, actualizar el contenido de un array, un objeto o incluso pasar elementos de un
  array como argumentos individuales a una función.*/

 /* const array1 = [1,2,3,4]
  const array2 = [5,6,7,8,9]

  const array3 = [...array1, ...array2]

  console.log(array3);

  const frutas1 = ['banana', 'naranja']
  const frutas2 = ['kiwi', ...frutas1, 'manzana']

console.log(frutas2);

const usuario = { nombre: 'Ana', edad: 25 };
const usuarioActualizado = { ...usuario, edad: 26 };

console.log(usuarioActualizado);*/

///////////////////////////////VER FOR EACH!!!!!/////////////////////////////////////////////////

///////////////////////*PORGRAMACION ORIENTADA A OBJETOS/////////////////////////////////////////////

/*
- CLASES: MODELO A SEGUIR 
- OBEJETO: INSTANCIA DE LA CLASE --> (INSTANCIA: COPIA DEL MODELO A SEGUIR)
- ATRIBUTOS: ES UNA CARACTERISITCA O PROPIEDAD DE UN OPJETO (SON VARIABLES DENTRO DE UN OBJETO)
- METODOS: SON LAS ACCIONES QUE UN OBJETO PUEDE REALIZAR--> SON FUNCIONES DENTRO DE UN OBJETO*/

//Imprimir del 1 al 10

/*for (let index = 0; index <= 10; index++) {
    console.log(index);   
}*/

//Imprimir los números pares del 2 al 20
/*
for (let index = 0; index <= 20; index++) {
    if (index % 2 === 0 && index > 0) {
        console.log(index);
    } 
}*/

//Sumar los números del 1 al 5

/*let suma = 0;

for (let index = 0; index <= 5; index++) {
    
    suma = suma + index

    console.log(suma);
    
}*/

//Mostrar los elementos de un array

/*const frutas = ['manzana', 'banana', 'pelon', 'frutilla'];

for (let index = 0; index < frutas.length; index++) {
    
    console.log(frutas[index]); 
}*/


//////////////////////////OBJETO math.//////////////////////////////////////////////////////////

/*
const numero = -5.7;

console.log(Math.abs(numero));   // 5.7
console.log(Math.floor(numero)); // -6
console.log(Math.ceil(numero));  // -5
console.log(Math.round(numero)); // -6
console.log(Math.PI);            // 3.141592653589793
console.log(Math.random());      // número aleatorio entre 0 y 1
*/

/*El OPERADOR DE CORTOCIRCUITO con OR (||) se usa
 para devolver el primer valor "true" (verdadero en contexto booleano)
  o, si no hay ninguno, el último valor.
  Y el operador && va a buscar valores que tiendan a "false"*/


  //OPERADOR ||

 /* const saludar = (nombre)=>{                //paso nombre como parametro
    nombre = nombre || 'lalalala'
    console.log(`Hola ${nombre}`);                                                  
}

  saludar('Juan'); //si nombre esta definido, pasa nombre
  saludar();        //de lo contrario pasa 'lalalala' (en este caso, el valor seria un undefines, x eso pinta "lalalala")

  //OPERADOR &&

  const saludar2 = (nombre)=>{                //paso nombre como parametro
    nombre = nombre && 'lalalala'
console.log(`Hola ${nombre}`);            
                                        
}

saludar2('Juan'); //aca el nombre esta definido
saludar2();       //pero como el operador && busca lo tendiente a 'false' va a pintar primero "lalalala"*/

//ALERT - CONFIRM - PROMP (PARA VER EN CONSOLA console.log())

/*let alerta = alert('hola, soy una alerta') //mensaje en el navegador
let confirmacion = confirm('Soy una alerta????') //por si o por no (true o false)
let aviso = prompt('ingrese su nombre') //seria como un imput por pantalla para ingresar datos*/


/********************************************************************************************* */

/*

1) Programa una función que cuente el número de caracteres de una cadena de texto
, pe. miFuncion("Hola Mundo") devolverá 10.*/

/*
const funcionCadena = (cadena="")=>{
if (cadena === "") {
    console.log("Es un string vacio");
} else {
    console.log(`La cadena contiene "${cadena.length}" caracteres`); 
}   
}

funcionCadena('Hola mundo, como estas?')
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
2) Programa una función que te devuelva el texto recortado según el número
 de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

 /*const cadena = 'Hola mundo';

 const cadenaCorta = ()=> { 
   return cadena.substring(0, 5)
 }

 console.log(cadenaCorta());
 */


 const cadenaCorta = (cadena = "", longitud = undefined)=> //omito return y llaves de la funcion
 (cadena === "")? console.log('Es un string vacio') 
                : console.log(cadena.slice(0,longitud));
 

// cadenaCorta("Hola mundo", 4);

 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*
 3) Programa una función que dada una String te devuelva un Array de textos 
 separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá
  ['hola', 'que', 'tal'].
  */

  const stringArray = (cadena = '', separador = undefined)=> 
    (cadena === "")? console.log('es un string vacio')
                : console.log(cadena.split(separador));


  //stringArray("Hola que tal", " ");
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*
  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
   devolverá Hola Mundo Hola Mundo Hola Mundo.
   */

  

  /* const repeatString = (saludar = "", repeticion = undefined)=> {
    (saludar === "") ? console.log("Ingresa un string") 
                     : console.log(saludar.repeat(repeticion));
                     
   }*/

   //repeatString('Hola mundo ', 3);

   const repeatString = (saludar = "")=> {
        for (let index = 0; saludar <= 3; index++) {
            saludar[index];
            return saludar
        }
                     
   }

    //console.log(repeatString("Hola mundo"));
   
   

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /*
   5) Programa una función que invierta las palabras de una cadena de texto,
    pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const textoInvertido = (texto = "")=>{
  return  texto.split("").reverse().join("")
}

//console.log(textoInvertido("hola amiguito, como estas?"));

 /*
 6) Programa una función para contar el número de veces que se repite
  una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
   devolverá 2.   
*/

//convirtiendo a array el string?

const textRepeat = (texto = "")=> {
    return texto.includes('hola')
}

//console.log(textRepeat("hola mundo adios mundo", "mundo"));

/*
 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
  (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.  
*/

const palindro = (texto = '')=>{
return texto === (textoReverso = texto.split("").reverse().join(""));

}

//console.log(palindro("hfghfjgjfj"));

/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

const texto = "xyz1, xyz2, xyz3, xyz4, y xyz5";

const elimCaracter = ()=>{
    return texto.substring(3,4)
}

console.log(elimCaracter());

// Ejercicio 1: Contar hasta 50 de 5 en 5
// Imprimí en consola los números del 0 al 50 de 5 en 5 usando while.

/*let index = 1;
let resto = 0;
let divisor = 5;

while (index <= 50) {
    if (index % divisor === resto) {
       // console.log(index);
    }
    index++
}*/
/*---------------------------------------------------------------------------------------------------------------*/
// Ejercicio 2: Mostrar letras de una palabra una por una
// Usá un while para mostrar en consola cada letra de la palabra "programar".

/*
let texto = "programar";
let index = 0;
texto = texto.split("")

while (index < texto.length) {

    console.log(texto[index]);
    index++
}
*/
/*-------------------------------------------------------------------------------------------------------------------*/

// Ejercicio 3: Multiplicar cada número del array por 3
// Dado un array como [1, 4, 5, 6], usá for para imprimir el triple de cada número.

/*const array = [1, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    console.log(array[index] * 3);
}*/

/*--------------------------------------------------------------------------------------------------------------------*/
// Ejercicio 4: Sumar solo los números pares del 1 al 100
// Usá un for y un if para sumar solo los pares (2, 4, 6, …) hasta llegar a 100.
/*
suma = 0;

for (let index = 0; index <= 100; index++) {
       suma = suma + index
       if (suma % 2 === 0) {
        console.log(suma);
    }
}
*/

/*-------------------------------------------------------------------------------------------------------------------------*/
// Ejercicio 5: Mostrar los números del array hasta encontrar un número mayor a 30
// Usá un while para mostrar los números de [2, 4, 8, 25, 32, 1, 0] hasta que encuentres uno mayor a 30. Ahí cortás.

/*
const arregloN = [2, 4, 8, 25, 32, 1, 0];
index = 0;

while (index < arregloN.length) {
if (arregloN[index] >= 30) break
    console.log(arregloN[index]);
  index++
}
*/

/*------------------------------------------------------------------------------------------------------------------*/
// Ejercicio 6: Contar cuántas vocales tiene una palabra
// Dado un string como "hola mundo", contá cuántas letras son vocales.

/*
let saludaremos = "murcielago";
const vocales = ["a","e","i","o","u"];
let acc = 0;

for (let index = 0; index < saludaremos.length; index++) {

    for (let i = 0; i < vocales.length; i++) {
        if (saludaremos[index] === vocales[i]) {
            acc = acc + 1;
            
        }
    }
}
console.log(acc);




/*-------------------------------------------------------------------------------------------------------------------*/

// Ejercicio 7: Mostrar los nombres que tengan más de 5 letras
// Dado un array como ["Ana", "Esteban", "Sofía", "Lucas", "Alexander"], mostrá solo los nombres con más de 5 letras.
/*
const nombres = ["Ana", "Esteban", "Sofía", "Lucas", "Alexander"];

for (let index = 0; index < nombres.length; index++) {
    if(nombres[index].length > 5)
  console.log( nombres[index]);
}*/

/*---------------------------------------------------------------------------------------------------------------------*/

// Ejercicio 8: Repetir un mensaje hasta que se escriba "salir"
// Simulá con un while un input del usuario (por ejemplo, con un array de strings), y repetí un mensaje hasta
// que el string sea "salir".
/*
const arreglString = ["hola", "entrar", "chau", "salir", "bien"];

index = 0;

while (index < arreglString.length) {
    if (arreglString[index] === "salir") break;
    console.log(arreglString[index]);
    
    index++
}*/

/*-------------------------------------------------------------------------------------------------------------------*/

// Ejercicio 9: Mostrar tabla de multiplicar de un número del 1 al 10
// Dado un número, imprimí su tabla de multiplicar del 1 al 10 (ej: 3x1 = 3, 3x2 = 6, etc.).

/*
let tabla = 2;

for (let index = 1; index <= 10 ; index++) {
    console.log(`${tabla} x ${index} = ${index * tabla}`);
}
*/













