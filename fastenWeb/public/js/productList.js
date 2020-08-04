window.addEventListener('load', function(){
    const buttonsHearts = document.querySelectorAll('.buttonHeart');

    for (const boton of buttonsHearts) {
        boton.onclick = function() {
            const anclaje = this;
            const productId = this.getAttribute('data-productId');
            console.log(productId);

            fetch('http://localhost:3000/apiUsers/addFavourite',{
                method: 'POST',
                body: '',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function(data){
                console.log(data);

                const i = anclaje.querySelector('i');
                i.classList.toggle('far');
                i.classList.toggle('fas');
            })
            .catch(function(error){
                console.error(error);
            });
        }
    }
})