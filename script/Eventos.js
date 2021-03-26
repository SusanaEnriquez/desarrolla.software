/* BOTONES
function MostrarMensaje(){
    $('body').prepend(
    `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Hola!</strong> <br> Yo aparezco porque el evento de onclick es esta funcion :) <br> (Puedes cerrarme...)
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`); 
}

function MostrarMensajeCSS(){
    $('body').prepend(
    `<div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
        <strong>Hola!</strong> <br> Yo aparezco porque el evento de onclick es esta funcion :) <br> (Puedes cerrarme...)
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`); 
}
*/


/*
var productos = [
    {
        name: "iPhone 12 pro max",
        brand: "Apple",
        description: "The new 2020 iPhone 12. This Max Pro version has a better camera",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604021660000",
        price: 1800.50,
        stock: 15
    },
    {
        name: "Galaxy S20 ultra",
        brand: "Samsung",
        description: "The new 2020 galaxy. It has the best camera",
        image: "https://www.abaddy.com/wp-content/uploads/2020/03/Galaxy-s20Ultra-gris-3-abaddy-samsung.jpg",
        price: 1800,
        stock: 20
    },
    {
        name: "Mi 11 ",
        brand: "Xiaomi",
        description: "The new 2020 Xiaomi Mi 11",
        image: "https://www.profesionalreview.com/wp-content/uploads/2021/02/Xiaomi-Mi-11-2.jpg",
        price: 1800,
        stock: 17
    }   
];
*/

var productos = [];
$(function(){

    var AJAX = new XMLHttpRequest(); //Estado inicial 0
    AJAX.onreadystatechange = function(){
        // State 3: Downloading
        if(this.readyState === 4){
            productos = JSON.parse(this.responseText); // Convertir a JSON
            for (var i = 0; i < productos.length; i++) {
            const producto = productos[i];
            $('body').append(
                `<div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${producto.image}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.brand} - ${producto.name}</h5>
                                <p class="card-text">${producto.description}</p>
                                <p class="card-text"><small class="text-muted">Price: ${producto.price} <br> In Stock: ${producto.stock}</small></p>
                            </div>
                        </div>
                    </div>
                </div>`
            ); 
            }
        // State 4: Finish
        }
    };
    AJAX.open('GET', 'http://localhost:678/products/all'); // State 1
    AJAX.send(); // State 2
   
});

function MostrarDetalleProducto(productIndex){
    const producto = productos[productIndex];
    var modal = $('.modal');
    modal.find('h5').text(producto.brand + " - " + producto.name);
    modal.find('.modal-body p').text(producto.description);
    
    $(".modal").modal('toggle');

}




