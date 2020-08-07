const express = require('express');
const { route } = require('..');
const router = express.Router();
const db = require('../../database/models');
const usersAPIController = require('../../controllers/api/productsController');
//const guestMiddleware = require('../../middlewares/guestMiddleware');
/*

router.post('/addFavorite', async function(req, res){

    if(!req.session) {

        return res.json({status: 401, response: 'usuario no logeado'});
    }
    console.log(req.body);

    let user = await db.Cliente.findByPk(req.body.userId);
    
    let product = await db.Productos.findByPk(req.body.productId);

    user.addFavoritos(product);

    
    return res.json({status: 201, response: "Se agregó el producto a Favoritos"});
})



module.exports = router;*/