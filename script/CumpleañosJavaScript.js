//Hacer una lista de cumpleañeros
var cumpleañeros = [
    {
        nombre: "Susana Enriquez Godina",
        fecha: "03-03-01",
        imagen: "images/susy.jpg",
        regalos: "un ramo de tulipanes",
        mostrarDetalles: function(){
            console.log("Nombre: " + this.nombre);
            console.log("Fecha de nacimiento: " + this.fecha);
            console.log("Le gustaria de regalo: " + this.regalos);
        }
    },
    {
        nombre: "Kevin Martin del Campo",
        fecha: "14-04-1995",
        imagen: "images/kevin.jpg",
        regalos: "un pastel de chocolate",
        mostrarDetalles: function(){
            console.log("Nombre: " + this.nombre);
            console.log("Fecha de nacimiento: " + this.fecha);
            console.log("Le gustaria de regalo: " + this.regalos);
        }
    }
];

console.log(cumpleañeros.length);
console.log(cumpleañeros);
console.log(cumpleañeros[0]);
cumpleañeros[0].mostrarDetalles();




// Sentencias condicionales
var edad = 18;
var tipoDeEdad = edad > 17? "Mayor de edad" : "Menor de edad";
console.log(tipoDeEdad);


if(edad === 18){
    console.log("Recien mayor de edad");
} else if(edad > 17){
    console.log("Mayor de edad");
} else{
    console.log("Menor de edad");
}





// Ciclos
for (var i = 0; i < cumpleañeros.length; i++) {
    const cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();    
    console.log("--------------------------------");
}

for (var i = cumpleañeros.length-1; i >=0; i--) {
    const cumpleañero = cumpleañeros[i];
    cumpleañero.mostrarDetalles();    
    console.log("--------------------------------");
}



//  ++
var numero = 10;
console.log(++numero); //le suma uno y lo imprime
console.log(numero++); //lo imprime y despues le suma uno
console.log(numero);
console.log("--------------------------------");


// WHILE
contador = 9;
while(contador < 10){
    /*if (contador >=10){
        break;
    }*/
    console.log("Ciclo while: " + contador);
    contador ++;
}


// DO WHILE
contador = 9;
do{
    /*if (contador >=10){
        break;
    }*/
    console.log("Ciclo while: " + contador);
    contador ++;
} while (contador < 10)
console.log("--------------------------------");



// SWITCH 
    /*function MostrarError(codigo = 0){
        if (codigo === 0){
            console.log("Ha ocurrido un error en la aplicacion. Codigo de error: " + codigo);
        } else if (codigo ===2){
            console.log("No se pudo cargar la informacion. Codigo de error: " + codigo);
        } else if(codigo === 7){
            console.log("Ha ocurrido un error en la aplicacion. Codigo de error: " + codigo);
        } else if (codigo ===14){
            console.log("No se pudo guardar la informacion. Codigo de error: " + codigo);
        } else{
            console.log("No se reconoce este codigo de error: " + codigo);
        }
    }*/

    switch (codigo) {
        case 0:
            console.log("Ha ocurrido un error en la aplicacion. Codigo de error: " + codigo);
            break;
        
        case 2:
            console.log("No se pudo cargar la informacion. Codigo de error: " + codigo);
            break;

        case 7:
            console.log("Ha ocurrido un error en la aplicacion. Codigo de error: " + codigo);
            break;

        case 14:
            console.log("No se pudo guardar la informacion. Codigo de error: " + codigo);
            break;
    
        default:
            console.log("No se reconoce este codigo de error: " + codigo);
            break;
    }
console.log("--------------------------------");




// Operador logico 
    // AND, OR, XOR, Bitwise, Not
    // Mostrar si un num pertence al rango 0-20
    var numero = 15;
    // En el AND (&&) se deben cumplir las 2 condiciones
    if (numero >=0 && numero <=20){
        console.log("El numero: " + numero + " pertenece al rango 0-20.");
    }

    var edad =15;
    // En el OR (||) basta con que se cumpla 1 condicion 
    if (edad===15 || edad===17){
        console.log("Puedes participar");
    }


