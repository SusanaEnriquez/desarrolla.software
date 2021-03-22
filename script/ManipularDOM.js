// null -> existe pero no como una referencia establecida
// la diferencia entre null y undefined es que el null reserva cierto espacio de memoria para la variable

window.document.body.innerHTML = "Hola";
window.document.body.innerHTML += <div class='A'>"Hola"</div>; //cambia por etiqeutas todo el body 
var fdsdfg = document.creayeElement("div");
div.innerText = "Aprendi :)"

h1_titulo.appendChild(div);

var lis=document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++) {
    const li = list[i];
    li.innerText = "* " + li.innerText;
    
}


//Verbatim
//*window.document.body.innerHTML= `<div>Hola </div>`;
//todo es texto dentro de estas comillas 
//sobreescribir cualquier contenido 


//modificar etiqueta en especifico 

var h1_titulo = document.getElementById("titulo");

//se puede escribir directamente document tmbn sin usar el window 
//representa todo el elemento de HTLM

h1_titulo.innerText = "Título Dinámico";
h1_titulo.append("<div>Append</div>");



var div = document.createElement("div");
div.innerText="Append";
h1_titulo.appendChild(div);


var h1_ = document.getElementById("titulo");
var spans = h1_titulo.getElementsByTagNameNS("span");
spans[1].innerHTML = "Lo encontré";