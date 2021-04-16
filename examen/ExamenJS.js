// 1. Primitivos: boolean (t|f), number (int|dec), string ('texto')r
var boleano = true;
var numero = 123;
var texto = "Este es un String";


// 2. Complejos: array {a,b,c,d} , objetos {key: value}
var arregloNumeros = [0,1,2,3,4,5,6,7,8,9];
var objeto = {
    color: "morado",
    tamaño: 10,
    examen: true
};


// 3. Funcion
function MostrarMensaje(code, number, description) {
    console.log(code + number);
    console.log(description);
};
MostrarMensaje("user-not-found: ", 404, "The requested user could not be found");


// 4. 
var nombreUsuario = "SusyEnriquez", tipoUsuario = "regular" , operacion = "eliminar"
switch (tipoUsuario) {
    case "admin":
         console.log("Permisos otorgados para: " + nombreUsuario);
        break;

    case "colaborador":
        if(operacion == "lectura" | operacion == "edicion" | operacion == "mover"){
            console.log("Permisos otorgados");
        } else if(operacion == "creacion" | operacion == "eliminar") {
            console.log("Permisos denegados para: " + nombreUsuario);
        }
        break;

    case "regular":
        if(operacion == "lectura"){
            console.log("Permisos otorgados para: " + nombreUsuario);
        } else {
            console.log("Permisos denegados para: " + nombreUsuario);
        }
        break;

    default:
        console.log("No se reconoce tipo de usuario");
        break;
}


// 5. 
var numbers = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < numbers.length; i++) {
    const numero = numbers[i];
    
    if (numero % 2 == 0){
        console.log("Numero: " + numero + " es par" );
    } else{
        console.log("Numero: " + numero + " es impar");
    }
};


// 6.
var transacción = {
    numeroCuenta: 345678201814,
    cuentaDestino: 86529292614,
    importe: 1000,
    titular: "Kevin",
    titularDestino: "Susy",
    fechaHora: new Date
};
console.log(transacción);


// 7. 
var compañias = [
    {
        nombre: "Samsung",
        paisOrigen: "Seúl, Corea del Sur",
        modelosPrincipales: ["Galaxy S21 Ultra","Galaxy Note 10"]
    },
    {
        nombre: "Samsung",
        paisOrigen: "Seúl, Corea del Sur",
        modelosPrincipales: ["Galaxy S21 Ultra","Galaxy Note 10"]
    }
];
console.log(compañias)


// 8. 
var lista = [ 'A', 'B', 'C' ];
lista[3] = 'D';
lista.push('D');
console.log(lista)


// 9.
console.log(compañias[compañias.length-1].nombre 
    + ", Pais: " + compañias[compañias.length-1].paisOrigen 
    + ", Modelos: " + compañias[compañias.length-1].modelosPrincipales)



// 10. 
function GenerarObjeto(nombre, apellidos, edad) {
    var objeto = {
        name: nombre,
        lastName: apellidos,
        age: edad
    }
    console.log(objeto);
}
GenerarObjeto("Susana", "Enriquez Godina", 20);


// 11.
/* var express = require('express');
const app = express();

app.get('/hello', async (req, res) => {
    res.send("Hola! :)");
});

app.listen(678); */


// 12.
var doce = require("./utils.js");
console.log(doce(2001));


// 13.
/*app.use(cookieParser());
res.cookie("SPGG", desarrolla.software);*/


// 14.
/* 
query -> localhost:678/query?filtro1=valor1
        router.get("/query", async (req,res) => { })


params -> localhost:678/9876548
        router.get("/:params", async (req,res) => { })


body -> localhost:678/body
    {
        key: "value",
        key1: "value1",
        key2: "value2 "
    }


        router.post("/body, async (req,res) => { }) 
*/


// 15. Diferencias
/* Igualdad e Identidad: 
    El operador de igualdad solo verifica que sea el mismo valor, sin importar el tipo de dato
    El operador de identidad verifica que los datos sean exactamente iguales, tanto en tipo como en valor */
var condicion = 10 == '10'; // true
    condicion = 10 === '10'; // false

/* No igual y No identico: 
    El operador de no igual solo verifica el valor, sin importar el tipo de dato
    El operador de no identico verifica el valor y el tipo de dato */
    condicion = 15 != '15' // false
    condicion = 15 !== '15' // true


// 16.
var codigo = 871; 
switch (codigo) {
    case 15:
        console.log("Error de escritura");
        break;

    case 22:
        console.log("Archivo no encontrado");
        break;

    case 320:
        console.log("No se puede acceder a la unidad");
        break;

    case 7890: 
        console.log("El archivo es demasiado grande para la unidad");
        break;
    
    case 871:
        console.log("El archivo está corrupto");
        break;

    case 12:
        console.log("El archivo está bloqueado");
        break;

    default: console.log("No se reconoce el codigo")
        break;
}


// 17.
var contador = 0;
while(contador<500){
    contador = contador + 2;
}


// 18.
Companies.find({
    title: /Softtek Servicios Corporativos S.A. de C.V/i
})



// 19. 
/* 
CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar" (en inglés: Create, Read, Update and Delete), 
que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software. 
    Create -> POST
    Read -> GET
    Update -> PUT
    Delete -> DELETE 
*/

