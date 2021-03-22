var elementoA="Oxigeno", elementoB="Azufre", elementoC="Cobre", elementoD="Plata";

function Mezcla(elemento1, elemento2){
    if( elemento1 === "Azufre" && elemento2 === "Cobre" || elemento1 === "Cobre" && elemento2 === "Azufre"){
        console.log(elemento1 + "+" + elemento2 + ": Huele raro y se ve verde azulado");
    } else if ( elemento1 === "Azufre"  && elemento2 === "Plata" || elemento1 === "Plata" && elemento2 === "Azufre"){
        console.log(elemento1 + "+" + elemento2 + ": Huele raro y se ve cromado");
    } else if  ( elemento1 === "Oxigeno"  && elemento2 === "Cobre" || elemento1 === "Cobre" && elemento2 === "Oxigeno"){
        console.log(elemento1 + "+" + elemento2 + ": Se ve como la estatua de la libertad");
    } else if ( elemento1 === "Oxigeno"  && elemento2 === "Plata" || elemento1 === "Plata" && elemento2 === "Oxigeno"){
        console.log(elemento1 + "+" + elemento2 + ": Ya le dañamos la joyeria a la abuela");
    } else if ( elemento1 === "Plata"  && elemento2 === "Cobre" || elemento1 === "Cobre" && elemento2 === "Plata"){
        console.log(elemento1 + "+" + elemento2 + ": Eso es joyeria rara y cara");
    } else if ( elemento1 === "Azufre"  && elemento2 === "Oxigeno" || elemento1 === "Oxigeno" && elemento2 === "Azufre"){
        console.log(elemento1 + "+" + elemento2 +  ": Es esto un agua termal mortal?");
    } else if( elemento1 === elemento2){
        console.log(elemento1 + "+" + elemento2 + ":" + elemento1 + " -> Si mezclas lo mismo no cambia")
    }else{
        console.log("No se identifica la mezcla");
    }
}

Mezcla(elementoA, elementoB);
Mezcla(elementoD, elementoC);
Mezcla(elementoA, elementoC);
Mezcla(elementoB, elementoC);
Mezcla(elementoB, elementoD);
Mezcla(elementoA, elementoD);
Mezcla(elementoB, elementoA);
Mezcla(elementoD, elementoA);
Mezcla(elementoC, elementoA);
Mezcla(elementoC, elementoB);
Mezcla(elementoB, elementoB);
console.log("______________________________________")





// ACTIVIDAD 1.1
var listaSuper=[
    {
        nombre: "Tortillas",
        departamento: "alimentos",
        precio: 10,
        pesoKg: 1
    },
    {
        nombre: "Jabon",
        departamento: "limpieza",
        precio: 20,
        pesoKg: .5
    },
    {
        nombre: "Tomate",
        departamento: "alimentos",
        precio: 50,
        pesoKg: 2
    },
    {
        nombre: "Pan",
        departamento: "alimentos",
        precio: 100,
        pesoKg: 1
    },
    {
        nombre: "Aguacate",
        departamento: "alimentos",
        precio: 200,
        pesoKg: 1
    },
    {
        nombre: "Shampoo",
        departamento: "belleza",
        precio: 70,
        pesoKg: .800
    }
];

console.log("Elementos con un precio mayor a 50:")
for (let i = 0; i < listaSuper.length; i++) {
    const element = listaSuper[i];
    if (element.precio>50){
        console.log(element);
    }
};
console.log("________________________________________")



var alimentos = [];
var belleza = [];
var limpieza = [];
for (let i = 0; i < listaSuper.length; i++) {
    const element = listaSuper[i];
    if (element.departamento == "alimentos"){
        alimentos.push(element);
    } else if (element.departamento == "belleza"){
        belleza.push(element);
    } else {
        limpieza.push(element);
    }
};
console.log("Lista de alimentos: ");
console.log(alimentos);
console.log("Lista de belleza: ");
console.log(belleza);
console.log("Lista de limpieza: ");
console.log(limpieza);
console.log("________________________________________");


var total = 0;
for (var i = 0; i < listaSuper.length; i++) {
    const element = listaSuper[i];
    
    if (element.departamento === "belleza" && element.precio>50){
    element.precio = element.precio*.9;     
    } else if (element.departamento === "alimentos" && element.precio>20){
       element.precio = element.precio*.95;
    }
    total = total + element.precio;
}

    if (total>300){
        listaSuper.push({nombre: "Regalo", departamento: "jueguetes", precio: 0, pesoKg: 0});   
    }
console.log(listaSuper);