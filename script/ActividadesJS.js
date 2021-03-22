//ACTIVIDAD 1
console.log("Susana Enriquez");

//ACTIVIDAD 2
saludar("Susy");
function saludar(nombre){
    console.log("Hola " + nombre + " :)");
};

//ACTIVIDAD 3
var listaComida=["Empanadas Veracruzanas", "Spaguetti", "Hamburguesa", "Burritos", "La capirotada"];
comida(listaComida);
function comida(miLista){
    console.log("Mi comida favorita es: " + miLista[0] + " y la que menos me gusta es: " + miLista[4]);
};

//ACTIVIDAD 4
Act4();
function Act4(){
    var alumnos = [{
        nombre: "Susy",
        apellido: "Enriquez",
        edad: 20,
        sexo: "femenino"
    },
    {
        nombre: "Camila",
        apellido: "Torres",
        edad: 22,
        sexo: "femenino"
    },
    {
        nombre: "Andy",
        apellido: "Duran",
        edad: 20,
        sexo: "femenino"
    }];
    console.log("Nombre completo: " + alumnos[0].nombre + " " + alumnos[0].apellido);
    console.log("Nombre completo: " + alumnos[1].nombre + " " + alumnos[1].apellido);
    console.log("Nombre completo: " + alumnos[2].nombre + " " + alumnos[2].apellido);
};