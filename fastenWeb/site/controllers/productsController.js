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
                ]
                //include: [{association: 'clasificacion'}]
            })
            .then(function(products){
                return res.render('products', { products : products })
            })
            .catch(function(error){
                console.error(error);
            });
        }
        
    },

    formCreate : function (req, res) {
        
        return res.render('create');
    
    },

    create : function (req, res, next) {

        db.Productos.create({
            name: req.body.name,
            modelo: req.body.modelo,
            price: req.body.price,
            description: req.body.description,
            descriptionSeg: req.body.descriptionSeg,
            //clasificacion: req.body.clasificacion,
            foto : req.files[0].filename
        })

        return res.redirect('products')
        
    },

    detail : function (req, res) {

        db.Productos.findByPk(req.params.id/* {
            /*include: [{association: "clasificacion"}]
        }*/)
            .then(function (products) {
                console.log(products);
                res.render('detail', { products: products });
            })

    },

    formEdit : function (req, res) {

        db.Productos.findByPk(req.params.id)
            .then(function(products){
                res.render('edit', { products: products });
            })
        
    },

    edit : function (req, res) {

        db.Producto.update({
            name: req.body.name,
            modelo: req.body.modelo,
            price: req.body.price,
            description: req.body.description,
            descriptionSeg: req.body.descriptionSeg,
            clasificacion_id: req.body.clasificacion,
            foto : req.files[0].filename
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products');

    },

    delete : function (req, res) {

        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/products');
        
    },

    cart : function (req, res) {

        res.render('cart');
    }

};

module.exports = controlador;
