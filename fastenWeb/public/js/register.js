window.onload = () => {


    let formularioRegister = document.querySelector('form.form-register');

    let campoNombre = formularioRegister.querySelector('#nombre');

    let campoApellido = formularioRegister.querySelector('#apellido');

    let campoEmail = formularioRegister.querySelector('#email');

    let campoPassword = formularioRegister.querySelector('#password');

    console.log(formularioRegister.elements);

   
    formularioRegister.onsubmit = (ev) => {

        campoNombre.classList.remove('is-invalid');

        campoApellido.classList.remove('is-invalid');

        campoEmail.classList.remove('is-invalid');

        campoPassword.classList.remove('is-invalid');


        if (campoNombre.value.length < 2) {
            
            ev.preventDefault();

            campoNombre.classList.add('is-invalid');

            let mostrarError = campoNombre.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'El campo Nombre debe poseer al menos 2 caracteres';

        }


        if (campoApellido.value.length < 2) {
            
            ev.preventDefault();

            campoApellido.classList.add('is-invalid');

            let mostrarError = campoApellido.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'El campo Apellido debe poseer al menos 2 caracteres';

        }


        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

        if (!regexEmail.test(campoEmail.value)){

            console.log('El email no es correcto');

            ev.preventDefault();

            campoEmail.classList.add('is-invalid');

            let mostrarError = campoEmail.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'Email inválido';
        }


        if(campoPassword.value.length < 8 || campoPassword.value == ''){

            console.log('El password no es correcto');

            ev.preventDefault();

            campoPassword.classList.add('is-invalid');

            let mostrarError = campoPassword.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'Password inválido';

        }   
        
    }

}

/*
formularioRegister.onsubmit = (ev) => {

    for (const input of formularioRegister.elements) {

        input.classList.remove('is-invalid');

        if(['text', 'password'].includes(input.type) && input.value == ''){

            ev.preventDefault();

            input.classList.add('is-invalid');

            let mostrarError = input.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'El campo no puede estar vacío';

        }       
    }
}
*/