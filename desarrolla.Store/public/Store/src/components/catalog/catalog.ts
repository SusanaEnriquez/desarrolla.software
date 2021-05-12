import {
  Component,
  OnInit
} from '@angular/core';
declare var $:any;

@Component({
  selector: 'catalog', //Asignar un nombre de etiqueta, único
  templateUrl: './catalog.html', //Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./catalog.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
})
//Debemos asignarle el nombre de nuestro componente.
//Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
export class CatalogComponent implements OnInit { //Cambiar el nombre de AppComponent por el del nuestro

  ngOnInit(){
    // console.log('Hola');
    // console.log('El valor de products es: ' + this.products);
   this.GetProducts();
  }

  GetProducts(){
  var self = this; 
      $.ajax({
        type: "GET",
        url: 'http://localhost:678/products/all', 
        success: function(res: any){
          self.products = res;
        }
      });
  }

  AddToCart(sku: String){
    var self = this; 
      $.ajax({
        type: "PATCH",
        url: 'http://localhost:678/carts/add', 
        xhrFields: {
          withCredentials: true
        },
        data: {
          sku: sku,
          qty: 1
        },
        success: function(res: any){
          console.log('Add to cart: ');
          console.log(res)
        }
      });
  }

  products = null;
}
