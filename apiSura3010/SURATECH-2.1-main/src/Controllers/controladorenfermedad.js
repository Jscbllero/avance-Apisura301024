let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad")
let probabilidadVidaEnfermedad=document.getElementById("probabilidadenfermedad")


let botonRegistroEnfermedad=document.getElementById("botonregistroenfermedad")

//4. detectamos acciones o eventos en el boton

botonRegistroEnfermedad.addEventListener("click",function(evento){
    evento.preventDefault();
    //5. se crea un JSON que capture todos los datos del formulario

    let datosFormularioEnfermedad={
        Nombre:nombreEnfermedad.value,
        Sintomas:sintomasEnfermedad.value,
        Clasificacion:clasificacionEnfermedad,
        Grado:gradoEnfermedad.value,
        Probabilidad:probabilidadVidaEnfermedad.value

    }

    console.log(datosFormularioEnfermedad)
    
        Swal.fire({
            title: "Te has registrado",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
      });
})