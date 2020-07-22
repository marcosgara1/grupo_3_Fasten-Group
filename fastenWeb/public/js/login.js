const { formLogin } = require("../../site/controllers/usersController");

window.onload = () => {


    let formularioLogin = document.querySelector('form.form-login');

    let campoEmail = formularioLogin.querySelector('#email');

    let campoPassword = formularioLogin.querySelector('#password');


    formularioLogin.onsubmit = (ev) => {
        
        campoEmail.classList.remove('is-invalid');

        let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i



        if (!regexEmail.test(campoEmail.value)){

            console.log('El email no es correcto');

            ev.preventDefault();

            campoEmail.classList.add('is-invalid');

            let mostrarError = campoEmail.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'Email inválido';
        }

        campoPassword.classList.remove('is-invalid');

        if(campoPassword.value == ''){

            console.log('El password no es correcto');

            ev.preventDefault();

            campoPassword.classList.add('is-invalid');

            let mostrarError = campoPassword.parentElement.querySelector('div.invalid-feedback');

            mostrarError.innerText = 'Password inválido';

        }       

    }


}