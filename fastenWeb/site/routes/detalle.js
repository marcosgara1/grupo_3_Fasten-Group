const express = require('express');
const router = express.Router();

const detalleController = require('../controllers/productsController');

router.get('/', detalleController.detail);

module.exports = router;