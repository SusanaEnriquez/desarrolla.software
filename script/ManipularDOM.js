/* 
// null -> existe pero no como una referencia establecida
// la diferencia entre null y undefined es que el null reserva cierto espacio de memoria para la variable

window.document.body.innerText = "Hola";

// Verbatim
// Cambia lo que hay en el body por lo que se le indique
window.document.body.innerHTML = "<div class='A'>Hola :)</div>"; //se debe escribir todo en la misma linea (no se puede dar enter)


// Sobreescribir
 window.document.body.innerHTML = `
        <div>
            HOLISS
        </div>
`; //  (con estas comillas si podemos dar enter y seguir escribiendo (alt gr + }))
// Añadir
window.document.body.innerHTML += `
        <div>
        HOLISS 2
        </div>
`; //  (con estas comillas si podemos dar enter y seguir escribiendo (alt gr + }))    
*/




// Modificar el contenido de una etiqueta en especifico
/*
var h1_titulo = document.getElementById("titulo");
h1_titulo.innerText = "Titulo Dinamico";
h1_titulo.append("<div>Append</div>"); //Agregar texto

var div = document.createElement('div'); 
div.innerText = 'Append :)';
h1_titulo.appendChild(div); //Agregar etiqueta
*/

var h1_titulo = document.getElementById("titulo");
var spans = h1_titulo.getElementsByTagName("span");
spans[1].innerHTML = "Lo encontré"; //Modificar el segundo span de el id titutlo





var lis=document.getElementsByTagName('li'); //Buscar por nombre de etiquetas

for (var i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.innerText = "* " + li.innerText; //Agregar un asterisco al principio del texto
}