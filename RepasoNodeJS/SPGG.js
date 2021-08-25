const alumnos = ["Susana", "Andres", "Analu", "Ana Lilia"];
const periodo = "Primavera 2021";
const maestros = ["Kevin", "Mariano"];

function Horario(){
    var lunes = {
        dia: "lunes",
        materia: "codigo",
        hora: "9:00-12:00"
    }

    var martes = {
        dia: "martes",
        materia: "codigo",
        hora: "9:00-12:00"
    }

    var mierecoles = {
        dia: "miercoles",
        materia: "codigo",
        hora: "9:00-12:00"
    }
    
    var jueves = {
        dia: "jueves",
        materia: "codigo",
        hora: "9:00-12:00"
    }

    var viernes = {
        dia: "viernes",
        materia: "codigo",
        hora: "9:00-11:00"
    }

    var viernes2 = {
        dia: "viernes",
        materia: "desarollo personal",
        hora: "11:00-12:00"
    }

    var horario = [lunes,martes,miercoles,viernes,jueves,viernes,viernes2];
    return horario;
}

function añadirAlumno(nombre){
    alumnos.push(nombre);
}

function Mensaje(){
    console.log("Todos los dias ponemos este mensaje :D");
}

// Forma 1 de exportar
/*module.exports = {
    alumnos: alumnos,
    periodo: periodo,
    maestros: maestros,
    horario: Horario,
    anadirAlumno: añadirAlumno,
    mensaje: Mensaje
}*/

// Forma 2
var objetoFinal = {
    alumnos: alumnos,
    periodo: periodo,
    maestros: maestros,
    horario: Horario,
    anadirAlumno: añadirAlumno,
    mensaje: Mensaje
}

module.exports = objetoFinal;