import {
  Component
} from '@angular/core';

@Component({
  selector: 'catalog', //Asignar un nombre de etiqueta, único
  templateUrl: './catalog.html', //Asignar la ruta del archivo .html que represente esta vista
  styleUrls: ['./catalog.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
})
//Debemos asignarle el nombre de nuestro componente.
//Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
export class CatalogComponent { //Cambiar el nombre de AppComponent por el del nuestro
  products = [
    {
      sku: "12345",
      name: "iPhone 12 Max",
      price: 1234.56,
      description: "The new 2020 iPhone 12",
      images: [ '...', '...']
    },
    {
      sku: "123456",
      name: "iPhone 11 Max",
      price: 1234.56,
      description: "The new 2019 iPhone 11",
      images: [ '...', '...']
    }
  ];
}
