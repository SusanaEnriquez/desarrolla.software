import {
  Component,
  OnInit
} from '@angular/core';
declare var $:any;

@Component({
  selector: 'main-menu', //Asignar un nombre de etiqueta, único
  templateUrl: './menuHeader.html', //Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./menuHeader.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
})

//Debemos asignarle el nombre de nuestro componente.
//Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
export class HeaderComponent implements OnInit{
  
  ngOnInit(): void {
    var self = this;
    $.ajax({
      type: "GET",
      xhrFields: {
        withCredentials: true
      },
      url: 'http://localhost:678/carts/getCart', 
      success: function (cartInfo: any) {
        self.numberProducts = cartInfo.quantity; //NO FUNCIONAAAAAAAA
        // console.log('Carrito: ');
        // console.log(cartInfo);
      }
    });
  } 
  
  accountRedirect = 'Login';
  numberProducts = 0;
}