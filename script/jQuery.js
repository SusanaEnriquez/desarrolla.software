// Eventos
// Evento que permite saber cuando ya se termino de cargar el contenido
// window.onload = function(event){
//     var titulo = document.getElementById('titulo');
//     titulo.innerText = "Modificado con JS";
// };

/* EJEMPLO
function Revisar(texto,ejecutarAlgo){
    if (texto === 'exec'){
        ejecutarAlgo();
    }
}

Revisar('exec', function(){
    var x=0;
});

Revisar('exec', function(){
   console.log("ytrfdsdfg");
});
*/


window.addEventListener('load', function(event){
    var titulo = document.getElementById('titulo');
     titulo.innerText = "Modificado con JS";
});

//  jQuery tiene dos formas de usar:
    //  Como objeto con funciones de complemento
    //  Como funcion de apoyo y busqueda

// Cuando es funcion se puede utilizar de dos maneras:
    // $('SELECTOR) -> Regresar elementos jQueryHTML
    // $(function) -> evebto de onload

$(function(){
    $('#titulo').text('Modificado con jQuery');
    // var titulo = document.getElementById('titulo');
    // titulo.innerText = "Mdificado con jQuery";

    $('#otro').append('<h2>Modificado :)</h2>');
    // $('#otro li').text('li encontrado');
    // var otro = document.getElementById('otro');
    // otro.innerText += "Mdificado con jQuery";
    
    var uls = $('#otro ul')[0];
    $(ul).find('li').prepend(':)');
    // var otro = document.getElementById('otro');
    // var uls = otro.getElementsByTagName('ul');
    // var ul = uls[0];

    // var lis = ul.getElementsByTagName('li');
    // for (var i = 0; i < lis.length; i++) {
    //     const li = lis[i];
    //     li.innerText = "Encontrado";    
    // }
    

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

('body').append('<ul class="list-group"></ul');
$.each(lista, function(i, producto){
    $('.list-group').append(
        <li class="list-group-item list-group-item-secondary">
            ${producto.nombre} - $${producto.precio} ($producto.peso}kg)
    )
})

/*</li>$('body').append('<ul class="list-group"></ul');
for (var i = 0; i < lista.length; i++) {
    const producto = lista[i];

    $('.list-group').append(
        <li class="list-group-item list-group-item-secondary">
            ${producto.nombre} - $${producto.precio} ($producto.peso}kg)
        </li>
    )
    
}*/
});



