console.log('Hola :)');

/* Tipos de datos
    Primitivos: boolean (t|f), number (int|dec), stringo ('texto')
    Complejos: array {a,b,c,d} , objetos {key: value}
*/

/* Variables: referencia o identificador de un valor
    var nombre; <- declarar variables
    var nombre = 25; <- declarar variable inicializada
    edad = true; <- reasignacion 
        el nombre de la variable debe cumplir con las siguientes reglas:
            - no debe iniciar con numero ni caracteres especiales, a excepcion del $ (1ejemplo, #ejemplo)
            - no debe haber caracteres especiales en el nombre (ejemplo%5)
            - pueden contener el _ ( _ejemlo, ejemplo_ , ejemplo_tres )
            - en los alcances de sentencias que no son operaciones (if,else,for,while) no deben repetirse los nombres dentro de un alcance
*/


// Declarar variables e imprimir su valor en consola
var nombre = "Susana", apellidos = "Enriquez Godina", sexo = "Femenino";
var fechaNacimiento = new Date('2001,03,03');
var edad = 20;

console.log("Mi nombre es " + nombre + " " + apellidos + ", naci el " + fechaNacimiento +
            ", tengo " + edad + " años y mi sexo es " + sexo);




// Funciones: serie de pasos para lograr algo
// Declarar una funcion que muestre en la consola el nombre de una persona y su fecha de nacimiento
function NombreFuncion(nombre, fechaNac){
    console.log("El nombre es: " + nombre + " y nacio el: " + fechaNac);
};

NombreFuncion("Susy Enriquez", new Date('2001,03,03')); 


// Declarar la funcion suma que toma de parametros 3 numeros y regresa de resultado la suma de estos
function suma(a,b,c){
    return a+b+c;
}

var resultado = suma(10,-2,3); 
console.log(resultado);




/* Array: listas indexadas, comienan desde 0 
    var lista =[];  |  var lista = new Array();   <- lista sin datos */
var numerosPares= [2,4,6,8,10,12,14,16];
numerosPares.push(18); // <- agrega el 18 al final de la lista
console.log(numerosPares[3]);


/* Objetos: representaciones de algo, abstraccion de algo en codigo
    var objeto = {key: value} */
var persona = {
    nombre: "Susy",
    edad: 20,
    caminar: function(){
        console.log('Caminando...')
    },
    mostrarInfo: function(){
       console.log(this.nombre);
       console.log(this.edad);
    }
};

persona.nombre = 'Asi se cambia el nombre';
persona.caminar();
persona.mostrarInfo();




// Operadores condicionales
var condicion = 5>10; // false
condicion = 10 == 11; // false
condicion = 10 == 10; // true
condicion = 10 == '10'; // true
condicion = 10 === '10'; // false
condicion = 15 != 10; // true
condicion = 15 != '15' // false
condicion = 15 !== '15' // true
console.log("Condicion: " + condicion);





// Sentencias selectivas
// if-else
// switch 

var persona = {
    edad: 26,
    estatura: 171,
    problemaVista: 'miopia'
};

var mayorEdad = persona.edad >17;
var estaturaMinima = persona.estatura > 164;
var tieneproblemasDeVision = persona.problemaVista !== false;

if (mayorEdad && estaturaMinima && !tieneproblemasDeVision){
    console.log('Esta persona puede aplicar al servicio militar');
} else {
    console.log('Esta persona sera un civil para siempre');
};




/* Crear un objeto que repressente un pastel, describiendo las propiedades para:
    - Tipo de pan (consistencia)
    - Color de pan
    - Sabor pan 
    - Sabor de betun
    - TieneDecoracion: 'frutas con chocolate'
    - Peso
    - Tamaño


Hacer una seleccion de pasteles:
 - Si el pastel es de chocolate y tres leches, imprimir "Es el favorito de Kevin"
 - Si es chocolate, de brownie, imprimir "Es el favorito de AnaLucia"
 - Si es de pan integral, con betun de zanahoria, imprimir "Es el favorito del apa de Analucía"
 - Si es de tres leches y fresa, imprimir "Es el favorito de Susy"
*/

var pastel = {
    tipoPan: 'tres leches',
    colorPan: 'blanco',
    saborPan: 'vainilla', 
    saborBetun: 'queso' ,
    decoracion: 'fresas',
    peso: 800,
    tamaño: 'grande'
}

if ( pastel.saborPan == 'chocolate' && pastel.tipoPan == 'tres leches'){
    console.log('Es el favorito de Kevin');
} else if( pastel.saborPan == 'chocolate' && pastel.tipoPan == 'brownie'){
    console.log('Es el favorito de Analucia');
} else if( pastel.tipoPan == 'integral' && pastel.saborBetun == 'zanahoria'){
    console.log('Es el favorito del apa de Analucia');
} else if( pastel.tipoPan == 'tres leches' && pastel.decoracion == 'fresas'){
    console.log('Es el favorito de Susy');
} else {
    console.log('No es el favorito de nadie :(')
}

console.log(typeof pastel.peso); //typeof regresa el tipo de dato inferido de una variable o propiedad
if ( pastel.hasOwnProperty('decoracion')){ //saber si tiene una propiedad
    console.log('Este pastel tiene la propiedad decoracion con el valor: ' + pastel.decoracion);
} else{
    console.log('Este pastel o no tiene la propiedad decoracion o es falsa')
}




// switch
var version = 'v'; //'r', 'a', 'b', 'v'
if (version === 'v'){
    console.log( 'Esta version es una versio nueva')
} else if (version === 'r'){
    console.log( 'Esta es la version base que se vende')
} else if (version === 'a'){
    console.log('Esta es la version experimental')
} else if (version === 'b'){
    console.log('Esta es la version de prueba')
} else{ console.log('No conozco esta version :(')}

switch(version){
    case "v":
        console.log( 'Esta version es una version nueva');
        break;
    case "r":
        console.log( 'Esta es la version base que se vende');
        break;
    case "a":
        console.log('Esta es la version experimental');
        break;
    case "b":
        console.log( 'Esta es la version de prueba')
    default: 
        console.log( 'No conozco esa version :(');
        break;
};



// Definir diferentes marcas de smartphones y dependiendo de cada marca, mostrar una frase relacionada a ella
var marca = 'Samsung';
switch (marca) {
    case 'Apple':
        console.log('Calidad - no dan cargador:(');        
        break;
    case 'Samsung':
        console.log('Calidad, buena camara - estos tampoco:(');
        break;
    case 'Xiaomi':
        console.log('Calidad-Humildad-Precio');
        break;
    case 'Asus':
        console.log('Robustos y gamers');
        break;
    case 'Huawei':
        console.log('Calidad, buen precio');
        break;
    case 'Oppo':
        console.log('Futuristas e innovadores');
        break;
    case 'HTC':
        console.log('Calidad, precio:)');
        break;
    default: 
        console.log('No conozco esa marca');
        break;
}





// Ciclos
// for - contadores
// while - bucles
// do while - bucle que ejecuta minimo 1 vez la instruccion

var multiplos5 = [5,10,15,20,25,30];
for (var i = 0; i < multiplos5.length; i++) {
    const numero = multiplos5[i];
    console.log(numero);
}


var encontreUnOnce = false;
var numero = 1;
while (encontreUnOnce) {
    if(numero % 11 === 0){
        ecnontreUnOnce = true;
    }
    numero++;
}
console.log('Hasta que termine el while llego aqui :)');


do{
    // Se hace algo minimo 1 vez
} while (!encontreUnOnc);