//capturar los datos de un formulario
/* por cada input, select, textarea del formulario se crea una variable*/

/*
let nombrePaciente=document.getElementById("nombrepaciente")
let correoPaciente=document.getElementById("correopaciente")
let telefonoPaciente=document.getElementById("telefonopaciente")
let anioNacimientoPaciente=document.getElementById("nacimientopaciente")
let ciudadPaciente=document.getElementById("ciudadpaciente")
let ipsPaciente=document.getElementById("ipspaciente")
let grupoIngresoPaciente=document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("fechapaciente")

//2. por cada variable debo utilizar DOM para asociar el html con js

//3. crear una variable para asociar el id del boton que tengo en html 

let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//4. detectamos acciones o eventos en el boton

botonRegistroPaciente.addEventListener("click",function(evento){
    evento.preventDefault();
    //5. se crea un JSON que capture todos los datos del formulario

    let datosFormularioPaciente={
        nombre:nombrePaciente.value,
        anioNacimiento:fechaNacimientoPaciente.value,
        ciudad:ciudadPaciente.value,
        correo:correoPaciente.value,
        telefono:telefonoPaciente.value,
        ips:ipsPaciente.value,
        fechaAfiliacion:fechaAfiliacionPaciente.value,
        grupoIngreso:grupoIngresoPaciente.value
    }

    //6. se envian los datos al back

    console.log(datosFormularioPaciente)
    
    Swal.fire({
        title: "Te has registrado",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });
})

*/
//Objetivo: recibir datos del back y hacerles render(pintarlos), para después quemarlos(simularlos)
//1. quemar o simular datos

let pacientes=[
    {
        id:890,
        nombre:"Franchesco Sebastian Caballero",
        anioNacimiento:"1992-05-15",
        ciudad:"Bucaramanga",
        correo:"jscbllero@gmail.com",
        telefono:"212345678",
        ips:"clinica caribe",
        fechaAfiliacion: "2015-09-18",
        grupoIngreso:"A"

    },
    {
        "id": 891,
        "nombre": "Laura Camila Peña",
        "anioNacimiento": "1994-07-23",
        "ciudad": "Bogotá",
        "correo": "laura.pena@gmail.com",
        "telefono": "3101234567",
        "ips": "Hospital San José",
        "fechaAfiliacion": "2017-11-21",
        "grupoIngreso": "B"
    },
    {
        "id": 892,
        "nombre": "Carlos Eduardo Martínez",
        "anioNacimiento": "1987-12-11",
        "ciudad": "Medellín",
        "correo": "carlos.martinez87@gmail.com",
        "telefono": "3159876543",
        "ips": "Clínica Medellín",
        "fechaAfiliacion": "2016-04-15",
        "grupoIngreso": "A"
    },
    {
        "id": 893,
        "nombre": "Andrea Paola Gómez",
        "anioNacimiento": "1990-02-28",
        "ciudad": "Cali",
        "correo": "andrea.gomez90@gmail.com",
        "telefono": "3206547890",
        "ips": "Clínica del Valle",
        "fechaAfiliacion": "2018-08-10",
        "grupoIngreso": "C"
    }
]

//2. crear una referencia a una etiqueta html donde vamos a renderizar

let fila=document.getElementById("fila")

//3. se recogen los datos para obtenerlos de forma separada

pacientes.forEach(function(paciente){

    console.log(paciente)
    //4.se crean columnas
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. se crea tarjetas
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100","shadow")

    //6 se crea una etiqueta para poner el nombre del paciente
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombre

    //paso final (ordenando las cartas)

    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})