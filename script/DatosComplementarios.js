// Un objeto es un tipo complejo
// Descibe algo, o sea, es abstraer las caracteristicas de algo de nuestro entorno o contexto a codigo
// Los objetos tienen propiedades
// Los objetos tambien tienen atributos y funciones

// Existen otros tipos de estilos, paradigmas de programacion en JS
// OOP (Object Oriented Programing)
// Es
// TypeScript

function NombreCompleto(nombre, apellido){
    console.log(nombre + " " + apellido)
}

var alumno={
    nombre: "Susy",
    apellido: "Enriquez",
    fechaNacimiento: new Date(2001, 02, 03, 9, 40, 0, 0),
    // new Date() -> fecha actual
    mostrarNombreCompleto: function (){
        console.log(this.nombre + " " + this.apellido)
    },
    mostrarDatos: function(){
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Fecha Nacimiento: " + this.fechaNacimiento);
    }
};

// NombreCompleto(alumno.nombre, alumno.apellido);
alumno.mostrarNombreCompleto();
alumno.mostrarDatos();



//Clase con David :)
var array=[1,2,3,4];
console.log(array.length);

array.forEach(function(elementoArray){
    // console.log(elementoArray);
    var sumatoria;
    sumatoria = sumatoria + elementoArray;
    console.log(this.sumatoria);
});

console.log(array.indexOf(3));


console.log(typeof "texto");
console.log(typeof 25);


var excersiseObject = {
    numberOfChildren: 3,
    partnersName: "Susy",
    geographic: "Mexico",
    location: "Mty",
    jobTitle: "Programmer",

    tellFortune: function(){
        return `You will be a ${this.jobTitle} in ${this.geographic},and married to ${this.partnersName} with ${this.numberOfChildren} kids`;
    }
}
console.log(excersiseObject.tellFortune());

var edad=50
if(edad==30){
    console.log("es igual");
}
else {
    console.log("no es igual");
};


for(i=0; i<3; i++){
    console.log(i);
};

// &&
var nombre="Susana";
var edad=22;
console.log(nombre && edad);

var var1 = false;
var var2 = true;
console.log(var1 && var2);

// ||
var var1 = false;
var var2 = true;
console.log(var1 || var2);

// HTML
function changeTitle(){
    // console.log("El boton funciona :)");
    var tituloQueMeGusta = prompt("¿Cual te gustaria?");
    document.getElementById("title").innerHTML = tituloQueMeGusta;
    alert("Ya te lo voy a cambiar");
}

var myInfo ={
    name: "Daniel",
    age: 18,
    ropa: ["camiseta", "pantalon", "zapatos"],
};
console.log(myInfo.ropa[2]);
myInfo.name="Ruben";
console.log(myInfo.name);

