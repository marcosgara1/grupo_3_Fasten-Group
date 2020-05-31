const fs = require('fs');
const productData = require('./../models/product');
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
            }/* else {
                res.send('ups, el producto no existe : (') //  <-- preguntar esto!
            }*/

        }
        
         res.render('detalleProducto', { detalleProducto: detalleProducto } );
        
    },

    register: function (req,res) {
       
        let archivoProductos = fs.readFileSync('./data/products.json', { encoding: 'utf-8' });
        let productos;
        if (archivoProductos == '') {
            productos = [];
        } else {
            productos = JSON.parse(archivoProductos);
        }
        
        let producto = {
            name: req.body.nombre,
            modelo: req.body.modelo,
            price: req.body.precio,
            description: req.body.mensaje,
            descuento: req.body.tiene,
            clasificacion: req.body.clasificacion,
        }

        productos.push(producto);

        let productosJson = JSON.stringify(productos);

        fs.writeFileSync('./data/products.json', productosJson);

        res.render('products', { productos: productos });
    },

    
    
};

module.exports = controlador;
