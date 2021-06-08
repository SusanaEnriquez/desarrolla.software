import {
    Component,
    OnInit
  } from '@angular/core';
  import {
    Singleton
  } from '../../refactoring/DataSingleton';
  declare var $: any;
  
  @Component({
    selector: 'confirmation', //Asignar un nombre de etiqueta, único
    templateUrl: './confirmation.html', //Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./confirmation.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
  })
  //Debemos asignarle el nombre de nuestro componente.
  //Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
  export class ConfirmationComponent implements OnInit { //Cambiar el nombre de AppComponent por el del nuestro
    ngOnInit(){
        // this.GetPedido();
        var self = this;
        Singleton.GetInstance().ShowLoader();
        var query = window.location.search;
        var result : any;
        result = query.match(/[Oo][Rr][Dd][Ee][Rr]=\w+/);
        if(result.length ===1){
          result = result[0].split('=');
          var numPedido = result[1];
          // console.log(numPedido);
          $.ajax({
            type: 'GET',
            url: 'http://localhost:678/orders/validate' + numPedido,
            success: function (res:any){
              if(res.valid === true){
                self.numeroPedido = numPedido;
              }
              Singleton.GetInstance().HideLoader();
            }
          });
        }         
    }

    GetPedido(){
        this.numeroPedido=null;
        
        if(this.numeroPedido=null){
            window.location.href = '/'
        }
    }
    numeroPedido = null;
  }