const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/', productsController.list);

router.get('/create', productsController.create);

router.post('/create', productsController.register);

router.get('/:id', productsController.detail);

router.get('/:id/formularioEditar', productsController.formEdit);

router.put('/:id/formularioEditar', productsController.edit)




module.exports = router;