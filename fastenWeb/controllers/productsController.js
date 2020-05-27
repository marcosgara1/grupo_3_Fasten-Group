const fs = require('fs');

let controlador = {
    list: function (req, res) {
        
        let archivoProductos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' });
        let productos;
        if (archivoProductos == '') {
            productos = [];
        } else {
            productos = JSON.parse(archivoProductos);
        }
        

        res.render('products', { productos: productos });
        
    },

    create: function (req, res){
        
        res.render('create');
    },

    detail: function(req, res) {
        let productId = req.params.id;

        let archivoProductos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' });
        let productos;
        if (archivoProductos == '') {
            productos = [];
        } else {
            productos = JSON.parse(archivoProductos);
        }

        let detalleProducto = [];
        
        for (let i = 0; i < productos.length; i++){
            if (productos[i].id == productId){
                detalleProducto.push(productos[i]);  
            } else {
                res.render('error');
            }
        }

        res.render('detalleProducto', { detalleProducto: detalleProducto} );
        
    }
    
};

module.exports = controlador;
