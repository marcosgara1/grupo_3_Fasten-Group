window.onload = () => {


    let formularioRegister = document.querySelector('form.form-register');

    let campoNombre = formularioRegister.querySelector('#name');

    let campoDescripcion = formularioRegister.querySelector('#description');

    console.log(formularioRegister.elements);

   
    formularioRegister.onsubmit = (ev) => {

        campoNombre.classList.remove('is-invalid');

        campoDescripcion.classList.remove('is-invalid');


        if (campoNombre.value.length < 5) {
            
            ev.preventDefault();

            campoNombre.classList.add('is-invalid');

            let mostrarError = campoNombre.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'El campo Nombre debe poseer al menos 5 caracteres';

        }


        if (campoDescripcion.value.length < 20) {
            
            ev.preventDefault();

            campoDescripcion.classList.add('is-invalid');

            let mostrarError = campoDescripcion.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'El campo Descripción debe poseer al menos 20 caracteres';

        }
        
    }

}