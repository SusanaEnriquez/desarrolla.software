function Suma (n1=1,n2=2){
    console.log(n1+n2);
}
Suma(5,6);
Suma(2,10);  

function Suma2 (n1=1,n2=2){
    var suma = n1+n2;
    return suma;
}
console.log(Suma2);
suma=Suma2(2,10);



function NombreCompleto (nom, apPaterno, apMaterno){
    var nombreCompleto = nom + " " + apPaterno + " " + apMaterno;
    return nombreCompleto;
}
var nombreCompleto = NombreCompleto('Susana','Enriquez','Godina');
console.log(nombreCompleto);



var mascota={
    raza: "Chihuahua",
    edad: 3,
    "color mascota": "Blanco con cafe",
    tamaño: "Pequeño",
    nombre: "Donna",
    imagen: "imagenes/donna.jpg",
    ladrido: function(){
        // console.log("woof");
        return "woof"
    }
}
console.log(mascota.ladrido()); 
console.log(mascota["color mascota"]); 



function LimitesDeNumero(n1,n2){
    var esMayor = n1 > n2;
    // Operador ternario (pregunta? verdadero : falso)
    var resultado = "El numero " + n1 + " es " + (esMayor ? "mayor que " : "menor o igual ") + "que el numero " + n2;
    return resultado;
}
console.log(LimitesDeNumero(2,3)); //false



//Arreglos
var arreglo = [10,20,30,40,50];
arreglo[5]=60
arreglo.push(70); //lo agrega al final del arreglo
arreglo = arreglo.concat([80,90,100]);

console.log(arreglo); 

