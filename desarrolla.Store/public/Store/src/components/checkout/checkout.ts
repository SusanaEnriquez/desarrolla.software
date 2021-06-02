import {
    Component,
    OnInit
  } from '@angular/core';
  import {
    Singleton
  } from '../../refactoring/DataSingleton';
  declare var $: any;
  declare var paypal: any;
  
  @Component({
    selector: 'checkout', //Asignar un nombre de etiqueta, único
    templateUrl: './checkout.html', //Asignar la ruta del archivo .html que represente esta vista
    styleUrls: ['./checkout.css'] //Un arreglo con las rutas de los CSS que queremos en este componente
  })
  
  //Debemos asignarle el nombre de nuestro componente.
  //Ejemplo: Si se llama catalogo.component.ts, debemos exportar CatalogoComponent
  export class CheckoutComponent implements OnInit { //Cambiar el nombre de AppComponent por el del nuestro
  
    ngOnInit() {
      this.GetUserData();
      paypal.Buttons({
        createOrder: function (data: any, actions: any) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'MXN',
                breakdown: {
                  item_total: {
                    currency_code: 'MXN',
                    value: 8.4
                  },
                  tax_total: {
                    currency_code: 'MXN',
                    value: 1.6
                  }
                },
                value: 10.00 //Total a pagar
              }
            }]
          });
        }
      }).render('#paypal-payment');
    }
  
    GetUserData() {
      var self = this;
      Singleton.GetInstance().ShowLoader();
      $.ajax({
        type: "GET",
        xhrFields: {
          withCredentials: true
        },
        url: "http://localhost:678/users/profile",
        success: function (datosUsuario: any) {
          self.userData = datosUsuario;
          if (!self.userData.address) {
            self.userData.address = {
              street: '',
              suburb: '',
              city: '',
              state: '',
              zip: '',
            }
          }
  
          if (!self.userData.phone) {
            self.userData.phone = '';
          }
  
          Singleton.GetInstance().HideLoader();
        }
      });
    }
  
    UpdateValue(event: any, property: String) {
      //email
      var value = event.target.value;
      switch (property) {
        case "name":
          this.userData.name = value;
          break;
        case "lastName":
          this.userData.lastName = value;
          break;
        case "email":
          this.userData.email = value;
          break;
  
        case "phone":
          this.userData.phone = value;
          break;
  
        case "street":
          this.userData.address.street = value;
          break;
  
        case "suburb":
          this.userData.address.suburb = value;
          break;
  
        case "city":
          this.userData.address.city = value;
          break;
  
        case "state":
          this.userData.address.state = value;
          break;
  
        case "zip":
          this.userData.address.zip = value;
          break;
      }
    }
  
    //ValidateCart
  
    userData = {
      name: '',
      lastName: '',
      address: {
        street: '',
        suburb: '',
        city: '',
        state: '',
        zip: '',
      },
      email: '',
      phone: '',
    }
  }