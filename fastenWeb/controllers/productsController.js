const productData = require('../models/product');

let controlador = {
    index : function (req, res) {

        let products = [];

        if (req.query.busqueda) {

            products = productData.filterByName(req.query.busqueda);
        } else {

            products = productData.findAll();
        }
        
        res.render('products', { products : products } );
    },

    formCreate : function (req, res) {
        
        res.render('create');
    
    },

    create : function (req, res, next) {

        let product = {
            name: req.body.nombre,
            modelo: req.body.modelo,
            price: req.body.precio,
            description: req.body.mensaje,
            descuento: req.body.tiene,
            clasificacion: req.body.clasificacion,
            foto : req.files[0].filename
        } 

        productData.create(product);

        res.redirect('products');
        
    },

    detail : function (req, res) {

       let products = productData.findAll();

       let product = products.find(function(prod){
           return req.params.id == prod.id
       });

       console.log(product);
       
       
        res.render('detail', { product : product });

    },

    formEdit : function (req, res) {

        res.render('edit');

    },

    edit : function (req, res) {

        res.render('products');

    },

    delete : function (req, res) {

        res.render('products');

    }

};

module.exports = controlador;
