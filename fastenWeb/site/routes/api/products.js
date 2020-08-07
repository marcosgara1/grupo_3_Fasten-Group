const express = require('express');
const { route } = require('..');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsController');

router.get('/', productsAPIController.list);

router.get('/:id',productsAPIController.find);

router.post('/', productsAPIController.store);

/*router.post('/addFavourite', function(req, res){
    return res.send('{"hola" : "holis"}');
})*/



module.exports = router;