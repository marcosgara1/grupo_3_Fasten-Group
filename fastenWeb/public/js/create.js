window.onload = () => {


    let formularioRegister = document.querySelector('form.form-register');

    let campoNombre = formularioRegister.querySelector('#name');

    let campoDescripcion = formularioRegister.querySelector('#description');

    let campoModelo = formularioRegister.querySelector('#modelo');

    let campoPrice = formularioRegister.querySelector('#price');

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

        if (campoModelo.value.length < 1) {
            
            ev.preventDefault();

            campoModelo.classList.add('is-invalid');

            let mostrarError = campoModelo.parentElement.querySelector('div.invalid-feeback');

            mostrarError.innerText = 'El campo Modelo no puede estar vacío';
        }

        if(campoPrice.value.length < 1){

            ev.preventDefault();

            campoPrice.classList.add('is-invalid');

            let mostrarError = campoPrice.parentElement.querySelector('div.invalid-feedback');
            
            mostrarError.innerText = 'El campo precio no puede estar vacío y debe ser numérico';
        }


        if (campoDescripcion.value.length < 20) {
            
            ev.preventDefault();

            campoDescripcion.classList.add('is-invalid');

            let mostrarError = campoDescripcion.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'El campo Descripción debe poseer al menos 20 caracteres';

        }
        
    }

}