import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreComponent } from './store'; //Se importa el componente
import { HeaderComponent } from '../menu-header/menuHeader';
import { CatalogComponent } from '../catalog/catalog';
//Es importante asignar el nombre igual al que exportamos en el archivo component.ts
//Ejemplo: Si mi componente es catalogo.component.ts, entonces debo importar CatalogoComponent

@NgModule({
  declarations: [
    StoreComponent, //Se añade el componente importado arriba
    HeaderComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StoreComponent] //Si se le desea añadir bootstrap a este componente
})

export class StoreModule { } //Exportar este módulo con el mismo nombre de nuestro componente
//Ejemplo: Si mi componente es catalogo.component.ts, entonces debo exportar CatalogoModule