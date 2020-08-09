const {check, validationResult, body} = require('express-validator');
const db = require('./../database/models');
const { Op } = require('sequelize');


let controlador = {
    index : function (req, res) {

        if (req.query.busqueda) {

            db.Productos.findAll({
                where: {
                    name: {
                        [Op.like]: '%' + req.query.busqueda + '%'
                    }
                },
                order : [
                    ['name', 'ASC']
                ],
                include: [{association: "clasificacion"}]
            })

            .then(function(products){
                return res.render('products', { products : products });
            })
            .catch(function(error){
                console.log(error);
            })
        
        } else {

            db.Productos.findAll({
                order: [
                    ['name', 'ASC']
                ],
                include: [{association: 'clasificacion'}]
            })
            .then(function(products){
                
                return res.render('products', { products : products })
            })
            .catch(function(error){
                console.error(error);
            });
        }
        
    },

    formCreate : async (req, res) => {

        let clasificacion = await db.Clasificacion.findAll();
        
        return res.render('create', {errors : {}, body: {}, clasificacion})
        
        
    
    },

    create : function (req, res, next) {

        let errors = validationResult(req);
        console.log(errors.mapped());

        if (!errors.isEmpty()) {
            res.render('create', {errors : errors.mapped(), body: req.body});
        }

        let foto = '';

        if (req.file) {
            foto = req.file.filename;
        }

        db.Productos.create({
            name: req.body.name,
            modelo: req.body.modelo,
            price: req.body.price,
            description: req.body.description,
            descriptionSeg: req.body.descriptionSeg,
            clasificacion_id: req.body.clasificacion,
            foto : foto
        })
            .then(function(product){
                console.log(product);
                return res.redirect('/products');
            })
        
    },

    detail : function (req, res) {

        db.Productos.findByPk(req.params.id, {
            include: [{association: "clasificacion"}]
        })
            .then(function (products) {
                console.log(products);
                return res.render('detail', { products: products, errors : {}, body: {} });
            })

    },

    formEdit : (req, res) => {
        
        db.Productos.findByPk(req.params.id, {
            include: [{association: "clasificacion"}]
        })
            .then(function(products){
                res.render('edit', { products: products, errors : {}, body: {}});
            })
        
    },

    edit : function (req, res) {
        
        let errors = validationResult(req);
        console.log(errors.mapped());

        if (!errors.isEmpty()) {
            res.render('edit', {errors : errors.mapped(), body: req.body});
        }

        let foto = '';

        if (req.file) {
            foto = req.file.filename;
        }

        db.Productos.update({
            name: req.body.name,
            modelo: req.body.modelo,
            price: req.body.price,
            description: req.body.description,
            descriptionSeg: req.body.descriptionSeg,
            clasificacion_id: req.body.clasificacion,
            foto : foto
        }, {
            where: {
                id: req.params.id
            }
        })

        return res.redirect('/products');
    

    },

    delete : function (req, res) {

        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        });

        return res.redirect('/products');
        
    },

    cart : function (req, res) {

        return res.render('cart');
    }

};

module.exports = controlador;
