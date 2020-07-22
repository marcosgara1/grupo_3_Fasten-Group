window.onload = () => {


    let formularioRegister = document.querySelector('form.form-register');

    console.log(formularioRegister.elements);

   
    formularioRegister.onsubmit = (ev) => {

        for (const input of formularioRegister.elements) {

            input.classList.remove('is-invalid');

            if(['text', 'password'].includes(input.type) && input.value == 's'){
    
                ev.preventDefault();
    
                input.classList.add('is-invalid');
    
                let mostrarError = input.parentElement.querySelector('div.invalid-feedback');
    
                mostrarError.innerText = 'El campo no puede estar vacío';
    
            }       
        }
    }

}