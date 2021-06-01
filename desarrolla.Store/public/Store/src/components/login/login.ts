import {
    Component
  } from '@angular/core';
  declare var $:any;
  
  @Component({
    selector: 'login', //Asignar un nombre de etiqueta, único
    templateUrl: './login.html', //Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./login.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
  })
  //Debemos asignarle el nombre de nuestro componente.
  //Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
  export class LoginComponent { //Cambiar el nombre de AppComponent por el del nuestro

    Login(){
       var self = this;
      $.ajax({
        type: 'POST',
        xhrFields: {
          withCredentials: true
        },
        url: 'http://localhost:678/users/login',
        data: {
          email: this.email,
          nickname: this.email,
          password: this.password
        },
        success: function (res:any) {
          // console.log('Hizo login, ver cookies');
          self.invalidLogin = false;
          window.location.href = "/";
        },
        error: function(error:any){
          // console.log('No se hizo login');
          // console.log(error);
          self.invalidLogin = true;
        }
      });
    }

    UpdateValue(event: any, property: String) {
    //email
    var value = event.target.value;
    switch(property){
      case "email":
        this.email = value;
        break;
      case "password":
        this.password = value;
        break;
    }
  }
    // UpdateEmail(event: any){
    //   this.email = event.target.value
    // }

    // UpdatePassword(event: any){
    //   this.password = event.target.value
    // }

    email = '';
    password = '';
    invalidLogin = false;
  }