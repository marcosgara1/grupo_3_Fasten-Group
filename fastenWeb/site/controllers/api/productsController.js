const db = require('../../database/models');
const { Op } = require('sequelize');

let controlador = {

    list: function (req, res) {

            db.Productos.findAll({
                include: [{association: "clasificacion"}]
            })
                .then(function (products) {

                    for (let i = 0; i < products.length; i++){
                        products[i].setDataValue("endpoint", "/api/products/" + products[i].id)
                    }

                    let respuesta = {
                        meta: {
                            status: 200,
                            total: products.length,
                            url:"/api/products"
                        },
                        data: products
                    };
                    res.json(respuesta);
                })
                .catch(function(error){
                    console.error(error);
                })
        },

        find: function (req, res) {
            db.Productos.findByPk(req.params.id, {
                include: [{association: "clasificacion"}]
            })
                .then(function (product) {
                    console.log(product);
                    res.json(product);
                })
        },

        store: function (req, res){

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
            });
    
            res.json({
                status: 200
            });
        }
    }

module.exports = controlador;