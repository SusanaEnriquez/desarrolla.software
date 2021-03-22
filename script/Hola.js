alert("Hola Javascript :)");

// Tipos de datos PRIMITIVOS
/*  String: Texto
    Integer: Numero enteros
        Int8 - Enteros de 8 bits (char, byte) 
            2^8 -> 0-255
        Int16 - Enteros de 16 bits (short)
            2^16
        Int32 - Enteros de 32 bits (enteros)
            2^32
        Int64 - Enteros de 64 bits (long)
            2^64
      De cada Int existen 2 tipos: Signed (positivos) y Unsigned (hay que especificar signo)
    Floats: Numeros con punto decimal flotantes
        Hasta 6 decimales, pero el entero no puede ser muy grande
    Double:  Numeros con punto decimal flotante de doble precision
        Numero mas grandes y mas decimales que en los floats
        Boolean: True  | False 
                   1   |   0

    */


// Tipos de datos de JavaScript
/*  No se asignan itpos de datos 
    Numbers: Numeros de cualquier tipo (int, float)
    String: Texto
    Boolean: True | False
    
    */


// Variables
/*  Ejemplo declaracion de variable: var NombreDeVariable;
    Ejemplo asignacion de variable: NombreDeVariable = 25;
    Ejemplo declarcion asignativa o inicializacion de variable: */ var NombreDeVariable = 25;
/*      Pueden tomar cual quier valor (numero, string o boleano)

    Tienen nombres unicos en el alcance
    Los nombres no pueden tener espacios
    Los nombres pueden incluir numeros y _ o $
    No pueden comenzar con numeros!!!
    Cuando no se les da valor, toman el "undefined"
*/


// Constantes
/* Se manejan igual que las variables pero no se les puede reasignar su valor. Ejemplo: */
    const PI=3.1416;



// Operadores aritmeticos ( +, -, /, *, %)
    var Suma = 1+1;
    var Resta = 10-2;
    var Multiplicacion = 2*3;
    var Division = 4000/20;
    var Modulo= 877%2;

    console.log(Suma);
    console.log(Resta);
    console.log(Multiplicacion);
    console.log(Division);
    console.log(Modulo);


// Operadores condicionales (<, >, ==, !=) (Identico (===), No identico (!==))
    var mayor = 5>10;
    console.log(mayor)

    var menor = 5<10;
    console.log(menor)

    var igual = 5==5;
    console.log(igual)

    var igualString = 5=="5";
    console.log(igualString)

    var identico = 5==="5";
    console.log(identico)



// Tipos de datos complejos
/*  Arreglos: [] son listas indexadas */
    var listaAlumno =['Susy Eniquez'];
    listaAlumno[1]='Otra vez yo';
    console.log(listaAlumno[0]);
    console.log(listaAlumno[1]);
    console.log(listaAlumno);


// Objetos(): son estructuras descriptivas de algo
    var alumno = {
        nombre: 'Susana',
        "apellido paterno": 'Enriquez',
        sexo: 'F',
        edad: 20,
        curso:"PR2021"
    };
    console.log(alumno);
    console.log(alumno["apellido paterno"]);
    alumno["apellido paterno"] = "Godina";

    // Hash
    // Cheksum
    // MD5
    // Integridad
    // AES, AES256

