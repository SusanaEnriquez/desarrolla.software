import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo de angular';
  name = "Susy";
  productos = [{
    sku: 1234,
    name: "iPhone"
  },{
    sku: 5678,
    name: "Samsung"
  },{
    sku: 9012,
    name: "Xiaomi"
  }];

  CambiarTitulo(){
    this.title = 'Angular cambia solo :p';
  }

  CambiarArreglo(){
    this.productos[1].sku = 11111111222222234567890
  }
}
