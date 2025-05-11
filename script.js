const submitFunction = (event) =>{
   if(!formValidation()){
        event.preventDefault();
    }else{
        event.preventDefault();

        alert(
            'Estimado/a ' + document.getElementById('name').value + ' su registro fue exitoso'
        )
    }
    
}

document.getElementById('form').addEventListener('submit', submitFunction)

function formValidation(){
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo =>{
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(errorCampo, '¡Este campo es requerido')
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres')
            validacionCorrecta = false
        }else{
            ocultarError(errorCampo)
        }
    })

    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail')

    if(/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email.value)){
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, '¡Ingrese un correo electronico válido!')
    }

    //validacion de la edad
    const age = document.getElementById('age');
    const errorAge = document.getElementById('errorAge')

    if(age.value < 18){
        mostrarError(errorAge, '¡Debes ser mayor de 18 años para registrarte!')
        validacionCorrecta = false
    }else{
        ocultarError(errorAge)
    }

    // validacion de actividad
    const activity = document.getElementById('activity');
    const errorActivity = document.getElementById('errorActivity')

    if(activity.value == ''){
         mostrarError(errorActivity, 'Por favor, seleccionar una actividad')
    }else{
         ocultarError(errorActivity)
    }

    // validacion de estudios
    const study = document.getElementById('levelStudies');
    const errorLevelStudies = document.getElementById('errorLevelStudies')

    if(study.value == ''){
        mostrarError(errorLevelStudies, 'Por favor, selecionar un nivel de estudios')
    }else{
        ocultarError(errorLevelStudies)
    }

    // validacion aceptar terminos
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, '¡Debes aceptar los terminos y condiciones!')
        validacionCorrecta = false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorrecta

}


const mostrarError = (elemento, mensaje) =>{
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError = (elemento) =>{
    elemento.textContent = '';
    elemento.style.display = "none";
}
