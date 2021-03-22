// Variable global
var ABC = 5;
var XYZ = 12;

// Alcance (scope)
/*     * Global: se puede usar en otro lado
//     * Local: se puede ver lo que enapsule un contesto {} y lo global
       * Los parametros de una funcion se tratan como variables dentro de ella
*/

sumarNumeros(ABC,20);

function sumarNumeros(n1,n2){
    // Variable local
    var resultado= n1 + n2;
    console.log("El resultado es: " + resultado);
};

