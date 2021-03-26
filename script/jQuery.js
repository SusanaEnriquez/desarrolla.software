// Eventos
// Evento que permite saber cuando ya se termino de cargar el contenido

/*
window.onload = function(event){
     var titulo = document.getElementById('titulo');
     titulo.innerText = "Modificado con JS";
};
*/

/* EJEMPLOS
function Revisar(texto,ejecutarAlgo){
    if (texto === 'exec'){
         ejecutarAlgo(); //Callback
    }
}

Revisar('exec', function(){
    var x=0;
});

Revisar('exec', function(){
  console.log("ytrfdsdfg");
});
*/

/*
window.addEventListener('load', function(event){
    var titulo = document.getElementById('titulo');
    titulo.innerText = "Modificado con JS";
});
*/


//  jQuery tiene dos formas de usar:
     //  Como objeto con funciones de complemento
     //  Como funcion de apoyo y busqueda
// Cuando es funcion se puede utilizar de dos maneras:
     // $('SELECTOR) -> Regresar elementos jQueryHTML
     //  $(elemento) -> Regresar elementos jQueryHTML
     // $(function) -> evebto de onload



//  COMO SELECTOR
$(function(){
/*
    // $('#titulo').text('Sobrescribir con jQuery'); //Sobreescribe el texto
    var titulo = document.getElementById('titulo');
    titulo.innerText = "Modificado con jQuery";

    // $('#otro').html('<h2>Modificado con jQuery :)</h2>'); //Modificar html
    // $('#otro').append('<h2>Añadido :)</h2>'); //Añadir
    var otro = document.getElementById('otro');
    otro.innerHTML += '<h2>Añadido :)</h2>';

    // var ul = $('#otro ul')[0]; // Solo la primer lista
    // $(ul).find('li').text('Encontrado'); 
    var otro = document.getElementById('otro');
    var uls = otro.getElementsByTagName('ul');
    var ul = uls[0];
    var lis = ul.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            const li = lis[i];
            li.innerText = "Encontrado (for)";    
        }
   
    $(ul).find('li').prepend('* '); //Poner algo antes del contenido/texto
*/


/*
var frases = [
    {
    texto: "Mi frase",
    lugar: "Mi casa, ",
    persona: "SEG"
},
{
    texto: "Primero aprendan la teoria",
    lugar: "desarrolla.software, ",
    persona: "El teacher"
},

{
    texto: "Asistan al curso plox",
    lugar: "desarrolla.software,",
    persona: "Sam"
},
];

for (var i = 0; i < frases.length; i++) {
    const frase = frases[i];
    $('body').append(`
    <div class="card">
        <div class="card-header">
            Frases Motivacionales
        </div>
        <div class="card-body" >
            <blockquote class="blockquote mb-0">
                <p>${frase.texto}</p>
                <footer class="blockquote-footer"> ${frase.lugar} <cite title="El teacher">${frase.persona}</cite>
                </footer>
            </blockquote>
        </div> 
    </div>`);
};  
*/

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

// Sin jQuery
/* $('body').append('<ul class="list-group"></ul>');
for (var i = 0; i < listaSuper.length; i++) {
    const producto = listaSuper[i];

    $('.list-group').append(`
        <li class="list-group-item list-group-item-secondary">
            ${producto.nombre} - $${producto.precio} (${producto.pesoKg}kg)
        </li>`);
};
*/

// con jQuery
$('body').append('<ul class="list-group"></ul>');
$.each(listaSuper, function(i, producto){
    $('.list-group').append(`
        <li class="list-group-item list-group-item-secondary">
            ${producto.nombre} - $${producto.precio} (${producto.pesoKg}kg)
        </li>`
    );
})
});