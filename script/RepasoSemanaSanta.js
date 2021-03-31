



// Declarar variables e imprimir su valor en consola
var nombre = "Susana", apellidos = "Enriquez Godina", sexo = "Femenino";
var fechaNacimiento = new Date('2001,03,03');
var edad = 20;


console.log("Mi nombre es " + nombre + " " + apellidos + ", naci el " + fechaNacimiento +
            ", tengo " + edad + " años y mi sexo es " + sexo);



// Funciones
// Declarar una funcion que muestre en la consola el nombre de una persona y su fecha de nacimiento
function NombreFuncion(nombre, fechaNac){
    console.log("El nombre es: " + nombre + " y nacio el: " + fechaNac);
};

NombreFuncion("Susy Enriquez", new Date('2001,03,03')); 




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
    console.log( 'Esta version es una versio nueva')
} else if (version === 'a'){
    console.log('Esta es la version experimental')
}

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
    default: 
        console.log('No conozco esa version');
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