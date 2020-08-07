window.addEventListener('load', function(){
    const buttonsHearts = document.querySelectorAll('.buttonHeart');
    /*
    for (const boton of buttonsHearts) {
        boton.onclick = function() {
            const anclaje = this;
            const productId = this.getAttribute('data-productId');
            const clientId = this.getAttribute('data-clientId');
            console.log(productId);

            fetch('http://localhost:3000/api/users/addFavorite',{
                method: 'POST',
                body: JSON.stringify({
                    userId: clientId,
                    productId: productId,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(function(respuesta){
                return respuesta.json();
            })
            .then(function(data){
                console.log(data);

                if(data.status == 401) {
                    
                    alert(data.response);

                    return false
                }

                alert(data.response);

                const i = anclaje.querySelector('i');
                i.classList.toggle('far');
                i.classList.toggle('fas');
            })
            .catch(function(error){
                console.error(error);
            });
        }
    }*/
})